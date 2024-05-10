**Reading Error Stack Traces**

---

Now that we know what information we can get from an error stack trace, let’s take a look at an example.

```
/home/ccuser/workspace/learn-javascript-debugging-code/app.js:1
myVariable;
^

ReferenceError: myVariable is not defined
...
```

Using this stack trace, let’s answer three questions you should ask yourself every time you want to debug an error:

1.  In what line did the error occur? You can almost always find this information on the first line of the stack trace in the following format <file path>/<file name>:<line number>. In this example, the location is app.js:1. This means that the error was thrown in the file named app.js on line 1.

2.  What type of error was thrown? The first word on the fifth line of the stack trace is the type of error that was thrown. In this case, the type of error was ReferenceError. We will discuss this error type in the next exercise.

3.  What is the error message? The rest of the fifth line after the error type provides an error message, describing what went wrong. In this case, the description is myVariable is not defined.
