/*
reportingForDuty()

**************************
*******Instructions*******
**************************
1.

Write a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a string in the following format: ‘rank lastName reporting for duty!’

reportingForDuty('Private', 'Fido') 
// Should return 'Private Fido reporting for duty!'
*/
// Write your function here:
let rank;
let lastName;
const reportingForDuty = (rank, lastName) =>
  `${rank} ${lastName} reporting for duty!`;

// Uncomment the line below when you're ready to try out your function
console.log(reportingForDuty('Private', 'Fido')); // Should return 'Private Fido reporting for duty!'

// We encourage you to add more function calls of your own to test your code!
