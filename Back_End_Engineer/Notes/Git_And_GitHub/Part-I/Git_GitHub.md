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
```
