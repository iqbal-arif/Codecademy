/*
Implementing Modules in Node

Article on modular programs and implementing modules in the Node runtime environment.

********************
1. What are Modules?
********************
Modules are reusable pieces of code in a file that can be exported and then imported for use in another file. A modular program is one whose components can be separated, used individually, and recombined to create a complex system.

Consider the diagram below of an imaginary program written in a file my_app.js:

diagram of a modular program. separate modules are combined to create a complex program

    Note: The words “module” and “file” are often used interchangably

Instead of having the entire program written within my_app.js, its components are broken up into separate modules that each handle a particular task. For example, the database_logic.js module may contain code for storing and retrieving data from a database. Meanwhile, the date_formatting.js module may contain functions designed to easily convert date values from one format to another (a common headache among programmers!).

This modular strategy is sometimes called separation of concerns and is useful for several reasons. What do you think those reasons might be?
Write down a few of your ideas before revealing the reasons below:

By isolating code into separate files, called modules, you can:

    1. find, fix, and debug code more easily.
    2. reuse and recycle defined logic in different parts of your application.
    3. keep information private and protected from other modules.
    4. prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program.


Implementing modules in your program requires a small bit of management. In the remainder of this article, we will be covering:

    1. How to use the Node.js module.exports object to export code from a file - meaning its functions and/or data can be used by other files/modules.
    2. How to use the Node.js require() function to import functions and/or data from another module.

************************************************************
2. Implementations of Modules in JavaScript: Node.js vs ES6
************************************************************
Before we dive in, it should be noted that there are multiple ways of implementing modules depending on the runtime environment in which your code is executed. In JavaScript, there are two runtime environments and each has a preferred module implementation:

    1. The Node runtime environment and the module.exports and require() syntax.
    2. The browser’s runtime environment and the ES6 import/export syntax.

This article will focus on using the module.exports and require() syntax in the Node runtime environment. For more information, you can read the two articles linked below

    1. Implementing modules using ES6 Syntax
    2. Introduction to JavaScript Runtime Environments

*******************************
3. Implementing Modules in Node
*******************************
Every JavaScript file that runs in a Node environment is treated as a distinct module. The functions and data defined within each module can be used by any other module, as long as those resources are properly exported and imported.

Suppose you wanted to write a simple program that would display the freezing point and boiling point of water in Fahrenheit. However, you only know the values in Celsius to be 0 (freezing) and 100 (boiling). Luckily you happen to know how to convert Celsius to Fahrenheit!

Such a program might look like this:

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

    1. At the top of the file, the function celsiusToFahrenheit() is declared. When given a value in Celsius, it will return the value converted to Fahrenheit. Both input and output will be a number.
    2. Below, freezingPointC and boilingPointC are assigned the known values 0 and 100, respectively.
    3. Using these values and the function celsiusToFahrenheit(), the additional values freezingPointF and boilingPointF are calculated.
    4. Lastly, these values are printed to the console.

Executing this file using Node would look something like this:
***************************************************
***************************************************
$ node water-limits.js
The freezing point of water in Fahrenheit is 32
The boiling point of water in Fahrenheit is 212
***************************************************
***************************************************

Now, you decide to write a second program. In this program, the user can input any temperature value in Celsius and the program responds by printing the input temperature converted to Fahrenheit.

For example, you might want to be able to run such a program and see a response like so:
*********************************************
*********************************************
$ node celsius-to-fahrenheit.js 100
100 degrees Celsius = 212 degrees Fahrenheit
*********************************************
*********************************************

The JavaScript below would do just that:

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

    1. At the top of the file, the function celsiusToFahrenheit() is declared. When given a value in Celsius, it will return the value converted to Fahrenheit. Both input and output will be a number.
    2. On the next line of code, celsiusInput is assigned process.argv[2]. When a program is executed in the Node environment, process.argv is an array holding the arguments provided. In this case, it looks like ['node', 'celsius-to-fahrenheit.js', '100']. So, process.argv[2] returns 100.
    3. Using this value and the function celsiusToFahrenheit(), the additional value fahrenheitValue is calculated.
    4. Lastly, a message is printed to the console displaying this data.

Notice anything similar between the two programs, water-limits.js and celsius-to-fahrenheit.js? Both programs implement the function celsiusToFahrenheit()! Not only did we write this function twice, but if we ever need to make changes to the function we’ll also have to make those changes in two places.

Creating a module that exports a celsiusToFahrenheit() function that can be used by both of these programs would solve this repetitive code problem.

*****************
4. module.exports
*****************
To create a module, you simply have to create a new file where the functions can be declared. Then, to make these functions available to other files, add them as properties to the built-in module.exports object:

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

    1. At the top of the new file, converters.js, the function celsiusToFahrenheit() is declared.
    2. On the next line of code, the first approach for exporting a function from a module is shown. In this case, the already-defined function celsiusToFahrenheit() is assigned to module.exports.celsiusToFahrenheit.
    3. Below, an alternative approach for exporting a function from a module is shown. In this second case, a new function expression is declared and assigned to module.exports.fahrenheitToCelsius. This new method is designed to convert Fahrenheit values back to Celsius.
    4. Both approaches successfully store a function within the module.exports object.

module.exports is an object that is built-in to the Node.js runtime environment. Other files can now import this object, and make use of these two functions, with another feature that is built-in to the Node.js runtime environment: the require() function.

************
5. require()
************
The require() function accepts a string as an argument. That string provides the file path to the module you would like to import.

Let’s update water-limits.js such that it uses require() to import the .celsiusToFahrenheit() method from the module.exports object within converters.js:

/* water-limits.js */
const converters = require('./converters.js');

const freezingPointC2 = 0;
const boilingPointC2 = 100;

const freezingPointF2 = converters.celsiusToFahrenheit(freezingPointC);
const boilingPointF2 = converters.celsiusToFahrenheit(boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);
/*
In this case, ./ is a relative path indicating that converters.js is stored in the same folder as water-limits.js. When you use require(), the entire module.exports object is returned and stored in the variable converters. This means that both the .celsiusToFahrenheit() and .fahrenheitToCelsius() methods can be used in this program!

*****************************************************************
6. Using Object Destructuring to be more Selective With require()
*****************************************************************
In many cases, modules will export a large number of functions but only one or two of them are needed. You can use object destructuring to extract only the needed functions.

Let’s update celsius-to-fahrenheit.js and only extract the .celsiusToFahrenheit() method, leaving .fahrenheitToCelsius() behind:

/* celsius-to-fahrenheit.js */
const { celsiusToFahrenheit } = require('./converters.js');

const celsiusInput2 = process.argv[2];
const fahrenheitValue2 = celsiusToFahrenheit(celsiusInput);

console.log(
  `${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`
);
/*
With this approach, the remainder of the program works the same way but the program avoids importing a function it does not need.
*/
