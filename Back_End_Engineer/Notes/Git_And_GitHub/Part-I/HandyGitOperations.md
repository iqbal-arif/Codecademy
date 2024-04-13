**1. Git stash**

---

Let’s say you’re working on experimental code on a fresh branch and realize that you forgot to add something to a previous commit in order to continue your work. In order to go to a different branch, one must always be at a clean commit point. In this case you don’t want to commit your experimental code since it’s not ready but you also don’t want to lose all the code you’ve been working on.

A good way to handle this is by using git stash, which allows you to get back to a clean commit point with a synchronized working tree, and avoid losing your local changes in the process. You’re “stashing” your local work temporarily in order to update a previous commit and later on retrieve your work.

While working on a file, you find a small bug in a separate file from a previous commit that needs to be fixed before you continue.

```
$ git stash
```

Running the command above will store your work temporarily for later use in a hidden directory.

At this point, you can switch branches and do work elsewhere.

Once the bug is fixed, you want to retrieve the code you were working on previously, you can “pop” the work that was stored when you used git stash.

```
$ git stash pop
```

From here, you can continue your work and commit it when ready.
