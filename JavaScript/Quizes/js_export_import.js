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

/*Q5: Which of the following is the valid syntax to export the Planets module using the ES6 default export syntax?*/

let Planets = {};
Planets.calculateVolume = (radius) => {
  let volume = (4 / 3) * Math.pi * Math.pow(radius, 3);
  return volume;
};
/*A5*/
export default Planets;

/*Q6 Which of the following demonstrates the valid ES6 syntax for exporting named variables inline?*/

/* geometry.js */
export const rectangleArea = (h, w) => {
  return h * w;
};
export const circleArea = (radius) => {
  return Math.pi * radius * radius;
};
/*A6:Added export before the function
  Not quite, if exporting multiple named values at once, you must surround the values with curly braces {}. */

/*Q7: How would one export the following variables using named exports?*/

/* geometry.js */
const rectangleArea = (h, w) => {
  return h * w;
};
const circleArea = (radius) => {
  return Math.pi * radius * radius;
};
/*A7*/
export { rectangleArea, circleArea };

/*Q8:Which of the following is the valid syntax to export this module in Node?*/

let Robot = {};
Robot.name = 'Johnny';
Robot.sayName = (name) => {
  console.log(`My name is ${name}`);
};

/*A8: Not quite. module.exports should be assigned a value with =.*/
module.exports = Robot;
