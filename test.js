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
    fs.writeFileSync("examples/README.md", "# Examples\n\nThese are autogenerated examples from the Virtual TRPG" +
        " repository for every combination of options.");
}
lazyProduct(options, (commitLinkGenerator, typeMode, showId, longId, description, subheadingUseId, headingLinkGenerator) => {
    const fileName = `examples/${commitLinkGenerator}_${typeMode}_${showId}_${longId}_${description}_${subheadingUseId}_${headingLinkGenerator}.md`;
    console.log("Generating", fileName);
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