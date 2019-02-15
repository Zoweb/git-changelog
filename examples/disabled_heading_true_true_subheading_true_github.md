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
##### Additions

 `5f87b3b1d60db96cd9f3f838f0a161e6a2358753`: add fixes to statistics

 `2a422db99561210e0d43ff19071dd35b68bc68bd`: add update commit support ([description](#2a422db99561210e0d43ff19071dd35b68bc68bd-14))

 `223c6ecdec0cde19c0ec88e83b29aed6904d2e08`: add fix commit support ([description](#223c6ecdec0cde19c0ec88e83b29aed6904d2e08-14))

 `31b2131866556049ae926d4abaf2b492a1e2af28`: add more info to examples readme ([description](#31b2131866556049ae926d4abaf2b492a1e2af28-14))

 `eeb75f31aa45a630b30aff066ffe2f2d81ab4b0a`: add codealike file ([description](#eeb75f31aa45a630b30aff066ffe2f2d81ab4b0a-14))

 `537ce93e1967e25c3a988f4ce92ec886e7d316eb`: add test/example generator ([description](#537ce93e1967e25c3a988f4ce92ec886e7d316eb-14))

 `71e1d2830a151f4c95a9f5533c6bdc10fa28069e`: add package.json ([description](#71e1d2830a151f4c95a9f5533c6bdc10fa28069e-14))

 `c98dca5eac6d4f749be01bb619264628f470901d`: add generator ([description](#c98dca5eac6d4f749be01bb619264628f470901d-14))

 `f79ea73cdc47fd8cbca8d9013bbc3942c4119f12`: add basic readme ([description](#f79ea73cdc47fd8cbca8d9013bbc3942c4119f12-14))

 `03a42bd4d1609bf91474560347b54bfec824983b`: add intellij files ([description](#03a42bd4d1609bf91474560347b54bfec824983b-14))
##### Removals

##### Changes

 `8b8ab47fc4193261506d9fd2e2c9f0f4dfa72f12`: change text newline to be before each commit ([description](#8b8ab47fc4193261506d9fd2e2c9f0f4dfa72f12-14))

 `3f11829000fba42a4476ca59563ee0460689c958`: change test to use current repository ([description](#3f11829000fba42a4476ca59563ee0460689c958-14))
##### Fixes

 `d2ed1a36ef1b094c6b94758ab169af21970ac315`: fix displaying `***` by using html escape char

 `e2893c627fd66e2ede2eac395812e95162ae0d15`: fix using incorrect variable for update commits ([description](#e2893c627fd66e2ede2eac395812e95162ae0d15-14))

 `3270dec26daaff7b983109c1e29909f6ccd4c29a`: fix wording of update statistics

 `a05e767311e7147fa2647d3e848fc880ea733582`: fix using wrong variable for update statistics ([description](#a05e767311e7147fa2647d3e848fc880ea733582-14))

 `388ed8e0e084e06dd88e50573051ee2131c95923`: fix using `mergeCommits` instead of `fixCommits`

 `0db931663b07b7866c00ba3d7be7c349891cdc78`: fix code block not showing everything ([description](#0db931663b07b7866c00ba3d7be7c349891cdc78-14))
##### Merges

##### Updates

 `4b6f2fd8257c01b18ea00ac4888f4fb59e9c88c8`: update examples

 `2f3d4e9f3094680900efc613b322563e7142a1d5`: update examples
##### Other

 `5af6e59e002a29ae7bc48cb326e8b5c1d083f67d`: escape fix symbol ([description](#5af6e59e002a29ae7bc48cb326e8b5c1d083f67d-14))

 `292e1c610efa3461ab617cf86dcc537c5e9cbc5a`: Initial commit
### Descriptions
##### 2a422db99561210e0d43ff19071dd35b68bc68bd
Allows update commits to be detected by the system.
##### 223c6ecdec0cde19c0ec88e83b29aed6904d2e08
Allows commits that are fixes to be detected.
##### 31b2131866556049ae926d4abaf2b492a1e2af28
So that it is easier to browse the folder's 100s of files.
##### eeb75f31aa45a630b30aff066ffe2f2d81ab4b0a
So that people who work on this are working with the same project.
##### 537ce93e1967e25c3a988f4ce92ec886e7d316eb
This goes through every combination and generates an example file.
##### 71e1d2830a151f4c95a9f5533c6bdc10fa28069e
So that people can use this on NPM
##### c98dca5eac6d4f749be01bb619264628f470901d
This is what generates the changelogs
##### f79ea73cdc47fd8cbca8d9013bbc3942c4119f12
Nothing much yet in here. TODO add more to Readme
##### 03a42bd4d1609bf91474560347b54bfec824983b
Allows people using IDEs based on the Intellij platform to have everything set up
##### 8b8ab47fc4193261506d9fd2e2c9f0f4dfa72f12
This will mean that the first commit will be on a different line to the previous message, and it does not matter for the last commit as it has a header after.
##### 3f11829000fba42a4476ca59563ee0460689c958
So that it doesn't give away TRADE SECRETS 🤐
##### e2893c627fd66e2ede2eac395812e95162ae0d15
Was `mergeCommits`, should have been `updateCommits`
##### a05e767311e7147fa2647d3e848fc880ea733582
Should have been `updateCommits`, was `mergeCommits`
##### 0db931663b07b7866c00ba3d7be7c349891cdc78
It wasn't working because one of the values was on the same line as the code block opening.
##### 5af6e59e002a29ae7bc48cb326e8b5c1d083f67d
Otherwise it would display `***`, we want just `*` in italics.
