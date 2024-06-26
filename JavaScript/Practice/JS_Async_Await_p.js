/*
******************************
1. The aysnc and await Keywords
******************************
*/
function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello World! after 2 second timeout');
    }, 2000);
  });
}

async function msg() {
  const msg = await helloWorld();
  console.log('Message:', msg);
}

msg(); // Message: Hello World! <-- after 2 seconds
/*
The async…await ES6 JavaScript syntax offers a new way to write more readable and scalable code to handle promises. A JavaScript async function can contain statements preceded by an await operator. The operand of await is a promise. At an await expression, the execution of the async function is paused and waits for the operand promise to resolve. The await operator returns the promise’s resolved value. An await operand can only be used inside an async function.
*/

/*
********************************
2. Async Function Error Handling
********************************
*/
let json = '{ "age": 30 }'; // incomplete data

try {
  let user = JSON.parse(json); // <-- no errors
  alert(user.name); // no name!
} catch (e) {
  alert('Invalid JSON data!');
}
/*
JavaScript async functions uses try...catch statements for error handling. This method allows shared error handling for synchronous and asynchronous code.
 */

/*
********************************
3. Async Function Error Handling
********************************
*/
let json2 = '{ "age": 30 }'; // incomplete data

try {
  let user = JSON2.parse(json); // <-- no errors
  alert(user.name); // no name!
} catch (e) {
  alert('Invalid JSON data! name property does not exists');
}
/*
JavaScript async functions uses try...catch statements for error handling. This method allows shared error handling for synchronous and asynchronous code.
*/

/*
**************************
4. Creating async Function
**************************
*/
function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}

const msg = async function () {
  //Async Function Expression
  const msg = await helloWorld();
  console.log('Message:', msg);
};

const msg1 = async () => {
  //Async Arrow Function
  const msg = await helloWorld();
  console.log('Message:', msg);
};

msg(); // Message: Hello World! <-- after 2 seconds
msg1(); // Message: Hello World! <-- after 2 seconds
/*
An asynchronous JavaScript function can be created with the async keyword before the function name, or before () when using the arrow function syntax. An async function returns a promise.
*/

/*
***************************
5. Using async await syntax
***************************
Constructing one or more promises or calls without await can allow multiple async functions to execute simultaneously. Through this approach, a program can take advantage of concurrency, and asynchronous actions can be initiated within an async function. Since using the await keyword halts the execution of an async function, each async function can be awaited once its value is required by program logic.
*/

/*
***********************************
6. JavaScript async…await advantage
***********************************
The JavaScript async...await syntax allows multiple promises to be initiated and then resolved for values when required during execution of the program. As an alternate to chaining .then() functions, it offers better maintainablity of the code and a close resemblance synchronous code.
*/

/*
********************************
7. Resolving JavaScript Promises
********************************
*/
let promise11 = Promise.resolve(5);
let promise22 = 44;
let promise33 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise11, promise22, promise33]).then(function (values) {
  console.log(values);
});
// expected output: Array [5, 44, "foo"]
/*
When using JavaScript async...await, multiple asynchronous operations can run concurrently. If the resolved value is required for each promise initiated, Promise.all() can be used to retrieve the resolved value, avoiding unnecessary blocking.
*/

/*****************************************************/
/**********************PRACTICE***********************/
/*****************************************************
 
Q1: What purpose does the await keyword serve?
A1: It's an operator used only inside an async function that halts the execution of a function until a given promise is no longer pending and returns the resolved value of the promise.

Q2: The following code contains the handling of multiple independent tasks concurrently as promises without blocking using the async and await keywords. Fill in the code with the correct syntax where these keywords are used. The expected output should display:
*/
// Tasks Results: [dryLaundry result], [matchSocks result], [foldLaundry result].

let { dryLaundry, matchSocks, foldLaundry } = require('./tasks.js');

async function multiTask() {
  const dryLaundryResult = dryLaundry();
  const matchSocksResult = matchSocks();
  const foldLaundryResult = foldLaundry();
  console.log(
    `Tasks Results: ${await dryLaundryResult}, ${await matchSocksResult}, ${await foldLaundryResult}.`
  );
}

multiTask();
/*
Q3: What does the async keyword do? 
A3: It creates a function that returns a Promise.
*/

/*
Q4: Complete the try...catch statement within the JavaScript code.
*/
let json3 = '{ "age": 30 }';

try {
  let user = JSON.parse(json);
  alert(user.age);
} catch (error) {
  alert('Invalid JSON data!');
}

/*
Q5: True or False: the async...await syntax has functionality that cannot be accomplished by native promises. 
A5: False.
Right! The async/await syntax is syntactic sugar - it does not introduce new functionality into the language. 
*/

/*
Q6: The async function can return each of the following except:
A promise with a resolved value of undefined.
A promise with a resolved value that is not a promise.
A promise.
A6: A promise with a value of await.
*/

/*
Q7: Complete the code block for multiple asynchronous operations.
*/
var promise1 = Promise.resolve(5);
var promise2 = 44;
var promise3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function (values) {
  console.log(values);
});
// expected output: Array [5, 44, "foo"]

/*
Q8: Confirm if the statement is true or false:

Constructing one or more promises or calls without await can allow multiple async functions to execute simultaneously. Each async function can be awaited once its value is required by program logic.

A8: True.
Well done! Through this approach, a program can take advantage of concurrency.
*/

/*
Q9: Complete the async...await function to print the Hello World! message.
*/
function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}

async function msg() {
  const msg = await helloWorld();
  console.log('Message:', msg);
}

msg(); // Message: Hello World! <-- after 2 seconds

/*
Q10: Q1. Write an async function, matchPromises(). Your function should have two parameters—both functions that take no arguments and return promises. When invoked, matchPromises() should invoke the two function arguments and compare the two promises:

    If the promises have the same resolved value, matchPromises() should return the string "match".
    If the promises have different resolved values, matchPromises() should return the string "no match".
    If either promise rejects, matchPromises() should return the string "error".
*/
/*Codecademy Solution*/

async function matchPromises(pendingPromise1, pendingPromise2) {
  try {
    let resolvedPromise1 = await pendingPromise1();
    let resolvedPromise2 = await pendingPromise2();
    if (resolvedPromise1 === resolvedPromise2) {
      return 'match';
    } else if (resolvedPromise1 !== resolvedPromise2) {
      return 'no match';
    }
  } catch (error) {
    console.log(error);
    return 'error';
  }
}

// This code isn't necessary to pass the assessment, but provided to help you check the output of your function
const promiseOne = () => {
  return new Promise((resolve, reject) => {
    resolve('done');
  });
};
const promiseTwo = () => {
  return new Promise((resolve, reject) => {
    resolve('done');
  });
};

matchPromises(promiseOne, promiseTwo).then((result) => console.log(result));
/******My Solution*****/

// Define your function below:
function asyncTask() {
  return new Promise((resolve) => {
    resolve('Task Done');
  });
}

const taskOne = async () => {
  const task = await asyncTask();
  console.log('Task:', task);
};
const taskTwo = async () => {
  const task = await asyncTask();
  console.log('Task:', task);
};
async function matchPromises(taskOne, taskTwo) {
  try {
    if (taskOne === taskTwo) {
      return 'match';
    } else if (taskOne !== taskTwo) {
      return 'no match';
    }
  } catch (error) {
    console.log('error');
  }
}

matchPromises(taskOne, taskTwo).then((result) => console.log(result));
/*
Q11: Select a statement that is NOT true about the async...await syntax.
A11: This syntax introduces new functionality into the Javascript language writing promises a breeze.
This is not true, as it is only syntactic sugar. Hence, this is the correct answer.
*/
