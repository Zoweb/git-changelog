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

*+* `c233fd4a61c75bf2477459e40257f5654e450350`: add changelog

*+* `c17b8bba3ca52bcae219be4302d703401d3730c4`: add changelog generator
> It would be odd if this package didn't use itself!                    

*+* `463bb7bad647d662931fcb5fb2adf6bc7343ef9e`: add warning for using arguments

*+* `f64c16e3cd10f7ef672d07e987b174fdff2cc824`: add readme
> To allow people to see what everything is about

*+* `5f87b3b1d60db96cd9f3f838f0a161e6a2358753`: add fixes to statistics

*+* `2a422db99561210e0d43ff19071dd35b68bc68bd`: add update commit support
> Allows update commits to be detected by the system.

*+* `223c6ecdec0cde19c0ec88e83b29aed6904d2e08`: add fix commit support
> Allows commits that are fixes to be detected.

*+* `31b2131866556049ae926d4abaf2b492a1e2af28`: add more info to examples readme
> So that it is easier to browse the folder's 100s of files.

*+* `eeb75f31aa45a630b30aff066ffe2f2d81ab4b0a`: add codealike file
> So that people who work on this are working with the same project.

*+* `537ce93e1967e25c3a988f4ce92ec886e7d316eb`: add test/example generator
> This goes through every combination and generates an example file.

*+* `71e1d2830a151f4c95a9f5533c6bdc10fa28069e`: add package.json
> So that people can use this on NPM

*+* `c98dca5eac6d4f749be01bb619264628f470901d`: add generator
> This is what generates the changelogs

*+* `f79ea73cdc47fd8cbca8d9013bbc3942c4119f12`: add basic readme
> Nothing much yet in here. TODO add more to Readme

*+* `03a42bd4d1609bf91474560347b54bfec824983b`: add intellij files
> Allows people using IDEs based on the Intellij platform to have everything set up

*&ast;* `bf070051bdd9fda2101652b5d557c0b748822d02`: change inline description to use blockquote
> This forces it to be on a newline, and also allows for more display options for any descriptions.

*&ast;* `8b8ab47fc4193261506d9fd2e2c9f0f4dfa72f12`: change text newline to be before each commit
> This will mean that the first commit will be on a different line to the previous message, and it does not matter for the last commit as it has a header after.

*&ast;* `3f11829000fba42a4476ca59563ee0460689c958`: change test to use current repository
> So that it doesn't give away TRADE SECRETS 🤐

*&ast;* `d2ed1a36ef1b094c6b94758ab169af21970ac315`: fix displaying `***` by using html escape char

*&ast;* `e2893c627fd66e2ede2eac395812e95162ae0d15`: fix using incorrect variable for update commits
> Was `mergeCommits`, should have been `updateCommits`

*&ast;* `3270dec26daaff7b983109c1e29909f6ccd4c29a`: fix wording of update statistics

*&ast;* `a05e767311e7147fa2647d3e848fc880ea733582`: fix using wrong variable for update statistics
> Should have been `updateCommits`, was `mergeCommits`

*&ast;* `388ed8e0e084e06dd88e50573051ee2131c95923`: fix using `mergeCommits` instead of `fixCommits`

*&ast;* `0db931663b07b7866c00ba3d7be7c349891cdc78`: fix code block not showing everything
> It wasn't working because one of the values was on the same line as the code block opening.

*>* `30d7298aee8f61b5cb41854dec840c6d3c53aba3`: Merge branch 'feature/readme' into develop

*>* `6f8e4c455a0191aa3153db3bc63008abe797812f`: Merge branch 'hotfix/first-commit-on-same-line'

*>* `88e7611206dfb6452101688ee73f854079e7bddb`: Merge branch 'hotfix/first-commit-on-same-line' into develop

*^* `c88155944cb8ea6e4082952312c49d8441051c3d`: Update examples

*^* `86b87788962abef9d35998f135de100f00c63ec1`: update examples

*^* `4b6f2fd8257c01b18ea00ac4888f4fb59e9c88c8`: update examples

*^* `2f3d4e9f3094680900efc613b322563e7142a1d5`: update examples

*?* `5af6e59e002a29ae7bc48cb326e8b5c1d083f67d`: escape fix symbol
> Otherwise it would display `***`, we want just `*` in italics.

*?* `292e1c610efa3461ab617cf86dcc537c5e9cbc5a`: Initial commit
