#!/usr/bin/env node

const Git = require("nodegit");
const GithubSlugger = require("github-slugger");
const StringBuilder = require("stringbuilder");
const program = require("commander");
const packageJson = require("./package");
const fs = require("fs");
const findVersions = require("find-versions");

const slugger = new GithubSlugger();

function formatDate(date) {
    return date.getFullYear() + "/" +
        ("0" + (date.getMonth()+1)).slice(-2) + "/" +
        ("0" + date.getDate()).slice(-2);
}

function getRepository(path) {
    return Git.Repository.open(path);
}

function getCommits(repository) {
    const walker = Git.Revwalk.create(repository);
    walker.pushGlob("refs/heads/*");

    return walker.getCommitsUntil(c => true)
        .then(commits => commits.map(it => ({
            sha: it.sha(),
            shaShort: it.sha().substr(0, 8),
            summary: it.message().split("\n")[0],
            description: it.message().split("\n").slice(1).join("\n").substr(1),
            date: it.date(),
            author: it.author()
        })));
}

function getCommitsStartingWith(startsWith, commits) {
    return commits.filter(it => it.summary.toLowerCase().startsWith(startsWith.toLowerCase()));
}

function getCommitsNotStartingWith(startsWith, commits) {
    if (typeof startsWith === "string") startsWith = [startsWith];

    return commits.filter(it => !startsWith.some(start => it.summary.toLowerCase().startsWith(start.toLowerCase())))
}

const commitLinkGenerators = {
    devops(hash, shortHash) {
        return `commit/${hash}?refName=refs/heads/master`;
    },
    disabled() {
        return false
    }
};

const headingLinkGenerators = {
    github: slugger.slug.bind(slugger)
};

function splitVersions(commits) {
    const versionCommits = {};

    let currentVersion = "0.0.0";
    let hasVersionBeenFound = false;
    let hasWarnedAboutNoVersion = false;
    const commitsReversed = commits.slice().reverse();
    for (const commit of commitsReversed) {
        const versions = findVersions(commit.summary);
        if (versions.length) {
            if (commit.summary.toLowerCase().indexOf("dep")) {
                // this may be a message for updating a dependency
                process.emitWarning("possibly found update commit, however it looks to be for a dependency", {
                    code: "UPDATE_IGNORED",
                    detail: "commit hash: " + commit.sha + ", message: " + commit.summary
                });
            } else {
                if (versions.length > 1) {
                    process.emitWarning("multiple version numbers found in commit. using first", {
                        code: "MULTIPLE_VERSIONS",
                        detail: "commit hash: " + commit.sha + ", message: " + commit.summary
                    });
                }

                currentVersion = versions[0];
                hasVersionBeenFound = true;
            }
        }

        if (typeof versionCommits[currentVersion] === "undefined") versionCommits[currentVersion] = [];
        versionCommits[currentVersion].push(commit);

        if (!hasWarnedAboutNoVersion && !hasVersionBeenFound) {
            hasWarnedAboutNoVersion = true;

            process.emitWarning("unversioned code exists. will use version " + currentVersion, {
                code: "UNKNOWN_VERSION"
            });
        }
    }

    for (const version of Object.keys(versionCommits)) {
        versionCommits[version].reverse();
    }

    return versionCommits;
}

async function generateVersionedChangelog(path, cmd) {
    const repository = await getRepository(path);
    const commits = await getCommits(repository);

    const versions = splitVersions(commits);

    const builder = new StringBuilder();
    builder.appendLine("# Changelog");

    const versionKeys = Object.keys(versions).reverse();

    for (const version of versionKeys) {
        const commits = versions[version];

        builder.appendLine(`## ${version} (${formatDate(commits[0].date)})` );
        builder.append(await generateChangelog(commits, cmd));
    }

    return builder;
}

async function generateChangelog(commits, cmd) {
    const builder = new StringBuilder();

    const commitsList = [];

    const addCommits = getCommitsStartingWith("add", commits);
    commitsList.push(...addCommits.map(it => ({
        type: {
            full: "addition",
            char: "a",
            symbol: "+"
        },
        commit: it
    })));

    const removeCommits = getCommitsStartingWith("remove", commits);
    commitsList.push(...removeCommits.map(it => ({
        type: {
            full: "removal",
            char: "r",
            symbol: "-"
        },
        commit: it
    })));

    const changeCommits = getCommitsStartingWith("change", commits);
    commitsList.push(...changeCommits.map(it => ({
        type: {
            full: "change",
            char: "c",
            symbol: "\\*"
        },
        commit: it
    })));

    const fixCommits = getCommitsStartingWith("fix", commits);
    commitsList.push(...fixCommits.map(it => ({
        type: {
            full: "fix",
            char: "f",
            symbol: "*"
        },
        commit: it
    })));

    const mergeCommits = getCommitsStartingWith("merge", commits);
    commitsList.push(...mergeCommits.map(it => ({
        type: {
            full: "merge",
            char: "m",
            symbol: ">"
        },
        commit: it
    })));

    const updateCommits = getCommitsStartingWith("update", commits);
    commitsList.push(...mergeCommits.map(it => ({
        type: {
            full: "update",
            char: "u",
            symbol: "^"
        },
        commit: it
    })));

    const otherCommits = getCommitsNotStartingWith(["add", "remove", "change", "merge", "fix", "update"], commits);
    commitsList.push(...otherCommits.map(it => ({
        type: {
            full: "other",
            char: "o",
            symbol: "?"
        },
        commit: it
    })));

    const message = commitsList.map(it => {
        const typeIdentifier = it.type[cmd.typeMode] + (cmd.typeMode !== "symbol" ? ":" : "");
        const commitId = cmd.longId ? it.commit.sha : it.commit.shaShort;
        const commitIdLink = commitLinkGenerators[cmd.commitLinkGenerator](it.commit.sha, it.commit.shaShort);
        const commitIdMarkdown = commitIdLink === false ? `\`${commitId}\`` : `[\`${commitId}\`](${commitIdLink})`;

        return {
            text: `${cmd.typeMode !== "heading" ? `*${typeIdentifier}*` : ""}${cmd.showId ? ` ${commitIdMarkdown}:` : ""} \
${it.commit.summary}\
${cmd.description === "subheading" && it.commit.description ? ` ([description](#${headingLinkGenerators[cmd.headingLinkGenerator](cmd.subheadingUseId ? cmd.longId ? it.commit.sha : it.commit.shaShort : it.commit.summary)}))` : ""}\
${cmd.description === "inline" && it.commit.description ? "\n`    " + it.commit.description.replace(/\n/g, "\n    ") + "`" : ""}\n`
,
            commit: it
        }
    });

    builder
        .appendLine("#### Statistics")
        .append("**commit count**: ").appendLine(commits.length.toString()).appendLine()
        .append("**additions**: ").appendLine(addCommits.length.toString()).appendLine()
        .append("**removals**: ").appendLine(removeCommits.length.toString()).appendLine()
        .append("**changes**: ").appendLine(changeCommits.length.toString()).appendLine()
        .append("**merges**: ").appendLine(mergeCommits.length.toString()).appendLine()
        .append("**update**: ").appendLine(mergeCommits.length.toString()).appendLine()
        .append("**other commits**: ").appendLine(otherCommits.length.toString()).appendLine()
        .appendLine("#### Log")
        .appendLine("<small>(note: any additions may have been removed, and any removals may have been added back in.)</small>");

    if (cmd.typeMode === "heading") {
        builder.appendLine("##### Additions")
            .appendLine(message.filter(it => it.commit.type.full === "addition").map(it => it.text).join("\n"))
            .appendLine("##### Removals")
            .appendLine(message.filter(it => it.commit.type.full === "removal").map(it => it.text).join("\n"))
            .appendLine("##### Changes")
            .appendLine(message.filter(it => it.commit.type.full === "change").map(it => it.text).join("\n"))
            .appendLine("##### Fixes")
            .appendLine(message.filter(it => it.commit.type.full === "fix").map(it => it.text).join("\n"))
            .appendLine("##### Merges")
            .appendLine(message.filter(it => it.commit.type.full === "merge").map(it => it.text).join("\n"))
            .appendLine("##### Updates")
            .appendLine(message.filter(it => it.commit.type.full === "update").map(it => it.text).join("\n"))
            .appendLine("##### Other")
            .appendLine(message.filter(it => it.commit.type.full === "other").map(it => it.text).join("\n"));
    } else {
        builder.appendLine(message.map(it => it.text).join("\n"));
    }

    if (cmd.description === "subheading") {
        builder.appendLine("### Descriptions");

        commitsList.filter(it => it.commit.description).forEach(it => {
            const headerText = cmd.subheadingUseId ? cmd.longId ? it.commit.sha : it.commit.shaShort : it.commit.summary;
            const commitLink = commitLinkGenerators[cmd.commitLinkGenerator](it.commit.sha, it.commit.shaShort);
            builder.appendLine("##### " + (commitLink ? `[${headerText}](${commitLink})` : headerText))
                .appendLine(it.commit.description);
        });
    }

    return builder;
}

function addOptions(command) {
    return command
        .option("-c, --commit-link-generator [type]", "Generator to create links for commit hashes", new RegExp(Object.keys(commitLinkGenerators).join("|")), "devops")
        .option("-t, --type-mode [mode]", "Specify type mode", /full|char|symbol|heading/, "symbol")
        .option("-i, --show-id", "Show the commit ID")
        .option("-l, --long-id", "Use the full-length ID.")
        .option("-d, --description [mode]", "Specify the description mode", /disabled|subheading|inline/, "inline")
        .option("-s, --subheading-use-id", "Use the commit ID as description subheadings")
        .option("-h, --heading-link-generator [type]", "Generator to create links for headings", new RegExp(Object.keys(headingLinkGenerators).join("|")), "github");
}

addOptions(program
    .version(packageJson.version)
    .command("print <repo>"))
    .action(async (path, cmd) => {
        const result = await generateVersionedChangelog(path, cmd);

        result.pipe(process.stdout);
        result.flush();
    });

addOptions(program
    .version(packageJson.version)
    .command("write <repo> <file>"))
    .action(async (path, file, cmd) => {
        const result = await generateVersionedChangelog(path, cmd);
        const stream = fs.createWriteStream(file, "utf-8");

        result.pipe(stream);
        result.flush();
    });

module.exports = function(repository, options) {
    return generateVersionedChangelog(repository, options)
        .then(result => new Promise((yay, nay) => result.toString((err, res) => err ? nay(err) : yay(res))));
};

program.parse(process.argv);

process.on("unhandledRejection", err => {
    console.error(err.stack);
});