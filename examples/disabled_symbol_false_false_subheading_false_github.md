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
*+* add fixes to statistics

*+* add update commit support ([description](#add-update-commit-support-27))

*+* add fix commit support ([description](#add-fix-commit-support-27))

*+* add more info to examples readme ([description](#add-more-info-to-examples-readme-27))

*+* add codealike file ([description](#add-codealike-file-27))

*+* add test/example generator ([description](#add-testexample-generator-27))

*+* add package.json ([description](#add-packagejson-27))

*+* add generator ([description](#add-generator-27))

*+* add basic readme ([description](#add-basic-readme-27))

*+* add intellij files ([description](#add-intellij-files-27))

*&ast;* change test to use current repository ([description](#change-test-to-use-current-repository-27))

*&ast;* fix displaying `***` by using html escape char

*&ast;* fix using incorrect variable for update commits ([description](#fix-using-incorrect-variable-for-update-commits-27))

*&ast;* fix wording of update statistics

*&ast;* fix using wrong variable for update statistics ([description](#fix-using-wrong-variable-for-update-statistics-27))

*&ast;* fix using `mergeCommits` instead of `fixCommits`

*&ast;* fix code block not showing everything ([description](#fix-code-block-not-showing-everything-27))

*^* update examples

*?* escape fix symbol ([description](#escape-fix-symbol-27))

*?* Initial commit

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
