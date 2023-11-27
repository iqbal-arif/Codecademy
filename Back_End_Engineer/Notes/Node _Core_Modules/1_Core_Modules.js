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
