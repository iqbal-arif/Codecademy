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
