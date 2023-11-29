/****************** /*/ //*/*/*/*/*/*///*/ *************/
/*** 1. Node Module Implementation ***/
/*
Modules are reusable pieces of code in a file that can be exported and then imported for use in another file. A modular program is one whose components can be separated, used individually, and recombined to create a complex system. 
*/
/*
By isolating code into separate files, called modules, you can:

    find, fix, and debug code more easily.
    reuse and recycle defined logic in different parts of your application.
    keep information private and protected from other modules.
    prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program. 

*/
/*** Temperature C/F Converter ***/
/* water-limits.js */

function celsiusToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = celsiusToFahrenheit(freezingPointC);
const boilingPointF = celsiusToFahrenheit(boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);
/*
  This water-limits.js program is simple but let’s break it down into its parts:

  At the top of the file, the function celsiusToFahrenheit() is declared. When given a value in Celsius, it will return the value converted to Fahrenheit. Both input and output will be a number.
  Below, freezingPointC and boilingPointC are assigned the known values 0 and 100, respectively.
  Using these values and the function celsiusToFahrenheit(), the additional values freezingPointF and boilingPointF are calculated.
  Lastly, these values are printed to the console.

Executing this file using Node would look something like this:
$ node water-limits.js
The freezing point of water in Fahrenheit is 32
The boiling point of water in Fahrenheit is 212
*/
/*
The user can input any temperature value in Celsius and the program responds by printing the input temperature converted to Fahrenheit.
*/
/*
Run such a program and see a response like so:

$ node celsius-to-fahrenheit.js 100
100 degrees Celsius = 212 degrees Fahrenheit

*/
/* celsius-to-fahrenheit.js */
function celsiusToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}

const celsiusInput = process.argv[2]; // Get the 3rd input from the argument list
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);

console.log(
  `${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`
);

/*
Now, let’s break down the celsius-to-fahrenheit.js program:

    1_ At the top of the file, the function celsiusToFahrenheit() is declared. When given a value in Celsius, it will return the value converted to Fahrenheit. Both input and output will be a number.

    2_ On the next line of code, celsiusInput is assigned process.argv[2]. When a program is executed in the Node environment, process.argv is an array holding the arguments provided. In this case, it looks like ['node', 'celsius-to-fahrenheit.js', '100']. So, process.argv[2] returns 100.

    3_ Using this value and the function celsiusToFahrenheit(), the additional value fahrenheitValue is calculated.
    
    4_ Lastly, a message is printed to the console displaying this data.

Notice anything similar between the two programs, water-limits.js and celsius-to-fahrenheit.js? Both programs implement the function celsiusToFahrenheit()! Not only did we write this function twice, but if we ever need to make changes to the function we’ll also have to make those changes in two places.

Creating a module that exports a celsiusToFahrenheit() function that can be used by both of these programs would solve this repetitive code problem.

*/

/*** Module.exports ***/
/*To create a module, you simply have to create a new file where the functions can be declared. */

/* converters.js */
function celsiusToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}

module.exports.celsiusToFahrenheit = celsiusToFahrenheit;

module.exports.fahrenheitToCelsius = function (fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
};

/*
  The code snippet above demonstrates two ways of exporting functions from a module. Let’s break it down:

    1_ At the top of the new file, converters.js, the function celsiusToFahrenheit() is declared.
    
    2_ On the next line of code, the first approach for exporting a function from a module is shown. In this case, the already-defined function celsiusToFahrenheit() is assigned to module.exports.celsiusToFahrenheit.
    
    3_ Below, an alternative approach for exporting a function from a module is shown. In this second case, a new function expression is declared and assigned to module.exports.fahrenheitToCelsius. This new method is designed to convert Fahrenheit values back to Celsius.
    
    4_Both approaches successfully store a function within the module.exports object.

module.exports is an object that is built-in to the Node.js runtime environment. Other files can now import this object, and make use of these two functions, with another feature that is built-in to the Node.js runtime environment: the require() function. */

/*** Require() ***/
/*The require() function accepts a string as an argument. That string provides the file path to the module you would like to import.

Let’s update water-limits.js such that it uses require() to import the .celsiusToFahrenheit() method from the module.exports object within converters.js:

/* water-limits.js */
const converters = require('./converters.js');

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = converters.celsiusToFahrenheit(freezingPointC);
const boilingPointF = converters.celsiusToFahrenheit(boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);

/*
In this case, ./ is a relative path indicating that converters.js is stored in the same folder as water-limits.js. When you use require(), the entire module.exports object is returned and stored in the variable converters. This means that both the .celsiusToFahrenheit() and .fahrenheitToCelsius() methods can be used in this program!*/
