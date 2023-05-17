/*
Q1: Which of the following is NOT a benefit of the async...await syntax?
A1: It causes promises to resolve faster. 👏
The async...await syntax does not cause promises to resolve faster.

it reads more similarly to synchronous code.
it lets us catch rejected promise errors with the exact same syntax we use to catch other types of errors.
it lets us easily store and refer back to the resolved values of earlier promises in a promise chain.
*/

/*
Q2: What does the function example() return?

async function example() { }
A2: A promise
Correct! An async function returns a promise.
*/

/*
Q3: What will this code print to the console?
*/
async function myFunction() {
  return 'hello world';
}

myFunction().then((resolvedValue) => {
  console.log(resolvedValue);
});

/*A3:  hello world */

/*
Q4: Given that firstPromise(), secondPromise(), and thirdPromise() do not depend on each other to execute, what isn’t ideal about the provided code?
*/
async function threePromises() {
  let first = await firstPromise();
  let second = await secondPromise();
  let third = await thirdPromise();
  console.log(first, second, third);
}
/*
Using await halts the execution of the function which means consecutive promises would wait to execute until the pervious promise resolved. Instead, we should allow for concurrency whenever possible.
*/

/*
Q5: What purpose does the async keyword serve?
A5: It's a keyword which indicates an asynchronous function. 👏
That’s right! 
1. it's an operator that halts the execution of a function until a promise is no longer pending.
2. it's a built-in function which a callback function and number of milliseconds as parameters and delays the execution of the callback function that number of milliseconds.
3. it's a function that returns a function and/or accepts a function as a parameter.
*/
/*
Q6: True or False: the async...await syntax has functionality that cannot be accomplished by native promises. 
A6: False.
Right! The async/await syntax is syntactic sugar - it does not introduce new functionality into the language. */

/*
Q7: Which of the following is useful for awaiting multiple promises where all are required but none depend on each other to execute? 
A7: Promise.all()
Right! Promise.all() is a good choice for taking advantage of concurrency. 
*/

/*
Q8: What purpose does the await keyword serve?
A8: It's an operator used only inside an async function that halts the execution of a function until a given promise is no longer pending and returns the resolved value of the promise.
1. It's a JavaScript object which represents the eventual outcome fo an asynchronous operation.
2. It's a function passed into another function as a parameter which is invoked during the execution of that functions.
3. It's a keyword which indicates an asynchronous functions.
*/
