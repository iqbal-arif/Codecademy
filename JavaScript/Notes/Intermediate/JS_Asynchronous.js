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

/*****************************************************/
/*****************************************************/
/*
**********************************
4. The Node setTimeout() Function
**********************************
Knowing how to construct a promise is useful, but most of the time, knowing how to consume, or use, promises will be key. Rather than constructing promises, you’ll be handling Promise objects returned to you as the result of an asynchronous operation. These promises will start off pending but settle eventually.

Moving forward, we’ll be simulating this by providing you with functions that return promises which settle after some time. To accomplish this, we’ll be using setTimeout(). setTimeout() is a Node API (a comparable API is provided by web browsers) that uses callback functions to schedule tasks to be performed after a delay. setTimeout() has two parameters: a callback function and a delay in milliseconds.
*/
const delayedHello = () => {
  console.log('Hi! This is an asynchronous greeting!');
};

setTimeout(delayedHello, 2000);
/*
Here, we invoke setTimeout() with the callback function delayedHello() and 2000. In at least two seconds delayedHello() will be invoked. But why is it “at least” two seconds and not exactly two seconds?

This delay is performed asynchronously—the rest of our program won’t stop executing during the delay. Asynchronous JavaScript uses something called the event-loop. After two seconds, delayedHello() is added to a line of code waiting to be run. Before it can run, any synchronous code from the program will run. Next, any code in front of it in the line will run. This means it might be more than two seconds before delayedHello() is actually executed.

Let’s look at how we’ll be using setTimeout() to construct asynchronous promises:
*/
const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('I resolved!');
    }, 1000);
  });
};

const prom = returnPromiseFunction();
/*
In the example code, we invoked returnPromiseFunction() which returned a promise. We assigned that promise to the variable prom. Similar to the asynchronous promises you may encounter in production, prom will initially have a status of pending.

Let’s explore setTimeout() a bit more.
Instructions
1.

Create a function, usingSTO(). Your usingSTO() function should have no parameters. Inside the function body, it should print a string to the console. This can be any string you want (as long as it’s not either “This is the first line of synchronous code.” or “This is the last line of synchronous code.”).

Check your work to move on to the next step.
2.

Now, let’s invoke the setTimeout() function. Remember, setTimeout() has two parameters. Invoke setTimeout() with your usingSTO() function as the first argument and a number between 0 and 3000 as the second argument.
3.

Take a moment to predict the output of this program.

Whenever you’re ready, type node app.js in the terminal and hit enter.

See if the program’s output in the terminal lines up with what you expected.

Be sure to click “Check Work” after running the command to pass this checkpoint and move on to the next exercise.


*/
/*****************************************************/
/**********************PRACTICE***********************/
/*****************************************************
1.

Create a function, usingSTO(). Your usingSTO() function should have no parameters. Inside the function body, it should print a string to the console. This can be any string you want (as long as it’s not either “This is the first line of synchronous code.” or “This is the last line of synchronous code.”).

Check your work to move on to the next step.
2.

Now, let’s invoke the setTimeout() function. Remember, setTimeout() has two parameters. Invoke setTimeout() with your usingSTO() function as the first argument and a number between 0 and 3000 as the second argument.
3.

Take a moment to predict the output of this program.

Whenever you’re ready, type node app.js in the terminal and hit enter.

See if the program’s output in the terminal lines up with what you expected.

Be sure to click “Check Work” after running the command to pass this checkpoint and move on to the next exercise.
*/
console.log('This is the first line of code in app.js.');
// Keep the line above as the first line of code
// Write your code here:

const usingSTO = () => {
  console.log('This is the drill for promise code.');
};
setTimeout(usingSTO, 1000);

// Keep the line below as the last line of code:
console.log('This is the last line of code in app.js.');

/*****************************************************/
/*****************************************************/

/*
**********************
5. Consuming Promises
**********************
The initial state of an asynchronous promise is pending, but we have a guarantee that it will settle. How do we tell the computer what should happen then? Promise objects come with an aptly named .then() method. It allows us to say, “I have a promise, when it settles, then here’s what I want to happen…”

In the case of our dishwasher promise, the dishwasher will run then:

    If our promise rejects, this means we have dirty dishes, and we’ll add soap and run the dishwasher again.
    If our promise fulfills, this means we have clean dishes, and we’ll put the dishes away.

.then() is a higher-order function— it takes two callback functions as arguments. We refer to these callbacks as handlers. When the promise settles, the appropriate handler will be invoked with that settled value.

    The first handler, sometimes called onFulfilled, is a success handler, and it should contain the logic for the promise resolving.
    The second handler, sometimes called onRejected, is a failure handler, and it should contain the logic for the promise rejecting.

We can invoke .then() with one, both, or neither handler! This allows for flexibility, but it can also make for tricky debugging. If the appropriate handler is not provided, instead of throwing an error, .then() will just return a promise with the same settled value as the promise it was called on. One important feature of .then() is that it always returns a promise. We’ll return to this in more detail in a later exercise and explore why it’s so important.

******************************************
6. Success and Failure Callback Functions
******************************************
To handle a “successful” promise, or a promise that resolved, we invoke .then() on the promise, passing in a success handler callback function:
*/
const prom2 = new Promise((resolve, reject) => {
  resolve('Yay!');
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

prom2.then(handleSuccess); // Prints: 'Yay!'
/*
Let’s break down what’s happening in the example code:

    prom is a promise which will resolve to 'Yay!'.
    We define a function, handleSuccess(), which prints the argument passed to it.
    We invoke prom‘s .then() function passing in our handleSuccess() function.
    Since prom resolves, handleSuccess() is invoked with prom‘s resolved value, 'Yay', so 'Yay' is logged to the console.

With typical promise consumption, we won’t know whether a promise will resolve or reject, so we’ll need to provide the logic for either case. We can pass both a success callback and a failure callback to .then().
*/
let prom3 = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < 0.5) {
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});

const handleSuccess2 = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure2 = (rejectionReason) => {
  console.log(rejectionReason);
};

prom3.then(handleSuccess2, handleFailure2);
/*
Let’s break down what’s happening in the example code:

    prom is a promise which will randomly either resolve with 'Yay!' or reject with 'Ohhh noooo!'.
    We pass two handler functions to .then(). The first will be invoked with 'Yay!' if the promise resolves, and the second will be invoked with 'Ohhh noooo!' if the promise rejects.

    Note: The success callback is sometimes called the “success handler function” or the onFulfilled function. The failure callback is sometimes called the “failure handler function” or the onRejected function. 

Let’s write some success and failure callbacks!
*/
/*****************************************************/
/**********************PRACTICE***********************/
/*****************************************************
Instructions
1.

Take a look at the provided code in app.js. We use require() to include the function checkInventory() from library.js. It builds on the logic of the orderSunglasses() function you wrote in a previous exercise.

    checkInventory() takes in an array representing an order and returns a promise.
    If every item in the order is in stock, that promise resolves with the value "Thank you. Your order was successful."
    Otherwise, the promise rejects with the value "We're sorry. Your order could not be completed because some items are sold out".

We used setTimeout() to ensure that the checkInventory() promise settles asynchronously.

If you’d like, look at the library.js file to see how it works. Press “Check Work” when you’re ready to move on.
2.

Write a function, handleSuccess(). You’ll use this function later on as your success handler. handleSuccess() should have one parameter, representing a resolved value. Inside the body of handleSuccess(), log the parameter to the console.
3.

Write a function, handleFailure(). You’ll use this function later on as your failure handler. handleFailure() should have one parameter, representing a rejection reason. Inside the body of handleFailure(), log the parameter to the console.
4.

Invoke checkInventory() with order. This will return a promise. Attach a .then() function to this. Pass into .then() the two handlers you wrote as callback functions.
5.

Type node app.js in the terminal and hit enter.

/*library.js*/
const inventory2 = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
};

const checkInventory = (order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let inStock = order.every((item) => inventory2[item[0]] >= item[1]);
      if (inStock) {
        resolve(`Thank you. Your order was successful.`);
      } else {
        reject(
          `We're sorry. Your order could not be completed because some items are sold out.`
        );
      }
    }, 1000);
  });
};

module.exports = { checkInventory };

/*app.js*/
const { checkInventory } = require('./library.js');

const order = [
  ['sunglasses', 1],
  ['bags', 2],
];

// Write your code below:

handleSuccess = (resolve) => {
  console.log(resolve);
};

const handleFailure = (reject) => {
  console.log(reject);
};

checkInventory(order).then(handleSuccess, handleFailure);

/*****************************************************/
/*****************************************************/
/*
*******************************
7. Using catch() with Promises
*******************************
One way to write cleaner code is to follow a principle called separation of concerns. Separation of concerns means organizing code into distinct sections each handling a specific task. It enables us to quickly navigate our code and know where to look if something isn’t working.

Remember, .then() will return a promise with the same settled value as the promise it was called on if no appropriate handler was provided. This implementation allows us to separate our resolved logic from our rejected logic. Instead of passing both handlers into one .then(), we can chain a second .then() with a failure handler to a first .then() with a success handler and both cases will be handled.
*/
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .then(null, (rejectionReason) => {
    console.log(rejectionReason);
  });
/*
Since JavaScript doesn’t mind whitespace, we follow a common convention of putting each part of this chain on a new line to make it easier to read. To create even more readable code, we can use a different promise function: .catch().

The .catch() function takes only one argument, onRejected. In the case of a rejected promise, this failure handler will be invoked with the reason for rejection. Using .catch() accomplishes the same thing as using a .then() with only a failure handler.

Let’s look at an example using .catch():
*/
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
/*
Let’s break down what’s happening in the example code:

    prom is a promise which randomly either resolves with 'Yay!' or rejects with 'Ohhh noooo!'.
    We pass a success handler to .then() and a failure handler to .catch().
    If the promise resolves, .then()‘s success handler will be invoked with 'Yay!'.
    If the promise rejects, .then() will return a promise with the same rejection reason as the original promise and .catch()‘s failure handler will be invoked with that rejection reason.

Let’s practice writing .catch() functions.

/*****************************************************/
/**********************PRACTICE***********************/
/*****************************************************
Instructions
1.

We’re going to refactor the functionality of the previous exercise but this time we’ll use .catch()! First invoke the checkInventory() function with the order. Remember, this function will return a promise.
2.

Add a .then() to the returned promise. Pass in the success handler handleSuccess().
3.

Add a .catch() to the returned promise. Pass in the failure handler handleFailure().
4.

We set our inventory of sunglasses to 0, so the order shouldn’t go through. Let’s make sure our code has the expected results. Type node app.js in the terminal and hit enter.
*/

checkInventory(order).then(handleSuccess).catch(handleFailure);


/*
Chaining Multiple Promises

One common pattern we’ll see with asynchronous programming is multiple operations which depend on each other to execute or that must be executed in a certain order. We might make one request to a database and use the data returned to us to make another request and so on! Let’s illustrate this with another cleaning example, washing clothes:

We take our dirty clothes and put them in the washing machine. If the clothes are cleaned, then we’ll want to put them in the dryer. After the dryer runs, if the clothes are dry, then we can fold them and put them away.

This process of chaining promises together is called composition. Promises are designed with composition in mind! Here’s a simple promise chain in code:

firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
  console.log(secondResolveVal);
});

Let’s break down what’s happening in the example:

    We invoke a function firstPromiseFunction() which returns a promise.
    We invoke .then() with an anonymous function as the success handler.
    Inside the success handler we return a new promise— the result of invoking a second function, secondPromiseFunction() with the first promise’s resolved value.
    We invoke a second .then() to handle the logic for the second promise settling.
    Inside that .then(), we have a success handler which will log the second promise’s resolved value to the console.

In order for our chain to work properly, we had to return the promise secondPromiseFunction(firstResolveVal). This ensured that the return value of the first .then() was our second promise rather than the default return of a new promise with the same settled value as the initial.

Let’s write some promise chains!
Instructions
1.

Take a look at the provided code. We require in three functions: checkInventory(), processPayment(), shipOrder(). These functions each return a promise.

checkInventory() expects an order argument and returns a promise. If there are enough items in stock to fill the order, the promise will resolve to an array. The first element in the resolved value array will be the same order and the second element will be the total cost of the order as a number.

processPayment() expects an array argument with the order as the first element and the purchase total as the second. This function returns a promise. If there is a large enough balance on the giftcard associated with the order, it will resolve to an array. The first element in the resolved value array will be the same order and the second element will be a tracking number.

shipOrder() expects an array argument with the order as the first element and a tracking number as the second. It returns a promise which resolves to a string confirming the order has shipped.

If you’d like, look at the library.js file to see how these functions work. Press “Check Work” when you’re ready to move on to the next checkpoint.
2.

We set up a promise chain but it’s missing a couple important lines of code to make it function properly.

We invoked checkInventory() with order and chained a .then() function to it. This .then() has an anonymous function as its success handler, but it’s missing a return statement.

The success handler should return a processPayment() promise.
3.

We have a second .then() function on the chain. This .then() also has an anonymous function as its success handler and is missing a return statement.

The success handler should return a shipOrder() promise.
4.

Type node app.js in the terminal and hit enter.
