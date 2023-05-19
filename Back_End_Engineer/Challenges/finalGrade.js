/*
finalGrade()
**************************
*******Instructions*******
**************************
1.

Write a function, finalGrade(). It should:

    take three arguments of type number
    find the average of those three numbers
    return the letter grade (as a string) that the average corresponds to
    return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100

0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A'

*/
// Write your function here:
let num1, num2, num3;
function finalGrade(num1, num2, num3) {
  let avg = (num1 + num2 + num3) / 3;
  if (
    num1 < 0 ||
    num1 > 100 ||
    num2 < 0 ||
    num2 > 100 ||
    num3 < 0 ||
    num3 > 100
  ) {
    return `You have entered an invalid grade.`;
  } else if (avg > 0 && avg <= 59) {
    return 'F';
  } else if (avg >= 60 && avg <= 69) {
    return 'D';
  } else if (avg >= 70 && avg <= 79) {
    return 'C';
  } else if (avg >= 80 && avg <= 89) {
    return 'B';
  } else if (avg >= 90 && avg <= 100) {
    return 'A';
  }
}

// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 95)); // Should print 'A'
console.log(finalGrade(200, 102, -2)); // Should print 'A'

// We encourage you to add more function calls of your own to test your code!
