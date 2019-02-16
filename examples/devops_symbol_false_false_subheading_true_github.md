# Changelog
## 0.0.0 (2019/02/15)
#### Statistics
**commit count**: 25

**additions**: 10

**removals**: 0

**changes**: 2

**fixes**: 6

**merges**: 2

**updates**: 3

**other commits**: 2

#### Log
<small>(note: any additions may have been removed, and any removals may have been added back in.)</small>

*+* add fixes to statistics

*+* add update commit support ([description](#2a422db9-4))

*+* add fix commit support ([description](#223c6ecd-4))

*+* add more info to examples readme ([description](#31b21318-4))

*+* add codealike file ([description](#eeb75f31-4))

*+* add test/example generator ([description](#537ce93e-4))

*+* add package.json ([description](#71e1d283-4))

*+* add generator ([description](#c98dca5e-4))

*+* add basic readme ([description](#f79ea73c-4))

*+* add intellij files ([description](#03a42bd4-4))

*&ast;* change text newline to be before each commit ([description](#8b8ab47f-4))

*&ast;* change test to use current repository ([description](#3f118290-4))

*&ast;* fix displaying `***` by using html escape char

*&ast;* fix using incorrect variable for update commits ([description](#e2893c62-4))

*&ast;* fix wording of update statistics

*&ast;* fix using wrong variable for update statistics ([description](#a05e7673-4))

*&ast;* fix using `mergeCommits` instead of `fixCommits`

*&ast;* fix code block not showing everything ([description](#0db93166-4))

*>* Merge branch 'hotfix/first-commit-on-same-line' into develop

*>* Merge branch 'hotfix/first-commit-on-same-line'

*^* update examples

*^* update examples

*^* update examples

*?* escape fix symbol ([description](#5af6e59e-4))

*?* Initial commit
### Descriptions
##### [2a422db9](commit/2a422db99561210e0d43ff19071dd35b68bc68bd?refName=refs/heads/master)
Allows update commits to be detected by the system.
##### [223c6ecd](commit/223c6ecdec0cde19c0ec88e83b29aed6904d2e08?refName=refs/heads/master)
Allows commits that are fixes to be detected.
##### [31b21318](commit/31b2131866556049ae926d4abaf2b492a1e2af28?refName=refs/heads/master)
So that it is easier to browse the folder's 100s of files.
##### [eeb75f31](commit/eeb75f31aa45a630b30aff066ffe2f2d81ab4b0a?refName=refs/heads/master)
So that people who work on this are working with the same project.
##### [537ce93e](commit/537ce93e1967e25c3a988f4ce92ec886e7d316eb?refName=refs/heads/master)
This goes through every combination and generates an example file.
##### [71e1d283](commit/71e1d2830a151f4c95a9f5533c6bdc10fa28069e?refName=refs/heads/master)
So that people can use this on NPM
##### [c98dca5e](commit/c98dca5eac6d4f749be01bb619264628f470901d?refName=refs/heads/master)
This is what generates the changelogs
##### [f79ea73c](commit/f79ea73cdc47fd8cbca8d9013bbc3942c4119f12?refName=refs/heads/master)
Nothing much yet in here. TODO add more to Readme
##### [03a42bd4](commit/03a42bd4d1609bf91474560347b54bfec824983b?refName=refs/heads/master)
Allows people using IDEs based on the Intellij platform to have everything set up
##### [8b8ab47f](commit/8b8ab47fc4193261506d9fd2e2c9f0f4dfa72f12?refName=refs/heads/master)
This will mean that the first commit will be on a different line to the previous message, and it does not matter for the last commit as it has a header after.
##### [3f118290](commit/3f11829000fba42a4476ca59563ee0460689c958?refName=refs/heads/master)
So that it doesn't give away TRADE SECRETS 🤐
##### [e2893c62](commit/e2893c627fd66e2ede2eac395812e95162ae0d15?refName=refs/heads/master)
Was `mergeCommits`, should have been `updateCommits`
##### [a05e7673](commit/a05e767311e7147fa2647d3e848fc880ea733582?refName=refs/heads/master)
Should have been `updateCommits`, was `mergeCommits`
##### [0db93166](commit/0db931663b07b7866c00ba3d7be7c349891cdc78?refName=refs/heads/master)
It wasn't working because one of the values was on the same line as the code block opening.
##### [5af6e59e](commit/5af6e59e002a29ae7bc48cb326e8b5c1d083f67d?refName=refs/heads/master)
Otherwise it would display `***`, we want just `*` in italics.
