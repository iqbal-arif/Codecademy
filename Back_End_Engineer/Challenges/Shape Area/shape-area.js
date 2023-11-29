/*****************************/
/******** SHAPE AREA ********/
/****************************/
/*
Complete the shape-area.js module. Your module must declare and export two functions with the following signatures:

    circleArea(radiusLength).
    squareArea(sideLength).

    A) Store the entire module.exports object in the variable areaFunctions.
    B) Use object destructuring to extract the .circleArea() and .squareArea() methods into their own variables, circleArea and squareArea.

Next, call the circleArea() function with the provided variable radius as an input. Assign the returned value to the variable areaOfCircle.

Then, call the squareArea() function with the provided variable sideLength as an input. Assign the returned value to the variable areaOfSquare.


*/

/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below

function circleArea(radiusLength) {
  return radiusLength * radiusLength * PI;
}

module.exports.circleArea = circleArea;

module.exports.squareArea = function (sideLength) {
  return sideLength * sideLength;
};

/* app.js */

const radius = 5;
const sideLength = 10;

// Option 1: import the entire shape-area.js module here.

const areaFunctions = require('./shape-area.js');

// Option 2: import circleArea and squareArea with object destructuring

const { circleArea, squareArea } = require('./shape-area.js');

// use the imported .circleArea() and .squareArea() methods here

const areaOfCircle = circleArea(radius);

const areaOfSquare = squareArea(sideLength);

console.log(areaOfCircle);
console.log(areaOfSquare);
