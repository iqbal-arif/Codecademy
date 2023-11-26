/*
******************
1. reverseArray()
******************

Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order
*/
// Write your code here:

function reverseArray(item) {
  let newArray = [];
  for (let i = item.length - 1; i >= 0; i--) newArray.push(item[i]);
  return newArray;
}

// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.', 'make', 'all', 'will', 'This'];

console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];
