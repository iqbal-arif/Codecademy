/***********************************************/
/***************TRUTH OF FALSY*****************/
/***********************************************/
/*
It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, truthyOrFalsy(), that takes in any value and returns true if that value is truthy and false if that value is falsy.
*/

// Write your function here:

const truthyOrFalsy = (value) => (value ? true : false);

// Uncomment the line below when you're ready to try out your function
console.log(truthyOrFalsy(null)); // Should print false
console.log(truthyOrFalsy(undefined));
console.log(truthyOrFalsy(0));
//console.log(truthyOrFalsy(-0));
//console.log(truthyOrFalsy(NaN));
console.log(truthyOrFalsy(' '));
console.log(truthyOrFalsy(false));
console.log(truthyOrFalsy('This string'));
//console.log(truthyOrFalsy("THIS")); // Should print false

// We encourage you to add more function calls of your own to test your code!
