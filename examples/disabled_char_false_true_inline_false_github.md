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

*a:* add fixes to statistics

*a:* add update commit support
> Allows update commits to be detected by the system.

*a:* add fix commit support
> Allows commits that are fixes to be detected.

*a:* add more info to examples readme
> So that it is easier to browse the folder's 100s of files.

*a:* add codealike file
> So that people who work on this are working with the same project.

*a:* add test/example generator
> This goes through every combination and generates an example file.

*a:* add package.json
> So that people can use this on NPM

*a:* add generator
> This is what generates the changelogs

*a:* add basic readme
> Nothing much yet in here. TODO add more to Readme

*a:* add intellij files
> Allows people using IDEs based on the Intellij platform to have everything set up

*c:* change text newline to be before each commit
> This will mean that the first commit will be on a different line to the previous message, and it does not matter for the last commit as it has a header after.

*c:* change test to use current repository
> So that it doesn't give away TRADE SECRETS 🤐

*f:* fix displaying `***` by using html escape char

*f:* fix using incorrect variable for update commits
> Was `mergeCommits`, should have been `updateCommits`

*f:* fix wording of update statistics

*f:* fix using wrong variable for update statistics
> Should have been `updateCommits`, was `mergeCommits`

*f:* fix using `mergeCommits` instead of `fixCommits`

*f:* fix code block not showing everything
> It wasn't working because one of the values was on the same line as the code block opening.

*m:* Merge branch 'hotfix/first-commit-on-same-line' into develop

*m:* Merge branch 'hotfix/first-commit-on-same-line'

*u:* update examples

*u:* update examples

*u:* update examples

*o:* escape fix symbol
> Otherwise it would display `***`, we want just `*` in italics.

*o:* Initial commit
