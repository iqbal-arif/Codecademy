/*
Create a function numberDigits() that takes the variable x as its only parameter.

If the variable x is between 0 and 9, return the string 'One digit: N', where N is the value of x. For example, numberDigits(5) would return:

'One digit: 5'

If the variable x is between 10 and 99, return the string 'Two digits: N', where N is the value of x. For example, numberDigits(12) would output:

'Two digits: 12'

Any other value of x, including negative numbers, return the string 'The number is: N', where N is the value of x. For example, numberDigits(-202) would output:

'The number is: -202'

Feel free to test out your code below the function definition.

*/
const numberDigits = (num) => {
  const digitCount = num.toString();
  const numIncludes = digitCount.includes('-');

  if (numIncludes === true || digitCount === 3) {
    return `The number is : ${num}`;
  } else if (digitCount.length === 1) {
    return `One digit: ${num}`;
  } else if (digitCount.length === 2) {
    return `Two digits: ${num}`;
  }
};
y = -235;
newNum = y.toString();
const r = newNum.includes('-');
// const numArray = [];
// numArray.push(y);
console.log(r);

console.log(numberDigits(1));
