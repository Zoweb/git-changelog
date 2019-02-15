# Changelog
## 0.0.0 (2019/02/15)
#### Statistics
**commit count**: 22

**additions**: 10

**removals**: 0

**changes**: 2

**fixes**: 6

**merges**: 0

**updates**: 2

**other commits**: 2

#### Log
<small>(note: any additions may have been removed, and any removals may have been added back in.)</small>

*+* add fixes to statistics

*+* add update commit support ([description](#add-update-commit-support-10))

*+* add fix commit support ([description](#add-fix-commit-support-10))

*+* add more info to examples readme ([description](#add-more-info-to-examples-readme-10))

*+* add codealike file ([description](#add-codealike-file-10))

*+* add test/example generator ([description](#add-testexample-generator-10))

*+* add package.json ([description](#add-packagejson-10))

*+* add generator ([description](#add-generator-10))

*+* add basic readme ([description](#add-basic-readme-10))

*+* add intellij files ([description](#add-intellij-files-10))

*&ast;* change text newline to be before each commit ([description](#change-text-newline-to-be-before-each-commit-10))

*&ast;* change test to use current repository ([description](#change-test-to-use-current-repository-10))

*&ast;* fix displaying `***` by using html escape char

*&ast;* fix using incorrect variable for update commits ([description](#fix-using-incorrect-variable-for-update-commits-10))

*&ast;* fix wording of update statistics

*&ast;* fix using wrong variable for update statistics ([description](#fix-using-wrong-variable-for-update-statistics-10))

*&ast;* fix using `mergeCommits` instead of `fixCommits`

*&ast;* fix code block not showing everything ([description](#fix-code-block-not-showing-everything-10))

*^* update examples

*^* update examples

*?* escape fix symbol ([description](#escape-fix-symbol-10))

*?* Initial commit
### Descriptions
##### [add update commit support](commit/2a422db99561210e0d43ff19071dd35b68bc68bd?refName=refs/heads/master)
Allows update commits to be detected by the system.
##### [add fix commit support](commit/223c6ecdec0cde19c0ec88e83b29aed6904d2e08?refName=refs/heads/master)
Allows commits that are fixes to be detected.
##### [add more info to examples readme](commit/31b2131866556049ae926d4abaf2b492a1e2af28?refName=refs/heads/master)
So that it is easier to browse the folder's 100s of files.
##### [add codealike file](commit/eeb75f31aa45a630b30aff066ffe2f2d81ab4b0a?refName=refs/heads/master)
So that people who work on this are working with the same project.
##### [add test/example generator](commit/537ce93e1967e25c3a988f4ce92ec886e7d316eb?refName=refs/heads/master)
This goes through every combination and generates an example file.
##### [add package.json](commit/71e1d2830a151f4c95a9f5533c6bdc10fa28069e?refName=refs/heads/master)
So that people can use this on NPM
##### [add generator](commit/c98dca5eac6d4f749be01bb619264628f470901d?refName=refs/heads/master)
This is what generates the changelogs
##### [add basic readme](commit/f79ea73cdc47fd8cbca8d9013bbc3942c4119f12?refName=refs/heads/master)
Nothing much yet in here. TODO add more to Readme
##### [add intellij files](commit/03a42bd4d1609bf91474560347b54bfec824983b?refName=refs/heads/master)
Allows people using IDEs based on the Intellij platform to have everything set up
##### [change text newline to be before each commit](commit/8b8ab47fc4193261506d9fd2e2c9f0f4dfa72f12?refName=refs/heads/master)
This will mean that the first commit will be on a different line to the previous message, and it does not matter for the last commit as it has a header after.
##### [change test to use current repository](commit/3f11829000fba42a4476ca59563ee0460689c958?refName=refs/heads/master)
So that it doesn't give away TRADE SECRETS 🤐
##### [fix using incorrect variable for update commits](commit/e2893c627fd66e2ede2eac395812e95162ae0d15?refName=refs/heads/master)
Was `mergeCommits`, should have been `updateCommits`
##### [fix using wrong variable for update statistics](commit/a05e767311e7147fa2647d3e848fc880ea733582?refName=refs/heads/master)
Should have been `updateCommits`, was `mergeCommits`
##### [fix code block not showing everything](commit/0db931663b07b7866c00ba3d7be7c349891cdc78?refName=refs/heads/master)
It wasn't working because one of the values was on the same line as the code block opening.
##### [escape fix symbol](commit/5af6e59e002a29ae7bc48cb326e8b5c1d083f67d?refName=refs/heads/master)
Otherwise it would display `***`, we want just `*` in italics.
