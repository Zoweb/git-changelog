# Changelog
## 0.0.0 (2019/02/15)
#### Statistics
**commit count**: 20

**additions**: 10

**removals**: 0

**changes**: 1

**fixes**: 6

**merges**: 0

**updates**: 1

**other commits**: 2

#### Log
<small>(note: any additions may have been removed, and any removals may have been added back in.)</small>
*addition:* `5f87b3b1d60db96cd9f3f838f0a161e6a2358753`: add fixes to statistics

*addition:* `2a422db99561210e0d43ff19071dd35b68bc68bd`: add update commit support ([description](#add-update-commit-support-16))

*addition:* `223c6ecdec0cde19c0ec88e83b29aed6904d2e08`: add fix commit support ([description](#add-fix-commit-support-16))

*addition:* `31b2131866556049ae926d4abaf2b492a1e2af28`: add more info to examples readme ([description](#add-more-info-to-examples-readme-16))

*addition:* `eeb75f31aa45a630b30aff066ffe2f2d81ab4b0a`: add codealike file ([description](#add-codealike-file-16))

*addition:* `537ce93e1967e25c3a988f4ce92ec886e7d316eb`: add test/example generator ([description](#add-testexample-generator-16))

*addition:* `71e1d2830a151f4c95a9f5533c6bdc10fa28069e`: add package.json ([description](#add-packagejson-16))

*addition:* `c98dca5eac6d4f749be01bb619264628f470901d`: add generator ([description](#add-generator-16))

*addition:* `f79ea73cdc47fd8cbca8d9013bbc3942c4119f12`: add basic readme ([description](#add-basic-readme-16))

*addition:* `03a42bd4d1609bf91474560347b54bfec824983b`: add intellij files ([description](#add-intellij-files-16))

*change:* `3f11829000fba42a4476ca59563ee0460689c958`: change test to use current repository ([description](#change-test-to-use-current-repository-16))

*fix:* `d2ed1a36ef1b094c6b94758ab169af21970ac315`: fix displaying `***` by using html escape char

*fix:* `e2893c627fd66e2ede2eac395812e95162ae0d15`: fix using incorrect variable for update commits ([description](#fix-using-incorrect-variable-for-update-commits-16))

*fix:* `3270dec26daaff7b983109c1e29909f6ccd4c29a`: fix wording of update statistics

*fix:* `a05e767311e7147fa2647d3e848fc880ea733582`: fix using wrong variable for update statistics ([description](#fix-using-wrong-variable-for-update-statistics-16))

*fix:* `388ed8e0e084e06dd88e50573051ee2131c95923`: fix using `mergeCommits` instead of `fixCommits`

*fix:* `0db931663b07b7866c00ba3d7be7c349891cdc78`: fix code block not showing everything ([description](#fix-code-block-not-showing-everything-16))

*update:* `2f3d4e9f3094680900efc613b322563e7142a1d5`: update examples

*other:* `5af6e59e002a29ae7bc48cb326e8b5c1d083f67d`: escape fix symbol ([description](#escape-fix-symbol-16))

*other:* `292e1c610efa3461ab617cf86dcc537c5e9cbc5a`: Initial commit

### Descriptions
##### add update commit support
Allows update commits to be detected by the system.
##### add fix commit support
Allows commits that are fixes to be detected.
##### add more info to examples readme
So that it is easier to browse the folder's 100s of files.
##### add codealike file
So that people who work on this are working with the same project.
##### add test/example generator
This goes through every combination and generates an example file.
##### add package.json
So that people can use this on NPM
##### add generator
This is what generates the changelogs
##### add basic readme
Nothing much yet in here. TODO add more to Readme
##### add intellij files
Allows people using IDEs based on the Intellij platform to have everything set up
##### change test to use current repository
So that it doesn't give away TRADE SECRETS 🤐
##### fix using incorrect variable for update commits
Was `mergeCommits`, should have been `updateCommits`
##### fix using wrong variable for update statistics
Should have been `updateCommits`, was `mergeCommits`
##### fix code block not showing everything
It wasn't working because one of the values was on the same line as the code block opening.
##### escape fix symbol
Otherwise it would display `***`, we want just `*` in italics.
