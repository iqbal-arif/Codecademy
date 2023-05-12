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
