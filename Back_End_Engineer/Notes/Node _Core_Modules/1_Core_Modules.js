/*** 1. Core Modules */
/*
The core modules are defined within Node.js’s source code and are located in the lib/ folder. Core modules can be required by passing a string with the name of the module into the require() function:
*/
// Require in the 'events' core module:
const events = require('events');

/*** 2. Accessing Node Core Module list */
require('module').builtinModules;

/****************** /*/ //*/*/*/*/*/*///*/ *************/
/*** 1. Console Module ***/
/*
Node.js, the built-in console module exports a global console object that gives the terminal similar functionality.
The console object provides many of the same familiar methods such as:

    1_ .log() — to print messages to the terminal.
    2_ .assert() — to print a message to the terminal if the value is falsy.
    3_ .table() — to print out a table in the terminal from an object or array.
Example
*/
const petsArray = ['dog', 'cat', 'bird', 'monkey'];

// Add console methods below!
console.log(petsArray);

console.table(petsArray);

console.assert(petsArray.length > 5);

/*** 2. Process Module ***/
/*
The process.env property is an object which stores and controls information about the environment in which the process is currently running.

We could store this information on the process.env.

    One convention is to add a property to process.env with the key NODE_ENV and a value of either production or development.
*/
/*** i. process.env.NODE_ENV ***/

if (process.env.NODE_ENV === 'development') {
  console.log('Testing! Testing! Does everything work?');
}

/*** ii. process.memoryUsage() ***/
/*
The  returns information on the CPU demands of the current process.
*/

/*** iii. process.argv ***/
/*
The process.argv property holds an array of command line values provided when the current process was initiated. The first element in the array is the absolute path to Node, which ran the process. The second element in the array is the path to the file that’s running. The following elements will be any command line arguments provided when the process was initiated. Command line arguments are separated from one another with spaces
console.log(process.argv[3]);
*/

/*** iv. Example of process.argv ***/
/* 1.
We want the program in app.js to store the starting amount of memory used (heapUsed), perform an operation, and then compare the final amount of memory used to the original amount. Right now, the initialMemory variable is assigned to null. Change this line, so that initialMemory is instead assigned the value of the heapUsed property on the object returned from invoking the process.memoryUsage() method

2_
We want the user of the program to be able to fill in their own word when they run the program. Right now word is assigned to null. Change the program so that when a user initiates the program with an additional command line argument, word will be assigned that value. For example, running the program with the command: node app.js Codecademy would result in word being assigned the value 'Codecademy'

When we initiate the program with the command node app.js Codecademy, the first element in the process.argv array is the file path to Node, the second is the file path to the location program file, and the third is the string 'Codecademy'. In app.js, we’ll want to assign word to this third element in the array:

let word = process.argv[2];

3_
3.

Awesome! Now let’s run the program. Type node app.js followed by any word you like and then hit enter.

node app.js Codecademy
*/

heapUsed;
let word = process.argv[2];

console.log(`Your word is ${word}`);

// Create a new array
let wordArray = [];

// Loop 1000 times, pushing into the array each time
for (let i = 0; i < 1000; i++) {
  wordArray.push(`${word} count: ${i}`);
}

console.log(
  `Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${
    process.memoryUsage().heapUsed
  }. \nAfter using the loop to add elements to the array, the process is using ${
    process.memoryUsage().heapUsed - initialMemory
  } more bytes of memory.`
);
