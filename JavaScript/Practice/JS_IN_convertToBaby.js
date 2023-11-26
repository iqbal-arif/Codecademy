/*
******************
1. convertToBaby()
******************

Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.
*/

// Write your code here:

function convertToBaby(babyStr) {
  let babyArray = [];
  for (let i = 0; i < babyStr.length; i++) {
    babyArray.push(`baby ${babyStr[i]}`);
  }
  return babyArray;
}

// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals));
