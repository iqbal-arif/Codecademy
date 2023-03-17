/*The For Loop

Instead of writing out the same code over and over, loops allow us to tell computers to repeat a given block of code on its own. One way to give computers these instructions is with a for loop.

The typical for loop includes an iterator variable that usually appears in all three expressions. The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration. Iterator variables can have any name, but it’s best practice to use a descriptive variable name.

A for loop contains three expressions separated by ; inside the parentheses:

    an initialization starts the loop and can also be used to declare the iterator variable.
    a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
    an iteration statement is used to update the iterator variable on each loop.

The for loop syntax looks like this:
*/
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
/*
In this example, the output would be the following:

0
1
2
3

Let’s break down the example:

    The initialization is let counter = 0, so the loop will start counting at 0.
    The stopping condition is counter < 4, meaning the loop will run as long as the iterator variable, counter, is less than 4.
    The iteration statement is counter++. This means after each loop, the value of counter will increase by 1. For the first iteration counter will equal 0, for the second iteration counter will equal 1, and so on.
    The code block is inside of the curly braces, console.log(counter), will execute until the condition evaluates to false. The condition will be false when counter is greater than or equal to 4 — the point that the condition becomes false is sometimes called the stop condition.

This for loop makes it possible to write 0, 1, 2, and 3 programmatically.
*/

/*
1.Now, make your own! Create a program that loops from 5 to 10 and logs each number to the console.

*/
for (let loop = 5; loop < 11; loop++) {
  console.log(loop);
}

/*
2.Make a for loop that loops backwards printing 3 to 0 to the console. Use the >= comparison operator in your stopping condition and the -- operator in your iteration statement.

*/
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}

/*
3. Write a for loop that iterates through our vacationSpots array using i as the iterator variable.

Inside the block of the for loop, use console.log() to log each element in the vacationSpots array after the string 'I would love to visit '. For example, the first round of the loop should print 'I would love to visit Bali' to the console.
*/
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below

for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`);
}

// *******Nested Loop Example**********/
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}

// 1. Make a variable called bobsFollowers and set it equal to an array with four strings representing the names of Bob’s friends.
const bobsFollowers = ['Jackie', 'John', 'Jane', 'Justine'];

// 2. Make a variable called tinasFollowers and set it equal to an array with three strings representing the names of Tina’s friends. Make exactly two of these the same as two of the friends in the bobsFollowers array.
const tinasFollowers = ['Jackie', 'Jane', 'Rose'];

//3. Create a third variable named mutualFollowers and set it to an empty array
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push();
    }
  }
}
console.log(mutualFollowers);
