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
async function asyncFuncExample() {
  let resolvedValue = await myPromise();
  console.log(resolvedValue);
}

asyncFuncExample(); // Prints: I am resolved now!
/*
Within our async function, asyncFuncExample(), we use await to halt our execution until myPromise() is resolved and assign its resolved value to the variable resolvedValue. Then we log resolvedValue to the console. We’re able to handle the logic for a promise in a way that reads like synchronous code.

/*****************************************************/
/**********************PRACTICE***********************/
/*****************************************************
 
1.

In the provided code, we’ve required in the function brainstormDinner(). This function expects no arguments and returns a new promise with a resolved value of a string representing a meal. (You can look at the code for this function by navigating to the library.js file.)

Look at the nativePromiseDinner() function in app.js. Take a moment to understand this function and predict its expected outcome. In the next step, you’ll be recreating its functionality using async...await rather than native promises.

It’s not necessary to execute the nativePromiseDinner() function, but, if you’d like to, check out the hint for some guidance. Press “Check Work” when you’re ready to move on to the next step.
2.

Fill in the body of the announceDinner() function so that it has the same functionality as nativePromiseDinner(). It should wait for the promise returned from brainstormDinner() to resolve, and then log a string to the console in the same format as did nativePromiseDinner(). You’ll need to use the await operator inside your function.

When you’re ready, check your work to move on to the next step.
3.

At the bottom of app.js, beneath the function declaration, invoke the announceDinner() function.
4.

In the terminal type node app.js and press enter to execute your code.
Code files also available in separate app_2.js & library_2.js
*/
/***app_2.js***/
const brainstormDinner = require('./library_2.js');

// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
    console.log(`I'm going to make ${meal} for dinner.`);
  });
}

// async/await version:
async function announceDinner() {
  // Write your code below:
  let meal = await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`);
}

announceDinner();

/*****************************************************/
/*****************************************************/

/*
**************************
4. Writing async Functions
**************************
We’ve seen that the await keyword halts the execution of an async function until a promise is no longer pending. Don’t forget the await keyword! It may seem obvious, but this can be a tricky mistake to catch because our function will still run— it just won’t have the desired results.
We’re going to explore this using the following function, which returns a promise that resolves to 'Yay, I resolved!' after a 1 second delay:
*/

let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Yay, I resolved!');
    }, 1000);
  });
};
/*
Now we’ll write two async functions which invoke myPromise():
*/
async function noAwait() {
  let value = myPromise();
  console.log(value);
}

async function yesAwait() {
  let value = await myPromise();
  console.log(value);
}

noAwait(); // Prints: Promise { <pending> }
yesAwait(); // Prints: Yay, I resolved!
/*
In the first async function, noAwait(), we left off the await keyword before myPromise(). In the second, yesAwait(), we included it. The noAwait() function logs Promise { <pending> } to the console. Without the await keyword, the function execution wasn’t paused. The console.log() on the following line was executed before the promise had resolved.

Remember that the await operator returns the resolved value of a promise. When used properly in yesAwait(), the variable value was assigned the resolved value of the myPromise() promise, whereas in noAwait(), value was assigned the promise object itself.
*/
/*****************************************************/
/**********************PRACTICE***********************/
/*****************************************************
Instructions
1.

Take a look at the provided code. We required in the shopForBeans() function from library.js which returns a promise with a resolved value of a string representing a type of bean, eg. ‘kidney’.

Next, we declared the getBeans() function. Let’s summarize its intended functionality:

    1. Log '1. Heading to the store to buy beans...' to the console.
    2. Capture the resolved value of the promise returned when we invoke shopForBeans().
    3. The promise returned from shopForBeans() prints a string in the format '2. I bought [the resolved type of beans] beans because they were on sale.'
    4. Finally, the function prints a string in the format '3. Great! I'm making [the bean type] beans for dinner tonight!' to the console.

Execute app.js in the terminal to see if getBeans() is working as intended.
2.

Uh oh, getBeans() is logging '3. Great! I'm making [object Promise] beans for dinner tonight!' to the console. Take a moment to understand why this is happening, and then refactor getBeans() so it works as intended. Check your work when you’re ready to move on to the next step.
3.

To test that the code is now functioning properly, execute app.js in the terminal again.
Code files also available in separate app_3.js & library_3.js
*/
/***app_3.js */
const shopForBeans = require('./library.js');

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

/*****************************************************/
/*****************************************************/

/*
******************************
5. Handling Dependent Promises
******************************

The true beauty of async...await is when we have a series of asynchronous actions which depend on one another. For example, we may make a network request based on a query to a database. In that case, we would need to wait to make the network request until we had the results from the database. With native promise syntax, we use a chain of .then() functions making sure to return correctly each one:
*/
function nativePromiseVersion() {
  returnsFirstPromise()
    .then((firstValue) => {
      console.log(firstValue);
      return returnsSecondPromise(firstValue);
    })
    .then((secondValue) => {
      console.log(secondValue);
    });
}
/*
Let’s break down what’s happening in the nativePromiseVersion() function:

    1. Within our function we use two functions which return promises: returnsFirstPromise() and returnsSecondPromise().
    2. We invoke returnsFirstPromise() and ensure that the first promise resolved by using .then().
    3. In the callback of our first .then(), we log the resolved value of the first promise, firstValue, and then return returnsSecondPromise(firstValue).
    4. We use another .then() to print the second promise’s resolved value to the console.

Here’s how we’d write an async function to accomplish the same thing:
*/
async function asyncAwaitVersion() {
  let firstValue = await returnsFirstPromise();
  console.log(firstValue);
  let secondValue = await returnsSecondPromise(firstValue);
  console.log(secondValue);
}
/*
Let’s break down what’s happening in our asyncAwaitVersion() function:

    1. We mark our function as async.
    2. Inside our function, we create a variable firstValue assigned await returnsFirstPromise(). This means firstValue is assigned the resolved value of the awaited promise.
    3. Next, we log firstValue to the console.
    4. Then, we create a variable secondValue assigned to await returnsSecondPromise(firstValue). Therefore, secondValue is assigned this promise’s resolved value.
    5. Finally, we log secondValue to the console.

Though using the async...await syntax can save us some typing, the length reduction isn’t the main point. Given the two versions of the function, the async...await version more closely resembles synchronous code, which helps developers maintain and debug their code. The async...await syntax also makes it easy to store and refer to resolved values from promises further back in our chain which is a much more difficult task with native promise syntax. Let’s create some async functions with multiple await statements!

/*****************************************************/
/**********************PRACTICE***********************/
/*****************************************************

Instructions
1.

Take a look at the provided code. We require in three functions: shopForBeans(), soakTheBeans(), and cookTheBeans(). These functions each return a promise.

    shopForBeans() expects no arguments and returns a promise which will resolve to a string of a bean type.
    soakTheBeans() expects a bean type string as an argument and returns a promise which resolves to a boolean indicating whether or not the beans are softened.
    cookTheBeans() expects a boolean as an argument and, if that value is true, returns a promise which will resolve to a string announcing that dinner is ready.

If you’d like, look at the library.js file to see how these functions work. Press “Check Work” to move on to the next step.
2.

In the following checkpoints, you’ll create an async function that handles the three dependent promises we just walked through. It will simulate shopping for, soaking, and then cooking the beans. To get started, declare an async function, makeBeans(). You can leave the function body blank for now.

Check your work to move on to the next step.
3.

Inside your function, declare a variable, type, assigned to the resolved value of shopForBeans(). This must be accomplished in one statement.
4.

Next inside your function, declare a variable, isSoft, assigned to the resolved value of soakTheBeans(). Don’t forget: the soakTheBeans() function expects an argument. Make sure to pass the expected value into soakTheBeans().
5.

Next inside your function, declare a variable, dinner, assigned to the resolved of cookTheBeans(). Don’t forget: the cookTheBeans() function also expects an argument. Make sure to pass the expected value into cookTheBeans().
6.

Next inside your function, log your dinner variable to the console.
7.

Beneath your function declaration, invoke the makeBeans() function.
8.

Let’s see your async function in action! In the terminal, type node app.js and press enter to execute the code. (Press “Check Work” when complete to continue)
Code files also available in separate app_4.js & library_4.js
*/
const { shopForBeans, soakTheBeans, cookTheBeans } = require('./library.js');

// Write your code below:

async function makeBeans() {
  let type = await shopForBeans();
  // console.log(beanType)
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}

makeBeans();
/*****************************************************/
/*****************************************************/

/*
******************
6. Handling Errors
******************
When .catch() is used with a long promise chain, there is no indication of where in the chain the error was thrown. This can make debugging challenging.

With async...await, we use try...catch statements for error handling. By using this syntax, not only are we able to handle errors in the same way we do with synchronous code, but we can also catch both synchronous and asynchronous errors. This makes for easier debugging!
*/
async function usingTryCatch() {
  try {
    let resolveValue = await asyncFunction('thing that will fail');
    let secondValue = await secondAsyncFunction(resolveValue);
  } catch (err) {
    // Catches any errors in the try block
    console.log(err);
  }
}

usingTryCatch();
/*
Remember, since async functions return promises we can still use native promise’s .catch() with an async function
*/
async function usingPromiseCatch() {
  let resolveValue = await asyncFunction('thing that will fail');
}

let rejectedPromise = usingPromiseCatch();
rejectedPromise.catch((rejectValue) => {
  console.log(rejectValue);
});
/*
This is sometimes used in the global scope to catch final errors in complex code.

/*****************************************************/
/**********************PRACTICE***********************/
/*****************************************************

Instructions
1.

For convenience, we’ve been working with a lot of promises that never reject, but this isn’t very realistic!

This time we’ve required in a function, cookBeanSouffle() which returns a promise that resolves or rejects randomly. When it resolves, the promise resolves with a value of 'Bean Souffle' and, when it rejects, it rejects with a value of 'Dinner is ruined!'. If you’re interested, you can see how the function works by looking in the library.js file.

Press “Check Work” when you’re ready to move on to the next step.
2.

Declare an async function, hostDinnerParty(). Inside your function, create a try...catch statement. The catch statement should specify an identifier, error. You can leave both the try and catch blocks empty.
3.

Inside your try block, log a string in the following format: '[resolved value of cookBeanSouffle() promise] is served!' ie. 'Bean Souffle is served!'. Make sure to await the cookBeanSouffle() promise. For more guidance, check out the hint.
4.

Now let’s fill in the catch block! First log the error to the console, and then log the string: 'Ordering a pizza!' to the console.
5.

Awesome! Beneath your function declaration, invoke hostDinnerParty().
6.

Let’s see your function in action. In the terminal type node app.js and press enter to run the code. If you keep executing app.js you’ll see the results of the promise resolving or rejecting.

Code files also available in separate app_5.js & library_5.js
*/
// Write your code below:

async function hostDinnerParty() {
  try {
    let cooked = await cookBeanSouffle();
    console.log(`${cooked} is served!`);
  } catch (error) {
    console.log(error);
    console.log('Ordering a pizza!');
  }
}

hostDinnerParty();

/*****************************************************/
/*****************************************************/

/*
********************************
7. Handling Independent Promises
********************************
Remember that await halts the execution of our async function. This allows us to conveniently write synchronous-style code to handle dependent promises. But what if our async function contains multiple promises which are not dependent on the results of one another to execute?
*/
async function waiting() {
  const firstValue = await firstAsyncThing();
  const secondValue = await secondAsyncThing();
  console.log(firstValue, secondValue);
}

async function concurrent() {
  const firstPromise = firstAsyncThing();
  const secondPromise = secondAsyncThing();
  console.log(await firstPromise, await secondPromise);
}
/*
In the waiting() function, we pause our function until the first promise resolves, then we construct the second promise. Once that resolves, we print both resolved values to the console.

In our concurrent() function, both promises are constructed without using await. We then await each of their resolutions to print them to the console.

With our concurrent() function both promises’ asynchronous operations can be run simultaneously. If possible, we want to get started on each asynchronous operation as soon as possible! Within our async functions we should still take advantage of concurrency, the ability to perform asynchronous actions at the same time.

Note: if we have multiple truly independent promises that we would like to execute fully in parallel, we must use individual .then() functions and avoid halting our execution with await.

/*****************************************************/
/**********************PRACTICE***********************/
/*****************************************************
Instructions
1.

Take a look at the provided code. We require in four functions: cookBeans(), steamBroccoli(), cookRice(), and bakeChicken(). These functions each return a promise which will resolve to a string representing a part of a meal.

If you’d like, look at the library.js file to see how these functions work. Press “Check Work” when you’re ready to move on.
2.

Declare an async function, serveDinner(). Create four variables:

    vegetablePromise which should be assigned the return value of steamBroccoli()
    starchPromise which should be assigned the return value of cookRice()
    proteinPromise which should be assigned the return value of bakeChicken()
    and sidePromise which should be assigned the return value of cookBeans()

These variables should be assigned the promise objects themselves not their resolved values.
3.

Next console.log() a string in the following format:

    Dinner is served. We’re having [resolved value of the vegetablePromise], [resolved value of the starchPromise], [resolved value of the proteinPromise], and [resolved value of the sidePromise]. 

i.e. “Dinner is served. We’re having broccoli, rice, chicken, and beans.”

You’ll need to await each promise, but there are a few different ways you can accomplish the desired functionality. Check out the hint if you want some guidance.
4.

Awesome! Let’s see your function in action. Beneath your function declaration, invoke serveDinner().
5.

In the terminal type node app.js and press enter to run the code.
Code files also available in separate app_5.js & library_5.js
*/
