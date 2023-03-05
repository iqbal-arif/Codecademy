function getReminder() {
  console.log('Water the plants.');
}

// Function Declaration
function greetInSpanish() {
  console.log('Buenas tardes.');
}

// Function with Parameter
function sayThanks(name) {
  console.log(
    'Thank you for your purchase ' + name + '! We appreciate your business.'
  );
}

sayThanks('Cole');

// Default Parameter
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

// Function with Return Keyword

function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

//   Helper Function

// Example I:
function multiplyByNineFifths(number) {
  return number * (9 / 5);
}

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
}

const tempFarenheit = getFahrenheit(15); // Returns 59
console.log(tempFarenheit);

// Example II:
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

// Function Expressions

// IMPORTANT NOTE: Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined.

const plantNeedsWater = function (day) {
  return day === 'Wednesday' ? true : false;
};

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));

// Arrow Functions

const plantNeedsWater2 = (day) => {
  return day === 'Wednesday' ? true : false;
};

// Concise Body Arrow Functions

const plantNeedsWater3 = (day) => (day === 'Wednesday' ? true : false);

/*
Review Functions

Give yourself a pat on the back, you just navigated through functions!

In this lesson, we covered some important concepts about functions:

    A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

    A function declaration :
    Diagram showing the syntax of a function declaration

    A parameter is a named variable inside a function’s block which will be assigned the value of the argument passed in when the function is invoked:
    JavaScript syntax for declaring a function with parameters

    To call a function in your code:
    Diagram showing the syntax of invoking a function

    ES6 introduces new ways of handling arbitrary parameters through default parameters which allow us to assign a default value to a parameter in case no argument is passed into the function.

    To return a value from a function, we use a return statement.

    To define a function using function expressions:
    defining a function expression

    To define a function using arrow function notation:

    Function definition can be made concise using concise arrow notation:
    comparing single line and multiline arrow functions

It’s good to be aware of the differences between function expressions, arrow functions, and function declarations. As you program more in JavaScript, you’ll see a wide variety of how these function types are used.
*/
