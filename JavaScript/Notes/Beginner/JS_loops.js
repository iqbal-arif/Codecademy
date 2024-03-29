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
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers);

/*********The While Loop***********/

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++) {
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

//    1. Below the cards array, declare a variable, currentCard, with the let keyword but don’t assign it a value.

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below

let currentCard;

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

/*********Do...While Statements***********/
/*
In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run. This is where the do...while statement comes in.

A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met. The syntax for a do...while statement looks like this:
*/
let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);
/*
In this example, the code block makes changes to the countString variable by appending the string form of the i variable to it. First, the code block after the do keyword is executed once. Then the condition is evaluated. If the condition evaluates to true, the block will execute again. The looping stops when the condition evaluates to false.

Note that the while and do...while loop are different! Unlike the while loop, do...while will run at least once whether or not the condition evaluates to true.
*/
const firstMessage = 'I will print!';
const secondMessage = 'I will not print!';

// A do while with a stopping condition that evaluates to false
do {
  console.log(firstMessage);
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false) {
  console.log(secondMessage);
}

// simulate part of the cake-baking process.

const cupsOfSugarNeeded = 9;
let cupsAdded = 0;

do {
  cupsAdded = cupsAdded;
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);

console.log(cupsAdded);

/*********The break Keyword********/
/*
Imagine we’re looking to adopt a dog. We plan to go to the shelter every day for a year and then give up. But what if we meet our dream dog on day 65? We don’t want to keep going to the shelter for the next 300 days just because our original plan was to go for a whole year. In our code, when we want to stop a loop from continuing to execute even though the original stopping condition we wrote for our loop hasn’t been met, we can use the keyword break.

The break keyword allows programs to “break” out of the loop from within the loop’s block.

Let’s check out the syntax of a break keyword:
*/

for (let i = 0; i < 99; i++) {
  if (i > 2) {
    break;
  }
  console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');
/*
This is the output for the above code:

Banana.
Banana.
Banana.
Orange you glad I broke out the loop!

break statements can be especially helpful when we’re looping through large data structures! With breaks, we can add test conditions besides the stopping condition, and exit the loop when they’re met.*/

const rapperArray = ["Lil' Kim", 'Jay-Z', 'Notorious B.I.G.', 'Tupac'];

// Write your code below

for (let i = 0; i < rapperArray.length; i++) {
  if (rapperArray[i] === 'Notorious B.I.G.') {
    console.log(rapperArray[i]);

    break;
  }
}
console.log("And if you don't know, now you know.");

/*
Review

Great job! In this lesson, we learned how to write cleaner code with loops. You now know:

    Loops perform repetitive actions so we don’t have to code that process manually every time.
    How to write for loops with an iterator variable that increments or decrements
    How to use a for loop to iterate through an array
    A nested for loop is a loop inside another loop
    while loops allow for different types of stopping conditions
    Stopping conditions are crucial for avoiding infinite loops.
    do...while loops run code at least once— only checking the stopping condition after the first execution
    The break keyword allows programs to leave a loop during the execution of its block

*/
