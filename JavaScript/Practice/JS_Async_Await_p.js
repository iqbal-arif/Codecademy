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
