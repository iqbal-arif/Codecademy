/*
1. Which of the following iterator methods returns undefined? 
A1: .forEach()
Correct! Calling .forEach() on an array returns undefined.
*/

/*
Q2: Fill in the blanks to make addItUp log 100 to the console.
*/
const nums = [1, 2, 3, 4];
const initializer = 90;

const addItUp = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initializer);

console.log(addItUp);

/*
Q3: The code snippet includes a function assigned to the variable sum. Given the fact that JavaScript functions are first-class objects, fill in the blanks so that a property of sum called alias is assigned the string value, 'summation'.
*/
const sum2 = (x, y) => x + y;
sum.alias = 'summation';

/*
Q4: What is the value of foundElement after the code runs?
*/
const randomNums = [1, 123, 25, 90, 3543, 42];

const foundElement = randomNums.findIndex((num) => num > 200);
/*
A4: 4
*/

/*Q5: Select the option that correctly assigns the increment function to the variable incrementHolder.
 */
const increment = (salary) => {
  const revisedSalary = salary + 5;
  console.log(revisedSalary);
  return revisedSalary;
};

const incrementHolder = increment;
/*
Awesome! JavaScript functions can be assigned to variables as values.*/

/*
Q5: In the following Javascript code snippet, the callback function cb is a function that sums the value of two numbers.

Fill in the blank so that when the function is passed into the higher order function hof, it is then invoked so that the value returned is 8.
*/
let cb2 = (n1, n2) => {
  return n1 + n2;
};

let hof2 = (func) => {
  let value = func(3, 5);
  return `this function returned ${value}`;
};

hof(cb2); // 'this function returned 8'
/*
Use the parameter func with the correct values to yield 8.
*/

/*
Q6: Examine the below code. Which of the functions represents a higher-order function?
*/
let multiplyTwoValues = (val1, val2) => {
  return val1 * val2;
};

let square = (val) => {
  return val * val;
};

let getFunctionString = (func) => {
  return func.toString();
};

let result = multiplyTwoValues(2, 2);
square(result);
/*
A higher-order function accepts functions as parameters and/or returns a function.
getFunctionString()
Correct! This function accepts a function as a parameter, which makes it a higher-order function.
*/

/*
Q7: Which of the following methods returns an array with values that evaluate to truthy based on the condition in the method’s block? 

A6: .filter()
*/
