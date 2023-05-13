/*
****************
1. Introduction
****************
In web development, asynchronous programming is notorious for being a challenging topic.

An asynchronous operation is one that allows the computer to “move on” to other tasks while waiting for the asynchronous operation to complete. Asynchronous programming means that time-consuming operations don’t have to bring everything else in our programs to a halt.

There are countless examples of asynchronicity in our everyday lives. Cleaning our house, for example, involves asynchronous operations such as a dishwasher washing our dishes or a washing machine washing our clothes. While we wait on the completion of those operations, we’re free to do other chores.

Similarly, web development makes use of asynchronous operations. Operations like making a network request or querying a database can be time-consuming, but JavaScript allows us to execute other tasks while awaiting their completion.

This lesson will teach you how modern JavaScript handles asynchronicity using the Promise object, introduced with ES6. Let’s get started!


*********************
2. What is a Promise?
*********************
Promises are objects that represent the eventual outcome of an asynchronous operation. A Promise object can be in one of three states:

    1. Pending: The initial state— the operation has not completed yet.
    2. Fulfilled: The operation has completed successfully and the promise now has a resolved value. For example, a request’s promise might resolve with a JSON object as its value.
    3. Rejected: The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind.

We refer to a promise as settled if it is no longer pending— it is either fulfilled or rejected. Let’s think of a dishwasher as having the states of a promise:

    1. Pending: The dishwasher is running but has not completed the washing cycle.
    2. Fulfilled: The dishwasher has completed the washing cycle and is full of clean dishes.
    3. Rejected: The dishwasher encountered a problem (it didn’t receive soap!) and returns unclean dishes.

If our dishwashing promise is fulfilled, we’ll be able to perform related tasks, such as unloading the clean dishes from the dishwasher. If it’s rejected, we can take alternate steps, such as running it again with soap or washing the dishes by hand.

All promises eventually settle, enabling us to write logic for what to do if the promise fulfills or if it rejects.

********************************
3. Constructing a Promise Object
********************************
Let’s construct a promise! To create a new Promise object, we use the new keyword and the Promise constructor method:
*/
const executorFunction = (resolve, reject) => {};
const myFirstPromise = new Promise(executorFunction);
/*
The Promise constructor method takes a function parameter called the executor function which runs automatically when the constructor is called. The executor function generally starts an asynchronous operation and dictates how the promise should be settled.

The executor function has two function parameters, usually referred to as the resolve() and reject() functions. The resolve() and reject() functions aren’t defined by the programmer. When the Promise constructor runs, JavaScript will pass its own resolve() and reject() functions into the executor function.

    1. resolve is a function with one argument. Under the hood, if invoked, resolve() will change the promise’s status from pending to fulfilled, and the promise’s resolved value will be set to the argument passed into resolve().
    2. reject is a function that takes a reason or error as an argument. Under the hood, if invoked, reject() will change the promise’s status from pending to rejected, and the promise’s rejection reason will be set to the argument passed into reject().

Let’s look at an example executor function in a Promise constructor:
*/
const executorFunction2 = (resolve, reject) => {
  if (someCondition) {
    resolve('I resolved!');
  } else {
    reject('I rejected!');
  }
};
const myFirstPromise2 = new Promise(executorFunction2);
/*
Let’s break down what’s happening above:

    1. We declare a variable myFirstPromise
    2. myFirstPromise is constructed using new Promise() which is the Promise constructor method.
    3. executorFunction() is passed to the constructor and has two functions as parameters: resolve and reject.
    4. If someCondition evaluates to true, we invoke resolve() with the string 'I resolved!'
    5. If not, we invoke reject() with the string 'I rejected!'

In our example, myFirstPromise resolves or rejects based on a simple condition, but, in practice, promises settle based on the results of asynchronous operations. For example, a database request may fulfill with the data from a query or reject with an error thrown. In this exercise, we’ll construct promises which resolve synchronously to more easily understand how they work.
Instructions
1.
/*****************************************************/
/**********************PRACTICE***********************/
/*****************************************************/
/*
P1: 

1. You’ll be writing your code in the code-editor, but we won’t be running it until the final step. To check your code for a step, you can press the “Check Work” button.

We’re going to create a promise representing ordering sunglasses from an online store. First, create the function, myExecutor(). Later on, you’ll pass this function into the Promise constructor.

myExecutor() should:

    Have two parameters: resolve and reject
    Check if the sunglasses property on the inventory object has a value greater than zero
    If it does, myExecutor() should invoke resolve() with the string 'Sunglasses order processed.'
    If it does not, myExecutor() should invoke reject() with the string 'That item is sold out.'

When you’re ready, press the “Check Work” button.

2.

Create a function, orderSunglasses(). This function should have no parameters. It should return a new promise constructed by passing your myExecutor() function into the Promise constructor.
Checkpoint 3 Passed
3.

Create a variable orderPromise assigned to the returned value of your orderSunglasses() function.
Checkpoint 4 Passed
4.

At the bottom of your app.js file, log orderPromise to the console.
Checkpoint 5 Passed
5.

In this exercise and throughout the lesson, we’ll provide you with a bash terminal to execute your code. To run the app.js program, you’ll type node app.js in the terminal and hit enter (or return). You’ll be able to see the output of the program in the terminal.

Let’s try it! Type node app.js in the terminal and hit enter.

If you’d like, you can see an alternate output by changing the sunglasses property in the inventory object to 0 and executing app.js from the terminal again.

When you’re ready to move on, press the “Check Work” button.

*/

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
};

// Write your code below:
const myExecutor3 = (resolve, reject) => {
  inventory.sunglasses > 0
    ? resolve('Sunglasses order processed.')
    : reject('That item is sold out.');
};

const orderSunglasses = () => {
  return new Promise(myExecutor);
};

const orderPromise = orderSunglasses();

console.log(orderPromise);
