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

*a:* `5f87b3b1`: add fixes to statistics

*a:* `2a422db9`: add update commit support ([description](#2a422db9-9))

*a:* `223c6ecd`: add fix commit support ([description](#223c6ecd-9))

*a:* `31b21318`: add more info to examples readme ([description](#31b21318-9))

*a:* `eeb75f31`: add codealike file ([description](#eeb75f31-9))

*a:* `537ce93e`: add test/example generator ([description](#537ce93e-9))

*a:* `71e1d283`: add package.json ([description](#71e1d283-9))

*a:* `c98dca5e`: add generator ([description](#c98dca5e-9))

*a:* `f79ea73c`: add basic readme ([description](#f79ea73c-9))

*a:* `03a42bd4`: add intellij files ([description](#03a42bd4-9))

*c:* `8b8ab47f`: change text newline to be before each commit ([description](#8b8ab47f-9))

*c:* `3f118290`: change test to use current repository ([description](#3f118290-9))

*f:* `d2ed1a36`: fix displaying `***` by using html escape char

*f:* `e2893c62`: fix using incorrect variable for update commits ([description](#e2893c62-9))

*f:* `3270dec2`: fix wording of update statistics

*f:* `a05e7673`: fix using wrong variable for update statistics ([description](#a05e7673-9))

*f:* `388ed8e0`: fix using `mergeCommits` instead of `fixCommits`

*f:* `0db93166`: fix code block not showing everything ([description](#0db93166-9))

*m:* `88e76112`: Merge branch 'hotfix/first-commit-on-same-line' into develop

*m:* `6f8e4c45`: Merge branch 'hotfix/first-commit-on-same-line'

*u:* `86b87788`: update examples

*u:* `4b6f2fd8`: update examples

*u:* `2f3d4e9f`: update examples

*o:* `5af6e59e`: escape fix symbol ([description](#5af6e59e-9))

*o:* `292e1c61`: Initial commit
### Descriptions
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
