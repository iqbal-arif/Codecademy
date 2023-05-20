/*
Create a function isEven() that takes a number as its only parameter. The function should return true if the number is even and false if the number is odd.
*/

const isEven = (num) => {
  return Number.isInteger(num / 2) ? true : false;
};

console.log(isEven(206));
