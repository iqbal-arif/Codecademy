/*
1. Here we have a function, addTwo(), that adds 2 to whatever is passed into it. Below that, we’ve created what will be a higher-order function, checkConsistentOutput(). The purpose of the higher-order function will be to check the work of addTwo(). Let’s get started!

To begin, inside the body of checkConsistentOutput(), declare two variables: checkA and checkB:

    checkA stores the sum val plus 2.
    checkB stores the invocation of the func callback, with val as the argument.

2. Next, below the variables, write a conditional statement that checks if the value of checkA is equal to the value checkB. If true, return the result of the callback function. If false, return the string 'inconsistent results'.

3. Finally, using console.log(), log the invocation of checkConsistentOutput() with two arguments: the addTwo() function and any number.

*/

const addTwo = (num) => {
  return num + 2;
};

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);
  if (checkA === checkB) {
    return checkB;
  } else {
    return 'inconsistent results';
  }
};

console.log(checkConsistentOutput(addTwo, 2));
