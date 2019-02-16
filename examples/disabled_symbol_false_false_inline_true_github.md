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

*+* add changelog

*+* add changelog generator
> It would be odd if this package didn't use itself!                    

*+* add warning for using arguments

*+* add readme
> To allow people to see what everything is about

*+* add fixes to statistics

*+* add update commit support
> Allows update commits to be detected by the system.

*+* add fix commit support
> Allows commits that are fixes to be detected.

*+* add more info to examples readme
> So that it is easier to browse the folder's 100s of files.

*+* add codealike file
> So that people who work on this are working with the same project.

*+* add test/example generator
> This goes through every combination and generates an example file.

*+* add package.json
> So that people can use this on NPM

*+* add generator
> This is what generates the changelogs

*+* add basic readme
> Nothing much yet in here. TODO add more to Readme

*+* add intellij files
> Allows people using IDEs based on the Intellij platform to have everything set up

*&ast;* change inline description to use blockquote
> This forces it to be on a newline, and also allows for more display options for any descriptions.

*&ast;* change text newline to be before each commit
> This will mean that the first commit will be on a different line to the previous message, and it does not matter for the last commit as it has a header after.

*&ast;* change test to use current repository
> So that it doesn't give away TRADE SECRETS 🤐

*&ast;* fix displaying `***` by using html escape char

*&ast;* fix using incorrect variable for update commits
> Was `mergeCommits`, should have been `updateCommits`

*&ast;* fix wording of update statistics

*&ast;* fix using wrong variable for update statistics
> Should have been `updateCommits`, was `mergeCommits`

*&ast;* fix using `mergeCommits` instead of `fixCommits`

*&ast;* fix code block not showing everything
> It wasn't working because one of the values was on the same line as the code block opening.

*>* Merge branch 'feature/readme' into develop

*>* Merge branch 'hotfix/first-commit-on-same-line'

*>* Merge branch 'hotfix/first-commit-on-same-line' into develop

*^* Update examples

*^* update examples

*^* update examples

*^* update examples

*?* escape fix symbol
> Otherwise it would display `***`, we want just `*` in italics.

*?* Initial commit
