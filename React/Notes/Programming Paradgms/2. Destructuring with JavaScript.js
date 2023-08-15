/*
1. Destructuring with JavaScript
********************************
Learn a new syntax for handling objects and arrays in JavaScript.

2. What is Destructuring?
*************************
Destructuring, or destructuring assignment, is a JavaScript feature that makes it easier to extract data from arrays and objects, introduced in the ES6 version of JavaScript.

At this point, we assume you already know how to extract data from arrays and objects. That means that you don’t NEED destructuring: destructuring is a form of syntactic sugar, which means that it is an easier way to write certain expressions, usually by being shorter and clearer than other forms. Even if you don’t use it yourself, you’ll probably see it in someone else’s code, so it’s valuable to understand.

3. Destructuring Arrays
***********************

Data structures like arrays and objects can be very useful for storing large amounts of data. The process of converting individual elements of an array into individual variables can be tedious:
*/
let cars = ["ferrari", "tesla", "cadillac"];

/*
If we wanted to access these cars individually and assign them to variables we could do this:
*/
let cars = ["ferrari", "tesla", "cadillac"];
let car1 = cars[0];
let car2 = cars[1];
let car3 = cars[2];
console.log(car1, car2, car3); // Prints: ferrari tesla cadillac

/*
We can use destructuring to shorten our code and make it more concise:
*/
let cars = ["ferrari", "tesla", "cadillac"];
let [car1, car2, car3] = cars;
console.log(car1, car2, car3); // Prints: ferrari tesla cadillac

/*
In the code above, we created three variables (car1, car2, car3) that correspond to the three elements in the cars array. Each variable name in the new array will be assigned the value of the corresponding element. As you can see, we are able to achieve what we did previously with three lines of code, in one! Imagine how many lines of code we would save working with an array with 10 elements!

Let’s practice:
*/
