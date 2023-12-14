/*
Write a function factorial() that takes a number as an argument and returns the factorial of the number.

Example:

factorial(6); 
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 

Assume only positive numbers will be given as an argument for the factorial() function.
Factorial Formula
n! = n × (n−1)!
*/
const factorialMinusNum = (x) => {
  let multipleX = 1;
  let i = x;

  do {
    multipleX = multipleX * i;
    i--;
  } while (i > 0);
  return multipleX;
};

const factorial = (x) => {
  let absX = Math.abs(x);
  let fM1 = absX - 1;

  if (fM1 === 0) {
    return 1;
  } else {
    absX = absX * factorialMinusNum(fM1);
    return absX;
  }
};

console.log(factorial(1));
