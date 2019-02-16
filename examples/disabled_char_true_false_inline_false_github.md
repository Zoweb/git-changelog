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

*a:* `c233fd4a`: add changelog

*a:* `c17b8bba`: add changelog generator
> It would be odd if this package didn't use itself!                    

*a:* `463bb7ba`: add warning for using arguments

*a:* `f64c16e3`: add readme
> To allow people to see what everything is about

*a:* `5f87b3b1`: add fixes to statistics

*a:* `2a422db9`: add update commit support
> Allows update commits to be detected by the system.

*a:* `223c6ecd`: add fix commit support
> Allows commits that are fixes to be detected.

*a:* `31b21318`: add more info to examples readme
> So that it is easier to browse the folder's 100s of files.

*a:* `eeb75f31`: add codealike file
> So that people who work on this are working with the same project.

*a:* `537ce93e`: add test/example generator
> This goes through every combination and generates an example file.

*a:* `71e1d283`: add package.json
> So that people can use this on NPM

*a:* `c98dca5e`: add generator
> This is what generates the changelogs

*a:* `f79ea73c`: add basic readme
> Nothing much yet in here. TODO add more to Readme

*a:* `03a42bd4`: add intellij files
> Allows people using IDEs based on the Intellij platform to have everything set up

*c:* `bf070051`: change inline description to use blockquote
> This forces it to be on a newline, and also allows for more display options for any descriptions.

*c:* `8b8ab47f`: change text newline to be before each commit
> This will mean that the first commit will be on a different line to the previous message, and it does not matter for the last commit as it has a header after.

*c:* `3f118290`: change test to use current repository
> So that it doesn't give away TRADE SECRETS 🤐

*f:* `d2ed1a36`: fix displaying `***` by using html escape char

*f:* `e2893c62`: fix using incorrect variable for update commits
> Was `mergeCommits`, should have been `updateCommits`

*f:* `3270dec2`: fix wording of update statistics

*f:* `a05e7673`: fix using wrong variable for update statistics
> Should have been `updateCommits`, was `mergeCommits`

*f:* `388ed8e0`: fix using `mergeCommits` instead of `fixCommits`

*f:* `0db93166`: fix code block not showing everything
> It wasn't working because one of the values was on the same line as the code block opening.

*m:* `30d7298a`: Merge branch 'feature/readme' into develop

*m:* `6f8e4c45`: Merge branch 'hotfix/first-commit-on-same-line'

*m:* `88e76112`: Merge branch 'hotfix/first-commit-on-same-line' into develop

*u:* `c8815594`: Update examples

*u:* `86b87788`: update examples

*u:* `4b6f2fd8`: update examples

*u:* `2f3d4e9f`: update examples

*o:* `5af6e59e`: escape fix symbol
> Otherwise it would display `***`, we want just `*` in italics.

*o:* `292e1c61`: Initial commit
