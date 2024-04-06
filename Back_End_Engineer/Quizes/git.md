Q1: What’s wrong with the code below?

```
git commit -m Add new scene to screenplay
```

A1: The commit message lacks quotation marks. 👏 You got it!

Q2: What does “git init” do
A2: Initialize a new Git project. 👏 You got it!

Q3: What is the purpose of Git’s staging area?
A3: To stage file changes for a commit. 👏 You got it!

Q4: In Git, a commit
A4: Permanently stores changes from the staging area in the repository. 👏 You got it!

Q5: Why use Git?
A5: To keep track of changes made to a protext over time. 👏 You got it!

Q6: Where in Git do you typically create, edit, delete, and organize project files?
A6: The working directory. 👏 You got it!

Q7: The command “git status” shows
A7: Untracked files and file changes staged for commit. 👏 You got it!

Q8: The output below is typical of which command?

```
commit bda95786432d142bbff996ad32045fa4f32ec619
Author: codecademy <ccuser@codecademy.com>
Date: on Nov 16 13:13:33 2015 -0500
First commit
```

A8: git log 👏 You got it!

Q9: In the code below, what will you replace “filename” with?

```
git add filename
```

A9: The file you wish to add to the staging area. 👏 You got it!

Q10: Which Git command lets you view the SHAs of all previous commits?
A10: git log 👏 You got it!

Q11: You accidentally deleted lines from a file. Which command can undo your mistake?
A11: git checkout HEAD filename 👏 You got it!

Q12: Which statement is true about the command below?

```
git reset 844d1f7
```

A12: HEAD will reset to the commit whose SHA starts with 844D1F7 👏 You got it!

Q13: In Git, the HEAD commit is
A13: The commit you are currently on. 👏 You got it!

Q14: Why use Git backtracking commands?
A14:

1. To go back to a previous commit.
2. To discard changes in teh working directory.
3. To unstage a file from the staging area.

Q15: Which command removes file changes from the staging area?
A15: git reset HEAD filename

Q16: Why use the command below?

```
git checkout HEAD filename
```

A16: To restore the file in the working directory to look as it did in your last commit

Q17: What Git command gives the output below?

```
Unstaged changes after reset:
M       file.txt
```

A17: git reset HEAD file.txt
