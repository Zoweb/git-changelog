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

 `5f87b3b1`: add fixes to statistics

 `2a422db9`: add update commit support
`    Allows update commits to be detected by the system.`

 `223c6ecd`: add fix commit support
`    Allows commits that are fixes to be detected.`

 `31b21318`: add more info to examples readme
`    So that it is easier to browse the folder's 100s of files.`

 `eeb75f31`: add codealike file
`    So that people who work on this are working with the same project.`

 `537ce93e`: add test/example generator
`    This goes through every combination and generates an example file.`

 `71e1d283`: add package.json
`    So that people can use this on NPM`

 `c98dca5e`: add generator
`    This is what generates the changelogs`

 `f79ea73c`: add basic readme
`    Nothing much yet in here. TODO add more to Readme`

 `03a42bd4`: add intellij files
`    Allows people using IDEs based on the Intellij platform to have everything set up`
##### Removals

##### Changes

 `8b8ab47f`: change text newline to be before each commit
`    This will mean that the first commit will be on a different line to the previous message, and it does not matter for the last commit as it has a header after.`

 `3f118290`: change test to use current repository
`    So that it doesn't give away TRADE SECRETS 🤐`
##### Fixes

 `d2ed1a36`: fix displaying `***` by using html escape char

 `e2893c62`: fix using incorrect variable for update commits
`    Was `mergeCommits`, should have been `updateCommits``

 `3270dec2`: fix wording of update statistics

 `a05e7673`: fix using wrong variable for update statistics
`    Should have been `updateCommits`, was `mergeCommits``

 `388ed8e0`: fix using `mergeCommits` instead of `fixCommits`

 `0db93166`: fix code block not showing everything
`    It wasn't working because one of the values was on the same line as the code block opening.`
##### Merges

##### Updates

 `4b6f2fd8`: update examples

 `2f3d4e9f`: update examples
##### Other

 `5af6e59e`: escape fix symbol
`    Otherwise it would display `***`, we want just `*` in italics.`

 `292e1c61`: Initial commit
