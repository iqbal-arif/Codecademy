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
