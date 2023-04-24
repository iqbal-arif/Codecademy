/*
1. The .reduce() Method
***********************
*/
const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum); // 10
/*
The .reduce() method iterates through an array and returns a single value.

In the above code example, the .reduce() method will sum up all the elements of the array. It takes a callback function with two parameters (accumulator, currentValue) as arguments. On each iteration, accumulator is the value returned by the last iteration, and the currentValue is the current element. Optionally, a second argument can be passed which acts as the initial value of the accumulator.
*/

/*
2. Callback Functions
*********************
*/
const isEven = (n) => {
  return n % 2 == 0;
};

let printMsg = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log(`The number ${num} is an even number: ${isNumEven}.`);
};

// Pass in isEven as the callback function
printMsg(isEven, 4);
// Prints: The number 4 is an even number: True.
/*
In JavaScript, a callback function is a function that is passed into another function as an argument. This function can then be invoked during the execution of that higher order function (that it is an argument of).

Since, in JavaScript, functions are objects, functions can be passed as arguments.
*/

/*
3. avaScript Functions: First-Class Objects
*/
//Assign a function to a variable originalFunc
const originalFunc = (num) => {
  return num + 2;
};

//Re-assign the function to a new variable newFunc
const newFunc = originalFunc;

//Access the function's name property
newFunc.name; //'originalFunc'

//Return the function's body as a string
newFunc.toString(); //'(num) => { return num + 2 }'

//Add our own isMathFunction property to the function
newFunc.isMathFunction = true;

//Pass the function as an argument
const functionNameLength = (func) => {
  return func.name.length;
};
functionNameLength(originalFunc); //12

//Return the function
const returnFunc = () => {
  return newFunc;
};
returnFunc(); //[Function: originalFunc]
/*
JavaScript functions are first-class objects. Therefore:

    1. They have built-in properties and methods, such as the name property and the .toString() method.
    2. Properties and methods can be added to them.
    3. They can be passed as arguments and returned from other functions.
    4. They can be assigned to variables, array elements, and other objects.

*/

/*
4. The .map() Method
********************
*/
const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

// add string after each final participant
const announcements = finalParticipants.map((member) => {
  return member + ' joined the contest.';
});

console.log(announcements);
/*
The .map() method executes a callback function on each element in an array. It returns a new array made up of the return values from the callback function.

The original array does not get altered, and the returned array may contain different elements than the original array.

In the example code above, the .map() method is used to add ' joined the contest.' string at the end of each element in the finalParticipants array.
*/

/*
5. The .forEach() Method
************************
*/
const numbers = [28, 77, 45, 99, 27];

numbers.forEach((number) => {
  console.log(number);
});
/*
The .forEach() method executes a callback function on each of the elements in an array in order.

In the above example code, the callback function containing a console.log() method will be executed 5 times, once for each element.
*/
/************************Practice************************/

/*
Q1: Determine the value of the variable sum after the given block of code executes.
*/
const numbers3 = [10, 20, 30, 40];
const sum3 = numbers3.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

/*
A1: 100
Precisely! The JavaScript array .reduce() method iterates through an array. The sum of the array elements will be returned by the help of the accumulator.
*/

/*
Q2: In the following Javascript code snippet, the callback function cb is a function that sums the value of two numbers.

Fill in the blank so that when the function is passed into the higher order function hof, it is then invoked so that the value returned is 8.
*/
let cb = (n1, n2) => {
  return n1 + n2;
};

let hof = (func) => {
  let value = func(3, 5);
  return `this function returned ${value}`;
};

hof(cb); // 'this function returned 8'
/*
Use the parameter func with the correct values to yield 8.
*/

/*
Q3: The code snippet includes a function assigned to the variable sum. Given the fact that JavaScript functions are first-class objects, fill in the blanks so that a property of sum called alias is assigned the string value, 'summation'.
*/
const sum = (x, y) => x + y;
sum.alias = 'summation';

/*
Q4: Use the .map() method on the oddNumbers array to return each number multiplied by 2 into the evenNumbers array.
*/
const oddNumbers = [1, 3, 5, 7];

const evenNumbers = oddNumbers.map((number) => {
  return number * 2;
});
