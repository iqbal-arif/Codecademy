/*
Truthy and Falsy

The list of falsy values includes:

    0
    Empty strings like "" or ''
    null which represent when there is no value at all
    undefined which represent when a declared variable lacks a value
    NaN, or Not a Number

Here’s an example with numbers:

let numberOfApples = 0;
 
if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}
 
// Prints 'No apples left!'

The condition evaluates to false because the value of the numberOfApples is 0. Since 0 is a falsy value, the code block in the else statement will run.
*/

let wordCount = 0;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

let favoritePhrase = 'Hello World!';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
