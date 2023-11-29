/*****************************/
/******** SHAPE AREA ********/
/****************************/

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
