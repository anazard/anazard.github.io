---
path: "/firstlk"
comments: true
layout: post
title: "[GIT] Handy tricks"
tags: [git, tricks, development]
thumbnail: 'laravel.png'
cover: 'montreal.jpg'
---

What's up, everyone? Happy new year, before I forget! :) Long time no post, eh? I've been on a trip to Brazil for the holidays, but that's not the subject today. Let's get on to a couple handy git tricks I used quite often these days.<!--more-->

### Reverting the current branch to a specific commit

Committed anything by mistake and want to rollback?

```
git reset --hard <commit_sha>
```

### Copying files across branches

Use this in case you have new files that have been committed, and you also want them to be in another branch without having to merge it with a pull request, for example. On the desired branch do the following:

```
git checkout <branch_where_files_are> -- <file_relative_path>
```

I will keep updating this post over time.

### Listing stashes

Lists all available stashes.

```
git stash list
```

### Applying specific stashes

Get the stash number from the previous step and replace the n in:

```
git stash apply stash@{n}
```

### Stashing new files

This flag includes the recently uncommitted files to stashing.

```
git stash -u
```

### Fixing .gitignore

This removes all tracked files and adds them back. The -r flag stands for **recursively**.

```
git rm -r --cached .
git add .
git commit -m "Fixed .gitignore"
```

If there's a specific file or folder you want to fix, this should work as well:

```
git rm -r --cached <file-or-folder-name>
```

### Rolling back to specific commits

First, enter **git log** and get the key of the commit you want to rollback to. Then, run the following command:

```
git reset --hard <commit-rsa>
```

### Undoing commits

Did you just commit something that's not 100% correct and would like to keep working on it before the definitive commit? No worries, just undo it using the following command, make the changes and commit it again.

```
git reset HEAD~
```