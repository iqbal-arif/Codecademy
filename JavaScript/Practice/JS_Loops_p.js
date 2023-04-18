/*********************Nested For Loop*****************/

for (let outer = 0; outer < 2; outer += 1) {
  for (let inner = 0; inner < 3; inner += 1) {
    console.log(`${outer}-${inner}`);
  }
}
/*
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
Within a loop, the break keyword may be used to exit the loop immediately, continuing execution after the loop body.

Here, the break keyword is used to exit the loop when i is greater than 5.

*/

/*********************Break Keyword*****************/
