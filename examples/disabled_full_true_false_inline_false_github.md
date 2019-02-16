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

*addition:* `5f87b3b1`: add fixes to statistics

*addition:* `2a422db9`: add update commit support
> Allows update commits to be detected by the system.

*addition:* `223c6ecd`: add fix commit support
> Allows commits that are fixes to be detected.

*addition:* `31b21318`: add more info to examples readme
> So that it is easier to browse the folder's 100s of files.

*addition:* `eeb75f31`: add codealike file
> So that people who work on this are working with the same project.

*addition:* `537ce93e`: add test/example generator
> This goes through every combination and generates an example file.

*addition:* `71e1d283`: add package.json
> So that people can use this on NPM

*addition:* `c98dca5e`: add generator
> This is what generates the changelogs

*addition:* `f79ea73c`: add basic readme
> Nothing much yet in here. TODO add more to Readme

*addition:* `03a42bd4`: add intellij files
> Allows people using IDEs based on the Intellij platform to have everything set up

*change:* `8b8ab47f`: change text newline to be before each commit
> This will mean that the first commit will be on a different line to the previous message, and it does not matter for the last commit as it has a header after.

*change:* `3f118290`: change test to use current repository
> So that it doesn't give away TRADE SECRETS 🤐

*fix:* `d2ed1a36`: fix displaying `***` by using html escape char

*fix:* `e2893c62`: fix using incorrect variable for update commits
> Was `mergeCommits`, should have been `updateCommits`

*fix:* `3270dec2`: fix wording of update statistics

*fix:* `a05e7673`: fix using wrong variable for update statistics
> Should have been `updateCommits`, was `mergeCommits`

*fix:* `388ed8e0`: fix using `mergeCommits` instead of `fixCommits`

*fix:* `0db93166`: fix code block not showing everything
> It wasn't working because one of the values was on the same line as the code block opening.

*merge:* `88e76112`: Merge branch 'hotfix/first-commit-on-same-line' into develop

*merge:* `6f8e4c45`: Merge branch 'hotfix/first-commit-on-same-line'

*update:* `86b87788`: update examples

*update:* `4b6f2fd8`: update examples

*update:* `2f3d4e9f`: update examples

*other:* `5af6e59e`: escape fix symbol
> Otherwise it would display `***`, we want just `*` in italics.

*other:* `292e1c61`: Initial commit
