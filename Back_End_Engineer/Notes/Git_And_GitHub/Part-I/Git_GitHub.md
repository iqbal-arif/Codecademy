**Introduction: Git and GitHub, Part I**

---

See what you’ll be learning in the Git and GitHub, Part I Unit.

The goal of this unit is to introduce you to the Git versioning technology. Understanding Git is a crucial tool in your developer toolkit—but don’t worry if it doesn’t stick right away! Practice is crucial with Git, which is why we’re introducing it early in the Path. Additionally, you’ll understand how to take the repositories on your computer and put them online with GitHub. Having your work on Github will be important when you apply for jobs, and crucial to that will be having a solid README.md, which you’ll write with markdown.

After this unit, you will be able to:

1.  Version control projects using Git
2.  Backtrack in Git
3.  Host a codebase online using GitHub repositories
4.  Use markdown to author a good README.md file

You will put all of this knowledge into practice with an upcoming Portfolio Project. You can complete the Portfolio Project either in parallel with or after taking the prerequisite content—it’s up to you!

Learning is social. Whatever you’re working on, be sure to connect with the Codecademy community in the forums. Remember to check in with the community regularly, including for things like asking for code reviews on your project work and providing code reviews to others in the projects category, which can help to reinforce what you’ve learned.

**1. GIT FLOW**

---

Git is a software that allows you to keep track of changes made to a project over time. Git works by recording the changes you make to a project, storing those changes, then allowing you to reference them as needed.

**2.git init**

---

Now that we have started working on the screenplay, let’s turn the sorcerers-code directory into a Git project. We do this with:

```
git init
```

The word init means initialize. The command sets up all the tools Git needs to begin tracking changes made to the project.

**3. Git Workflow**

---

```
git init => git add => git commit:::git status
```

Nice! We have a Git project. A Git project can be thought of as having three parts:

1.  A **_Working Directory_**: where you’ll be doing all the work: creating, editing, deleting and organizing files
2.  A **_Staging Area_**: where you’ll list changes you make to the working directory
3.  A **_Repository_**: where Git permanently stores those changes as different versions of the project

The Git workflow consists of editing files in the working directory, adding files to the staging area, and saving changes to a Git repository. In Git, we save changes with a **_commit_**, which we will learn more about in this lesson.

**4. git status**

---

As you write the screenplay, you will be changing the contents of the working directory. You can check the status of those changes with:

```
git status
```

**5. git add**

---

In order for Git to start tracking scene-1.txt, the file needs to be added to the staging area.

We can add a file to the staging area with:

```
git add filename
```

The word filename here refers to the name of the file you are editing, such as scene-1.txt.

**6. git diff**

---

magine that we type another line in scene-1.txt. Since the file is tracked, we can check the differences between the working directory and the staging area with:

```
git diff filename
```

Here, filename is the actual name of the file. If the name of my file was changes.txt the command would be

```
git diff changes.txt
```

**7. git commit**

---

A commit is the last step in our Git workflow. A commit permanently stores changes from the staging area inside the repository.

git commit is the command we’ll do next. However, one more bit of code is needed for a commit: the option -m followed by a message. Here’s an example:

git commit -m "Complete first line of dialogue"

Standard Conventions for Commit Messages:

1. Must be in quotation marks
2. Written in the present tense
3. Should be brief (50 characters or less) when using -m

**8. git log**

---

Often with Git, you’ll need to refer back to an earlier version of a project. Commits are stored chronologically in the repository and can be viewed with:

```
git log
// Also gives the commit SHA ids commit 5d692065cf51a2f50ea8e7b19b5a7ae512f633ba
```

**Generalizations**

---

You have now been introduced to the fundamental Git workflow. You learned a lot! Let’s take a moment to generalize:

1.  Git is the industry-standard version control system for web developers
2.  Use Git commands to help keep track of changes made to a project: 1. **_git init_** creates a new Git repository 2. **_git status_** inspects the contents of the working directory and staging area 3. **_git add adds_** files from the working directory to the staging area 4. **_git diff shows_** the difference between the working directory and the staging area 5. **_git commit_** permanently stores file changes from the staging area in the repository 6. **\***git log\*\*\* shows a list of all previous commits

        /********/*/****************/*/****************/*/*****************/*/**************/*/

**1.head commit**

---

In Git, the commit you are currently on is known as the HEAD commit. In many cases, the most recently made commit is the HEAD commit.

To see the HEAD commit, enter:

```
git show HEAD
```

The output of this command will display everything the git log command displays for the HEAD commit, plus all the file changes that were committed.

**2. git checkout**

---

What if you decide to change the ghost’s line in the working directory, but then decide you wanted to discard that change?

You could rewrite the line how it was originally, but what if you forgot the exact wording? The command

```
git checkout HEAD filename
```

will restore the file in your working directory to look exactly as it did when you last made a commit.

Here, filename again is the actual name of the file. If the file is named changes.txt, the command would be

```
git checkout HEAD changes.txt

// will restore the original file to last commit
```

**3. more git add**

---

The hamlet repository we are working on contains five files. In Git, it’s common to change many files, add those files to the staging area, and commit them to a repository in a single commit.

For example, say you want to change the character “LARRY” to “LAERTES” in the script. The name currently appears in two files. After you change the name in both files, you could add the changed files to the staging area with:

```
git add filename_1 filename_2
```

Note the word filename above refers to the name of the file you are adding to the staging area, such as scene-3.txt.

**4. git reset |**

---

Great! The files you’ve added to the staging area belong in the same commit.

What if, before you commit, you accidentally delete an important line from scene-2.txt? Unthinkingly, you add scene-2.txt to the staging area. The file change is unrelated to the Larry/Laertes swap and you don’t want to include it in the commit.

We can unstage that file from the staging area using

```
git reset HEAD filename
```

**_This command resets the file in the staging area to be the same as the HEAD commit. It does not discard file changes from the working directory, it just removes them from the staging area._**

**5. git reset ||**

---

Creating a project is like hiking in a forest. Sometimes you take a wrong turn and find yourself lost.

Just like retracing your steps on that hike, Git enables you to rewind to the part before you made the wrong turn. You can do this with:

```
git reset commit_SHA
```

This command works by using the first 7 characters of the SHA of a previous commit. For example, if the SHA of the previous commit is 5d692065cf51a2f50ea8e7b19b5a7ae512f633ba, use:

```
git reset 5d69206
```

HEAD is now set to that previous commit.

**6. git reset review**

---

To better understand git reset commit_SHA, notice the diagram on the right. Each circle represents a commit.

Before reset:

    HEAD is at the most recent commit

After resetting:

    HEAD goes to a previously made commit of your choice
    The gray commits are no longer part of your project
    You have in essence rewound the project’s history

**_Check gitReset.GIF file_**

**Generalizations**

---

Congratulations! You’ve learned three different ways to backtrack in Git. You can use these skills to undo changes made to your Git project.

Let’s take a moment to review the new commands:

1.  git checkout HEAD filename: Discards changes in the working directory.
2.  git reset HEAD filename: Unstages file changes in the staging area.
3.  git reset commit_SHA: Resets to a previous commit in your commit history.

Additionally, you learned a way to add multiple files to the staging area with a single command:

git add filename_1 filename_2
