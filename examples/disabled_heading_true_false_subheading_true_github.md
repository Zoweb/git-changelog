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
##### Additions

 `c233fd4a`: add changelog

 `c17b8bba`: add changelog generator ([description](#c17b8bba-14))

 `463bb7ba`: add warning for using arguments

 `f64c16e3`: add readme ([description](#f64c16e3-14))

 `5f87b3b1`: add fixes to statistics

 `2a422db9`: add update commit support ([description](#2a422db9-14))

 `223c6ecd`: add fix commit support ([description](#223c6ecd-14))

 `31b21318`: add more info to examples readme ([description](#31b21318-14))

 `eeb75f31`: add codealike file ([description](#eeb75f31-14))

 `537ce93e`: add test/example generator ([description](#537ce93e-14))

 `71e1d283`: add package.json ([description](#71e1d283-14))

 `c98dca5e`: add generator ([description](#c98dca5e-14))

 `f79ea73c`: add basic readme ([description](#f79ea73c-14))

 `03a42bd4`: add intellij files ([description](#03a42bd4-14))
##### Removals

##### Changes

 `bf070051`: change inline description to use blockquote ([description](#bf070051-14))

 `8b8ab47f`: change text newline to be before each commit ([description](#8b8ab47f-14))

 `3f118290`: change test to use current repository ([description](#3f118290-14))
##### Fixes

 `d2ed1a36`: fix displaying `***` by using html escape char

 `e2893c62`: fix using incorrect variable for update commits ([description](#e2893c62-14))

 `3270dec2`: fix wording of update statistics

 `a05e7673`: fix using wrong variable for update statistics ([description](#a05e7673-14))

 `388ed8e0`: fix using `mergeCommits` instead of `fixCommits`

 `0db93166`: fix code block not showing everything ([description](#0db93166-14))
##### Merges

 `30d7298a`: Merge branch 'feature/readme' into develop

 `6f8e4c45`: Merge branch 'hotfix/first-commit-on-same-line'

 `88e76112`: Merge branch 'hotfix/first-commit-on-same-line' into develop
##### Updates

 `c8815594`: Update examples

 `86b87788`: update examples

 `4b6f2fd8`: update examples

 `2f3d4e9f`: update examples
##### Other

 `5af6e59e`: escape fix symbol ([description](#5af6e59e-14))

 `292e1c61`: Initial commit
### Descriptions
##### c17b8bba
It would be odd if this package didn't use itself!                    
##### f64c16e3
To allow people to see what everything is about
##### 2a422db9
Allows update commits to be detected by the system.
##### 223c6ecd
Allows commits that are fixes to be detected.
##### 31b21318
So that it is easier to browse the folder's 100s of files.
##### eeb75f31
So that people who work on this are working with the same project.
##### 537ce93e
This goes through every combination and generates an example file.
##### 71e1d283
So that people can use this on NPM
##### c98dca5e
This is what generates the changelogs
##### f79ea73c
Nothing much yet in here. TODO add more to Readme
##### 03a42bd4
Allows people using IDEs based on the Intellij platform to have everything set up
##### bf070051
This forces it to be on a newline, and also allows for more display options for any descriptions.
##### 8b8ab47f
This will mean that the first commit will be on a different line to the previous message, and it does not matter for the last commit as it has a header after.
##### 3f118290
So that it doesn't give away TRADE SECRETS 🤐
##### e2893c62
Was `mergeCommits`, should have been `updateCommits`
##### a05e7673
Should have been `updateCommits`, was `mergeCommits`
##### 0db93166
It wasn't working because one of the values was on the same line as the code block opening.
##### 5af6e59e
Otherwise it would display `***`, we want just `*` in italics.
