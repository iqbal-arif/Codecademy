/*********************Nested For Loop*****************/

for (let outer = 0; outer < 2; outer += 1) {
  for (let inner = 0; inner < 3; inner += 1) {
    console.log(`${outer}-${inner}`);
  }
}
/*
Output:
0-0
0-1
0-2
1-0
1-1
1-2

A nested for loop is when a for loop runs inside another for loop.

The inner loop will run all its iterations for each iteration of the outer loop.
*/

/*********************Break Keyword*****************/
for (let i = 0; i < 99; i += 1) {
  if (i > 5) {
    break;
  }
  console.log(i);
}

/*
// Output: 0 1 2 3 4 5

Within a loop, the break keyword may be used to exit the loop immediately, continuing execution after the loop body.

Here, the break keyword is used to exit the loop when i is greater than 5.

*/

/*********************Reverse Loop*****************/
const items = ['apricot', 'banana', 'cherry'];

for (let i = items.length - 1; i >= 0; i -= 1) {
  console.log(`${i}. ${items[i]}`);
}

/*
// Prints: 2. cherry
// Prints: 1. banana
// Prints: 0. apricot




A for loop can iterate “in reverse” by initializing the loop variable to the starting value, testing for when the variable hits the ending value, and decrementing (subtracting from) the loop variable at each iteration.
*/

/*********************Do…While Statement*****************/
x = 0;
i = 0;

do {
  x = x + i;
  console.log(x);
  i++;
} while (i < 5);

y = 0;
j = 0;

do {
  y = y + i + j;
  console.log(y);
  j++;
} while (j < 5);

/*
// Prints: 0 1 3 6 10

A do...while statement creates a loop that executes a block of code once, checks if a condition is true, and then repeats the loop as long as the condition is true. They are used when you want the code to always execute at least once. The loop ends when the condition evaluates to false.

*/

/*
Loops

A loop is a programming tool that is used to repeat a set of instructions. Iterate is a generic term that means “to repeat” in the context of loops. A loop will continue to iterate until a specified condition, commonly known as a stopping condition, is met.



*/
