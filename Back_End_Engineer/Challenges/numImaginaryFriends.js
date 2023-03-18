/***********************************************************/
/***************NUMBER OF IMAGINARY FRIENDS*****************/
/***********************************************************/
/*
A person’s number of imaginary friends are always 25% (or 1/4) of their total friends.

Write a function, numImaginaryFriends(), that takes in the total number of friends a person has and returns the number of imaginary friends they have.

Since friends can only come in whole numbers, be sure to round your result up to the nearest whole number before returning it.

The JavaScript Math.ceil() function will come in handy. 
*/
// Write your function here:
let totalNum = 0.25;
const numImaginaryFriends = (num) => Math.ceil(totalNum * num);

// Uncomment the lines below when you're ready to try out your function
console.log(numImaginaryFriends(2.5)); // Should print 5
console.log(numImaginaryFriends(10)); // Should print 3 (2.5 rounded up!)

// We encourage you to add more function calls of your own to test your code!
