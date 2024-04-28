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
3. JavaScript Functions: First-Class Objects
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

/*
6. The .filter() Method
***********************
*/
const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter((n) => {
  return n > 5;
});
/*
The .filter() method executes a callback function on each element in an array. The callback function for each of the elements must return either true or false. The returned array is a new array with any elements for which the callback function returns true.

In the above code example, the array filteredArray will contain all the elements of randomNumbers but 4.
*/

/*
7. Functions Assigned to Variables
**********************************
*/
let plusFive = (number) => {
  return number + 5;
};
// f is assigned the value of plusFive
let f = plusFive;

plusFive(3); // 8
// Since f has a function value, it can be invoked.
f(9); // 14

let plusTwo = (number) => number + 2;

let func = plusTwo;
func(2);

/*
In JavaScript, functions are a data type just as strings, numbers, and arrays are data types. Therefore, functions can be assigned as values to variables, but are different from all other data types because they can be invoked.
*/
/********************************************************/
/************************Practice************************/
/********************************************************/

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
let cb2 = (n1, n2) => {
  return n1 + n2;
};

let hof2 = (func) => {
  let value = func(3, 5);
  return `this function returned ${value}`;
};

let hof3 = (func) => {
  let funcValue = func(15, 10);
  return `This function returns ${funcValue}`;
};

hof(cb2); // 'this function returned 8'
/*
Use the parameter func with the correct values to yield 8.
*/

/*
Q3: The code snippet includes a function assigned to the variable sum. Given the fact that JavaScript functions are first-class objects, fill in the blanks so that a property of sum called alias is assigned the string value, 'summation'.
*/
const sum2 = (x, y) => x + y;
sum.alias = 'summation';

/*
Q4: Use the .map() method on the oddNumbers array to return each number multiplied by 2 into the evenNumbers array.
*/
const oddNumbers = [1, 3, 5, 7];

const evenNumbers = oddNumbers.map((number) => {
  return number * 2;
});

/*
Q5: Select the correct code snippet to print only the name of the fruits from the given JavaScript array.

(Hint: Celery is not a fruit!)
*/
const discountedItems = ['Celery', 'Apple', 'Cherry', 'Orange'];

discountedItems.forEach((item) => {
  if (item != 'Celery') console.log(item);
});
/*
Precisely! The JavaScript Array .forEach() method executes a callback function on each element in an array in order. No log will be printed when the item is Celery in the callback function.
*/

/*
Q6: Which of the following methods returns an array with values that evaluate to truthy based on the condition in the method’s block? 

A6: .filter()
*/

/*
Q7: Fill in the blanks to make addItUp log 100 to the console.
*/
const nums = [1, 2, 3, 4];
const initializer = 90;

const addItUp = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initializer);

console.log(addItUp);

/*
Q8: Select the correct option regarding the included code, JavaScript callback functions, and higher order functions.
*/
const getSquare = (n) => {
  return n * n;
};

const isEven2 = (n) => {
  return n % 2 == 0;
};

let printFacts = (squareFunc, evenFunc, num) => {
  const squareVal = squareFunc(num);
  const isSquareEven = evenFunc(squareVal);
  console.log(`The square value of ${num} is ${squareVal}.`);
  console.log(`The square value is an even number: ${isSquareEven}.`);
};

printFacts(getSquare, isEven2, 7);

/*
printFacts is a higher order functions, isEven is a callback function.
Awesome! In JavaScript, a callback function is a function passed into another function (the higher order function) as an argument.
*/

/*
Q9: Complete the JavaScript code block so that the variable orderCopy will contain the function expression order.
*/
const order = (item, qty) => {
  console.log(`${qty} ${item}(s) added to the cart.`);
};

const orderCopy = order;

orderCopy('Lemon', 5);
// 5 Lemon(s) added to the cart.

/*
Q10: Which of the following is true about the .map() method?
A10: The .map() method returns a new array made up of the return values from its callback function.
*/

/*
Q11: Which of the following methods returns a boolean value?
A11: .some()
👏
Correct! Calling .some() on an array returns a boolean value based on the condition in the callback function. 
*/

/*
Q12: Which of the following iterator methods returns undefined? 
A12: .forEach()
Correct! Calling .forEach() on an array returns undefined.
*/

/*Q13:What will the following code return?
 */
const animals = ['bears', 'cats', 'dogs', 'elephants', 'giraffes'];

animals.some((animal) => animal.length < 5);
/*
A13: true  Correct
*/

/*Q14: What will the following code return?
 */
const animals2 = ['bears', 'cats', 'dogs', 'elephants', 'giraffes'];

animals2.every((animal) => animal.length < 5);
/*
A14: false  Correct
*/

/*Q15: What is the correct way to refactor .forEach()‘s callback function below to use arrow function syntax?
 */
namesArray.forEach(function (name) {
  console.log('Welcome, ' + name + '!');
});

//A15: Refactoring  Correct

namesArray.forEach((name) => console.log('Welcome, ' + name + '!'));

/*Q16: Which of the following methods returns a new array? 
A16: .filter()  Correct
*/

/*Q17: Which of the following methods returns an array with values that evaluate to truthy based on the condition in the method’s block? 
A17: .filter() 
👏
Correct! Calling .filter() returns a new array based on the condition in the callback function.
*/

/*Q18: What is the value of foundElement after the code runs?
 */
const randomNums = [1, 123, 25, 90, 3543, 42];

const foundElement = randomNums.findIndex((num) => num > 200);
/*
A18: 4
👏
Correct! The index of the element that satisfies the condition in the callback function is 4
*/
