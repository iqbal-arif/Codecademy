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
