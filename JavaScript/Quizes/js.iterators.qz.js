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
