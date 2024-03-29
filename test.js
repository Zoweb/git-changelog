// this test runs through all of the different combinations of options and generates a CHANGELOG for them.

const fs = require("fs");
const gitChangelog = require("./index");

const repoPath = ".";

const options = Object.values({
    commitLinkGenerator: ["devops", "disabled"],
    typeMode: ["full", "char", "symbol", "heading"],
    showId: [true, false],
    longId: [true, false],
    description: ["disabled", "subheading", "inline"],
    subheadingUseId: [true, false],
    headingLinkGenerator: ["github"]
});

if (!fs.existsSync("examples")) {
    fs.mkdirSync("examples");
}

let exampleReadmeContents = "# Examples\n\nThese are autogenerated examples from the Virtual TRPG" +
    " repository for every combination of options.\n\n" +
    "Each file is the option names separated by an underscore. If there is a value 'true', it means that option" +
    " exists and has no value. If it is 'false', it means that option does not exist.\n\n" +
    "The order is in the following:\n" +
    "```\n" +
    "--commit-link-generator\n" +
    "--type-mode\n" +
    "--show-id\n" +
    "--long-id\n" +
    "--description\n" +
    "--subheading-use-id\n" +
    "--heading-link-generator\n" +
    "```\n\n";

const headers = ["LINK", "commit-link-generator", "type-mode", "show-id", "long-id", "description", "subheading-use-id", "heading-link-generator"];
exampleReadmeContents += "| " + headers.join(" | ") + " |\n";
exampleReadmeContents += "| " + headers.map(it => "-".repeat(it.length)).join(" | ") + " |\n";

lazyProduct(options, (commitLinkGenerator, typeMode, showId, longId, description, subheadingUseId, headingLinkGenerator) => {
    const fileName = `examples/${commitLinkGenerator}_${typeMode}_${showId}_${longId}_${description}_${subheadingUseId}_${headingLinkGenerator}.md`;
    console.log("Generating", fileName);
    exampleReadmeContents += `| [LINK](${fileName.substr("examples/".length)}) | ${commitLinkGenerator} | ${typeMode} | ${showId} | ${longId} | ${description} | ${subheadingUseId} | ${headingLinkGenerator} |\n`;
    gitChangelog(repoPath, {
        commitLinkGenerator,
        typeMode,
        showId,
        longId,
        description,
        subheadingUseId,
        headingLinkGenerator
    }).then(result => {
        console.log("Finished generating", fileName);
        fs.writeFileSync(fileName, result)
    });
});

fs.writeFileSync("examples/README.md", exampleReadmeContents);

function lazyProduct(sets, callback, context) {
    const p = [],
        max = sets.length - 1,
        lengths = Array.from(sets, it => it.length);

    function dive(d) {
        const a = sets[d], length = lengths[d];

        if (d === max) for (let i = 0; i < length; i++) {
            p[d] = a[i];
            callback.apply(context, p);
        } else for (let i = 0; i < length; i++) {
            p[d] = a[i];
            dive(d + 1);
        }
    }

    dive(0);
}