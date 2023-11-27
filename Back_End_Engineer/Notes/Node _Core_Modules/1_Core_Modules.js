/*** 1. Core Modules */
/*
The core modules are defined within Node.js’s source code and are located in the lib/ folder. Core modules can be required by passing a string with the name of the module into the require() function:
*/
// Require in the 'events' core module:
const events = require('events');

/*** 2. Accessing Node Core Module list */
require('module').builtinModules;
/*** 2. Node REPL */
