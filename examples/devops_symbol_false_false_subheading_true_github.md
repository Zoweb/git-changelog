# Changelog
## 0.0.0 (2019/02/16)
#### Statistics
**commit count**: 32

**additions**: 14

**removals**: 0

**changes**: 3

**fixes**: 6

**merges**: 3

**updates**: 4

**other commits**: 2

#### Log
<small>(note: any additions may have been removed, and any removals may have been added back in.)</small>

*+* add changelog

*+* add changelog generator ([description](#c17b8bba-5))

*+* add warning for using arguments

*+* add readme ([description](#f64c16e3-5))

*+* add fixes to statistics

*+* add update commit support ([description](#2a422db9-5))

*+* add fix commit support ([description](#223c6ecd-5))

*+* add more info to examples readme ([description](#31b21318-5))

*+* add codealike file ([description](#eeb75f31-5))

*+* add test/example generator ([description](#537ce93e-5))

*+* add package.json ([description](#71e1d283-5))

*+* add generator ([description](#c98dca5e-5))

*+* add basic readme ([description](#f79ea73c-5))

*+* add intellij files ([description](#03a42bd4-5))

*&ast;* change inline description to use blockquote ([description](#bf070051-5))

*&ast;* change text newline to be before each commit ([description](#8b8ab47f-5))

*&ast;* change test to use current repository ([description](#3f118290-5))

*&ast;* fix displaying `***` by using html escape char

*&ast;* fix using incorrect variable for update commits ([description](#e2893c62-5))

*&ast;* fix wording of update statistics

*&ast;* fix using wrong variable for update statistics ([description](#a05e7673-5))

*&ast;* fix using `mergeCommits` instead of `fixCommits`

*&ast;* fix code block not showing everything ([description](#0db93166-5))

*>* Merge branch 'feature/readme' into develop

*>* Merge branch 'hotfix/first-commit-on-same-line'

*>* Merge branch 'hotfix/first-commit-on-same-line' into develop

*^* Update examples

*^* update examples

*^* update examples

*^* update examples

*?* escape fix symbol ([description](#5af6e59e-5))

*?* Initial commit
### Descriptions
##### [c17b8bba](commit/c17b8bba3ca52bcae219be4302d703401d3730c4?refName=refs/heads/master)
It would be odd if this package didn't use itself!                    
##### [f64c16e3](commit/f64c16e3cd10f7ef672d07e987b174fdff2cc824?refName=refs/heads/master)
To allow people to see what everything is about
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
##### [bf070051](commit/bf070051bdd9fda2101652b5d557c0b748822d02?refName=refs/heads/master)
This forces it to be on a newline, and also allows for more display options for any descriptions.
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
