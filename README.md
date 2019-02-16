# Git Changelog

> Automatically create _useful_ changelogs based on your Git log

Git-Changelog generates a file containing a list of all the commits in a project, and uses keywords to detect what 
each commit does, giving a readable output similar to what a human might write.

## Installation

Currently the module must be downloaded from this Git repository as it is not hosted anywhere.

`git clone https://github.com/zoweb/git-changelog`

You can then run it using `node [path/to/git-changelog/index.js]`

## Usage

### Command-Line Usage
Each command uses the same options.

#### Commands
- `git-changelog print <repo>`: Prints the output to the console
- `git-changelog write <repo> <file>`: Prints the output to `<file>`

#### Options
- `-c, --commit-link-generator [type]`: The generator to create links for commit hashes.
    - `devops`: Use a link that will successfully navigate to a commit on Azure DevOps
    - `disable`: Disable commit links
    - others can be added with plugins
- `-t, --type-mode [mode]`: The mode to use for displaying what type of change a commit is.
    - `full`: Display the full change type text, e.g. `addition`
    - `char`: Displays a unique character for the change type, e.g. `a`
    - `symbol`: Displays a symbol depicting the change type, e.g. `+`
    - `heading`: Groups each change type under a heading
- `-i, --show-id`: Show the commit ID before commit messages.
- `-l, --long-id`: Use the full-length ID instead of the shortened version.
- `-d, --description [mode]`: Set how to display commit descriptions (text after a newline)
    - `disabled`: Disable showing longer commit descriptions
    - `subheading`: Display the description under a subheading and add a link to it after the commit message
    - `inline`: Display the description in a blockquote under the commit message
- `-s, --subheading-use-id`: Use the commit ID instead of commit message for description subheadings
- `-h, --heading-link-generator [type]`: Specify the way to generate hash links for subheading links
    - `github`: Use Github's method of generating header hashes
    - others can be added with plugins
    
## In-Code Usage

Warning: git-changelog currently still will use arguments when using the API. Make sure you don't use any of it's 
arguments, otherwise it might do something unexpected!

### Generate a Changelog
```js
const gitChangelog = require("path/to/git-changelog");

const changelog = gitChangelog(pathToRepository, {
    // command line options, using camel case
})
```