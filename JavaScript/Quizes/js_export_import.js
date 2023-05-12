/*
Q1:In the code snippet, two separate files each export a function called validate(). Which of the following demonstrates the proper syntax for renaming these values when importing them?
*/
/* username-validation.js */
export const validate = (username) => {
  // logic for validating a username omitted...
};

/* password-validation.js */
export const validate2 = (password) => {
  // logic for validating a password omitted...
};

/*A1: Correct! The as keyword can be used to rename imported values.*/

import { validate as validateUsername } from './username-validate.js';
import { validate as validatePassword } from './password-validate.js';

/*
Q2: Import the default export from utilities.js which is in the same folder as this module file using ES6 syntax. Save it to a variable called utilities.
*/
/* A2:*/
import utilities from './utilities.js';

/*Q3: Which of the following is the valid syntax in Node to import a module called robot.js from the same directory? */

/*A3:*/
const Robot = require('./robot.js');

/*Q4: Which of the following is NOT true of JavaScript modules?*/
/*A4: Creating modules makes it harder to find relevant code and makes debugging harder.*/
/*True
1. Creating modules and only importing the necessary modules for each file prevents namespace pollution.
2. Creating modules makes it easier to keep sensitive information private from other modules.
3. Creating modules makes it easier to reuse logic in multiple parts of an application.*/
