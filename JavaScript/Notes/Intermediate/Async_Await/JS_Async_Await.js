/*
****************
1. Introduction
****************
Often in web development, we need to handle asynchronous actions— actions we can wait on while moving on to other tasks. We make requests to networks, databases, or any number of similar operations. JavaScript is non-blocking: instead of stopping the execution of code while it waits, JavaScript uses an event-loop which allows it to efficiently execute other tasks while it awaits the completion of these asynchronous actions.

Originally, JavaScript used callback functions to handle asynchronous actions. The problem with callbacks is that they encourage complexly nested code which quickly becomes difficult to read, debug, and scale. With ES6, JavaScript integrated native promises which allow us to write significantly more readable code. JavaScript is continually improving, and ES8 provides a new syntax for handling our asynchronous action, async...await. The async...await syntax allows us to write asynchronous code that reads similarly to traditional synchronous, imperative programs.

The async...await syntax is syntactic sugar— it doesn’t introduce new functionality into the language, but rather introduces a new syntax for using promises and generators. Both of these were already built in to the language. Despite this, async...await powerfully improves the readability and scalability of our code. Let’s learn how to use it!


********************
2. The async Keyword
********************
The async keyword is used to write functions that handle asynchronous actions. We wrap our asynchronous logic inside a function prepended with the async keyword. Then, we invoke that function.
*/
async function myFunc() {
  // Function body here
}

myFunc();
/*
We’ll be using async function declarations throughout this lesson, but we can also create async function expressions:
*/
const myFunc = async () => {
  // Function body here
};

myFunc();
/*
async functions always return a promise. This means we can use traditional promise syntax, like .then() and .catch with our async functions. An async function will return in one of three ways:

    1. If there’s nothing returned from the function, it will return a promise with a resolved value of undefined.
    2. If there’s a non-promise value returned from the function, it will return a promise resolved to that value.
    3. If a promise is returned from the function, it will simply return that promise
*/
async function fivePromise() {
  return 5;
}

fivePromise().then((resolvedValue) => {
  console.log(resolvedValue);
}); // Prints 5
/*
In the example above, even though we return 5 inside the function body, what’s actually returned when we invoke fivePromise() is a promise with a resolved value of 5.

Let’s write an async function!
*/
/*****************************************************/
/**********************PRACTICE***********************/
/*****************************************************
1.

We provided a function withConstructor() which takes in a number. If the number is 0, it returns a promise that resolves to the string 'zero'. If the number is not 0, it returns a promise that resolves to the string 'not zero'. Take a moment to understand this function and the code that follows. When you’re ready to run it, type node app.js in to the terminal and press enter.
Checkpoint 2 Passed
2.

Write an async function, withAsync() which reproduces the functionality of withConstructor(). Though your function will return a promise, it should not construct the promise using the new keyword. Instead, it should rely on the fact that an async function automatically returns a promise.

When you’re ready, check your work to move on to the next step.
Checkpoint 3 Passed
3.

Now test your code! Uncomment the test code we wrote at the bottom of app.js. In the terminal, type node app.js and press enter to execute the code.
*/
function withConstructor(num) {
  return new Promise((resolve, reject) => {
    if (num === 0) {
      resolve('zero');
    } else {
      resolve('not zero');
    }
  });
}

withConstructor(0).then((resolveValue) => {
  console.log(
    ` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`
  );
});

// Write your code below:

async function withAsync(num) {
  return num === 0 ? 'zero' : 'not zero';
}

// Leave this commented out until step 3:

withAsync(100).then((resolveValue) => {
  console.log(
    ` withAsync(100) returned a promise which resolved to: ${resolveValue}.`
  );
});

/*****************************************************/
/*****************************************************/
/*
*********************
3. The await Operator
*********************
In the last exercise, we covered the async keyword. By itself, it doesn’t do much; async functions are almost always used with the additional keyword await inside the function body.

The await keyword can only be used inside an async function. await is an operator: it returns the resolved value of a promise. Since promises resolve in an indeterminate amount of time, await halts, or pauses, the execution of our async function until a given promise is resolved.

In most situations, we’re dealing with promises that were returned from functions. Generally, these functions are through a library, and, in this lesson, we’ll be providing them. We can await the resolution of the promise it returns inside an async function. In the example below, myPromise() is a function that returns a promise which will resolve to the string "I am resolved now!".
*/
async function asyncFuncExample(){
  let resolvedValue = await myPromise();
  console.log(resolvedValue);
}
 
asyncFuncExample(); // Prints: I am resolved now!
/*
Within our async function, asyncFuncExample(), we use await to halt our execution until myPromise() is resolved and assign its resolved value to the variable resolvedValue. Then we log resolvedValue to the console. We’re able to handle the logic for a promise in a way that reads like synchronous code.

/*****************************************************/
/**********************PRACTICE***********************/
/*****************************************************