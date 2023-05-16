/*
******************************
1. The aysnc and await Keywords
******************************
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
  alert('Invalid JSON data!');
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
let promise1 = Promise.resolve(5);
let promise2 = 44;
let promise3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function (values) {
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
A6: A promise with a resolved value of undefined.
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
