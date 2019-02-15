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

 add fixes to statistics

 add update commit support ([description](#add-update-commit-support-31))

 add fix commit support ([description](#add-fix-commit-support-31))

 add more info to examples readme ([description](#add-more-info-to-examples-readme-31))

 add codealike file ([description](#add-codealike-file-31))

 add test/example generator ([description](#add-testexample-generator-31))

 add package.json ([description](#add-packagejson-31))

 add generator ([description](#add-generator-31))

 add basic readme ([description](#add-basic-readme-31))

 add intellij files ([description](#add-intellij-files-31))
##### Removals

##### Changes

 change text newline to be before each commit ([description](#change-text-newline-to-be-before-each-commit-31))

 change test to use current repository ([description](#change-test-to-use-current-repository-31))
##### Fixes

 fix displaying `***` by using html escape char

 fix using incorrect variable for update commits ([description](#fix-using-incorrect-variable-for-update-commits-31))

 fix wording of update statistics

 fix using wrong variable for update statistics ([description](#fix-using-wrong-variable-for-update-statistics-31))

 fix using `mergeCommits` instead of `fixCommits`

 fix code block not showing everything ([description](#fix-code-block-not-showing-everything-31))
##### Merges

##### Updates

 update examples

 update examples
##### Other

 escape fix symbol ([description](#escape-fix-symbol-31))

 Initial commit
### Descriptions
##### add update commit support
Allows update commits to be detected by the system.
##### add fix commit support
Allows commits that are fixes to be detected.
##### add more info to examples readme
So that it is easier to browse the folder's 100s of files.
##### add codealike file
So that people who work on this are working with the same project.
##### add test/example generator
This goes through every combination and generates an example file.
##### add package.json
So that people can use this on NPM
##### add generator
This is what generates the changelogs
##### add basic readme
Nothing much yet in here. TODO add more to Readme
##### add intellij files
Allows people using IDEs based on the Intellij platform to have everything set up
##### change text newline to be before each commit
This will mean that the first commit will be on a different line to the previous message, and it does not matter for the last commit as it has a header after.
##### change test to use current repository
So that it doesn't give away TRADE SECRETS 🤐
##### fix using incorrect variable for update commits
Was `mergeCommits`, should have been `updateCommits`
##### fix using wrong variable for update statistics
Should have been `updateCommits`, was `mergeCommits`
##### fix code block not showing everything
It wasn't working because one of the values was on the same line as the code block opening.
##### escape fix symbol
Otherwise it would display `***`, we want just `*` in italics.
