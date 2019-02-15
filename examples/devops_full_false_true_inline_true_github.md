# Changelog
## 0.0.0 (2019/02/15)
#### Statistics
**commit count**: 20

**additions**: 10

**removals**: 0

**changes**: 1

**fixes**: 6

**merges**: 0

**updates**: 1

**other commits**: 2

#### Log
<small>(note: any additions may have been removed, and any removals may have been added back in.)</small>
*addition:* add fixes to statistics

*addition:* add update commit support
`    Allows update commits to be detected by the system.`

*addition:* add fix commit support
`    Allows commits that are fixes to be detected.`

*addition:* add more info to examples readme
`    So that it is easier to browse the folder's 100s of files.`

*addition:* add codealike file
`    So that people who work on this are working with the same project.`

*addition:* add test/example generator
`    This goes through every combination and generates an example file.`

*addition:* add package.json
`    So that people can use this on NPM`

*addition:* add generator
`    This is what generates the changelogs`

*addition:* add basic readme
`    Nothing much yet in here. TODO add more to Readme`

*addition:* add intellij files
`    Allows people using IDEs based on the Intellij platform to have everything set up`

*change:* change test to use current repository
`    So that it doesn't give away TRADE SECRETS 🤐`

*fix:* fix displaying `***` by using html escape char

*fix:* fix using incorrect variable for update commits
`    Was `mergeCommits`, should have been `updateCommits``

*fix:* fix wording of update statistics

*fix:* fix using wrong variable for update statistics
`    Should have been `updateCommits`, was `mergeCommits``

*fix:* fix using `mergeCommits` instead of `fixCommits`

*fix:* fix code block not showing everything
`    It wasn't working because one of the values was on the same line as the code block opening.`

*update:* update examples

*other:* escape fix symbol
`    Otherwise it would display `***`, we want just `*` in italics.`

*other:* Initial commit

