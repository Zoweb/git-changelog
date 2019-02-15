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

*a:* add fixes to statistics

*a:* add update commit support ([description](#2a422db9-11))

*a:* add fix commit support ([description](#223c6ecd-11))

*a:* add more info to examples readme ([description](#31b21318-11))

*a:* add codealike file ([description](#eeb75f31-11))

*a:* add test/example generator ([description](#537ce93e-11))

*a:* add package.json ([description](#71e1d283-11))

*a:* add generator ([description](#c98dca5e-11))

*a:* add basic readme ([description](#f79ea73c-11))

*a:* add intellij files ([description](#03a42bd4-11))

*c:* change text newline to be before each commit ([description](#8b8ab47f-11))

*c:* change test to use current repository ([description](#3f118290-11))

*f:* fix displaying `***` by using html escape char

*f:* fix using incorrect variable for update commits ([description](#e2893c62-11))

*f:* fix wording of update statistics

*f:* fix using wrong variable for update statistics ([description](#a05e7673-11))

*f:* fix using `mergeCommits` instead of `fixCommits`

*f:* fix code block not showing everything ([description](#0db93166-11))

*u:* update examples

*u:* update examples

*o:* escape fix symbol ([description](#5af6e59e-11))

*o:* Initial commit
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
