/*
Introduction to Iterators
*************************
Imagine you had a grocery list and you wanted to know what each item on the list was. You’d have to scan through each row and check for the item. This common task is similar to what we have to do when we want to iterate over, or loop through, an array. One tool at our disposal is the for loop. However, we also have access to built-in array methods which make looping easier.

The built-in JavaScript array methods that help us iterate are called iteration methods, at times referred to as iterators. Iterators are methods called on arrays to manipulate elements and return values.

In this lesson, you will learn the syntax for these methods, their return values, how to use the documentation to understand them, and how to choose the right iterator method for a given task.

*/
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach((artist) => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map((number) => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter((thing) => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

/*
2. The .forEach() Method
*********************
*********************

The first iteration method that we’re going to learn is .forEach(). Aptly named, .forEach() will execute the same code for each element of an array.
Diagram outlining the parts of an array iterator including the array identifier, the section that is the iterator, and the callback function
*/
const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];

groceries.forEach(function (groceryItem) {
  console.log(`- ${groceryItem}`);
});

/*
Identifier are : groceries
Array are : ['brown sugar', 'salt', 'cranberries', 'walnuts'];
Callback function: function(groceryItem)
/*
The code above will log a nicely formatted list of the groceries to the console. Let’s explore the syntax of invoking .forEach().

    groceries.forEach() calls the forEach method on the groceries array.
    .forEach() takes an argument of callback function. Remember, a callback function is a function passed as an argument into another function.
    .forEach() loops through the array and executes the callback function for each element. During each execution, the current element is passed as an argument to the callback function.
    The return value for .forEach() will always be undefined.

Another way to pass a callback for .forEach() is to use arrow function syntax.
*/
groceries.forEach((groceryItem) => console.log(groceryItem));
/*
We can also define a function beforehand to be used as the callback function.
*/
function printGrocery(element) {
  console.log(element);
}

groceries.forEach(printGrocery);
/*
The above example uses a function declaration but you can also use a function expression or arrow function as well.

All three code snippets do the same thing. In each array iteration method, we can use any of the three examples to supply a callback function as an argument to the iterator. It’s good to be aware of the different ways to pass in callback functions as arguments in iterators because developers have different stylistic preferences. Nonetheless, due to the strong adoption of ES6, we will be using arrow function syntax in the later exercises.
*/
/************PRACTICE***************/
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below

fruits.forEach((fruit = (fruit) => console.log(`I want to eat a ${fruit}`)));

/*
3. The .map() Method
*****************
*****************
The second iterator we’re going to cover is .map(). When .map() is called on an array, it takes an argument of a callback function and returns a new array! Take a look at an example of calling .map():
*/
const numbers2 = [1, 2, 3, 4, 5];

const bigNumbers = numbers2.map((number) => {
  return number * 10;
});
/*
.map() works in a similar manner to .forEach()— the major difference is that .map() returns a new array.

In the example above:

    1. numbers is an array of numbers.
    2. bigNumbers will store the return value of calling .map() on numbers.
    3. numbers.map will iterate through each element in the numbers array and pass the element into the callback function.
    4. return number * 10 is the code we wish to execute upon each element in the array. This will save each value from the numbers array, multiplied by 10, to a new array.

If we take a look at numbers and bigNumbers:
*/
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]
/*
Notice that the elements in numbers were not altered and bigNumbers is a new array.
*/

/************PRACTICE***************/

const animals = [
  'Hen',
  'elephant',
  'llama',
  'leopard',
  'ostrich',
  'Whale',
  'octopus',
  'rabbit',
  'lion',
  'dog',
];

// Create the secretMessage array below

const animalsArray = [
  'Hen',
  'elephant',
  'llama',
  'leopard',
  'ostrich',
  'Whale',
  'octopus',
  'rabbit',
  'lion',
  'dog',
];

// Create the secretMessage array below
const secretMessage = animalsArray.map((animal) => {
  return animal.slice(0, 1);
});

console.log(secretMessage.join(''));

const bigNumbers2 = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

const smallNumbers = bigNumbers2.map((bInt) => {
  return bInt / 100;
});

/*
4. The .filter() Method
***********************
Another useful iterator method is .filter(). Like .map(), .filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array. Take a look at the following example:
*/
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];

const shortWords = words.filter((word) => {
  return word.length < 6;
});
/*
    1. words is an array that contains string elements.
    2. const shortWords = declares a new variable that will store the returned array from invoking .filter().
    3. The callback function is an arrow function that has a single parameter, word. Each element in the words array will be passed to this function as an argument.
    4. word.length < 6; is the condition in the callback function. Any word from the words array that has fewer than 6 characters will be added to the shortWords array.

Let’s also check the values of words and shortWords:
*/
console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']
/*
Observe how words was not mutated, i.e. changed, and shortWords is a new array.
*/

/************PRACTICE***************/

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

const smallNumbers2 = randomNumbers.filter((small) => {
  return small < 250;
});
const favoriteWords = [
  'nostalgia',
  'hyperbole',
  'fervent',
  'esoteric',
  'serene',
];

// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter((fWord) => {
  return fWord.length > 7;
});

/*
5. The .findIndex() Method
**************************

We sometimes want to find the location of an element in an array. That’s where the .findIndex() method comes in! Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.
*/
const jumbledNums = [123, 25, 78, 5, 9];

const lessThanTen = jumbledNums.findIndex((num) => {
  return num < 10;
});

/*
    1. jumbledNums is an array that contains elements that are numbers.
    2. const lessThanTen = declares a new variable that stores the returned index number from invoking .findIndex().
    3. The callback function is an arrow function that has a single parameter, num. Each element in the jumbledNums array will be passed to this function as an argument.
    4. num < 10; is the condition that elements are checked against. .findIndex() will return the index of the first element which evaluates to true for that condition.

Let’s take a look at what lessThanTen evaluates to:
*/
console.log(lessThanTen); // Output: 3
/*
If we check what element has index of 3:
*/
console.log(jumbledNums[3]); // Output: 5
/*
Great, the element in index 3 is the number 5. This makes sense since 5 is the first element that is less than 10.

If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.
*/
const greaterThan1000 = jumbledNums.findIndex((num) => {
  return num > 1000;
});

console.log(greaterThan1000); // Output: -1

/************PRACTICE***************/
/*
Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.
*/

const animals2 = [
  'hippo',
  'tiger',
  'lion',
  'seal',
  'cheetah',
  'monkey',
  'salamander',
  'elephant',
];

const foundAnimal = animals2.findIndex((animal) => {
  return animal === 'elephant';
});

/*
Let’s see if we can find the index of the first animal that starts with the letter 's'.

Call .findIndex() on the animals array and return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.
*/

const startsWithS = animals2.findIndex((animal) => {
  return animal[0] === 's';
});

/*

6. The .reduce() Method
***********************

Another widely used iteration method is .reduce(). The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array. Take a look at the example below:
*/
const numbers4 = [1, 2, 4, 10];

const summedNums = numbers4.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(summedNums); // Output: 17
/*
Here are the values of accumulator and currentValue as we iterate through the numbers array:
Iteration 	accumulator 	currentValue 	return value
  First 	     1 	              2 	          3
  Second 	     3 	              4 	          7
  Third 	     7 	             10 	          17

Now let’s go over the use of .reduce() from the example above:

    1. numbers is an array that contains numbers.
    2. summedNums is a variable that stores the returned value of invoking .reduce() on numbers.
    3. numbers.reduce() calls the .reduce() method on the numbers array and takes in a callback function as argument.
    4. The callback function has two parameters, accumulator and currentValue. The value of accumulator starts off as the value of the first element in the array and the currentValue starts as the second element. To see the value of accumulator and currentValue change, review the chart above.
    5. As .reduce() iterates through the array, the return value of the callback function becomes the accumulator value for the next iteration, currentValue takes on the value of the current element in the looping process.

The .reduce() method can also take an optional second parameter to set an initial value for accumulator (remember, the first argument is the callback function!). For instance:
*/
const numbers3 = [1, 2, 4, 10];

const summedNums2 = numbers3.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100); // <- Second argument for .reduce()

console.log(summedNums2); // Output: 117
/*
Here’s an updated chart that accounts for the second argument of 100:
Iteration # 	accumulator 	currentValue 	return value
First 	            100 	         1 	            101
Second 	            101 	         2 	            103
Third 	            103 	         4 	            107
Fourth 	            107 	        10 	            117
*/

/************PRACTICE***************/
/*1.
Let’s practice calling .reduce() and using console.log() to check the values as .reduce() iterates through the array.

In main.js, there is an array of numbers, newNumbers.

To start, declare a new variable named newSum using the const keyword. Assign to newSum the value of calling .reduce() on newNumbers. You don’t need to provide any arguments to .reduce() yet.

You’ll also see a TypeError: undefined is not a function but we’ll fix that after we add our callback function in the next step!

2.

Provide .reduce with an argument of a callback function. The callback function has two parameters. The first parameter is accumulator and the second parameter is currentValue. Use either a function expression or an arrow function.

3.

To check the value being used as we iterate through the array, add three statements to the function body of the callback:

    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    a return statement that adds accumulator to currentValue.

4.

Log the value of newSum to the console to see the return value of calling .reduce() on newNumbers.

5.

While we have this code set up, let’s also check what happens if you add a second argument to .reduce(). The second argument acts as an initial value for the accumulator.

Add a second argument of 10 to .reduce().
*/
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

/*
7. Array.prototype.some()

The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array. 
*/
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true

/*
8. Array.prototype.every()

The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 
*/
Array.prototype.every();

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true
/*
8. Iterator Documentation
**********************
There are many additional built-in array methods, a complete list of which is on the MDN’s Array iteration methods page.

The documentation for each method contains several sections:

    A short definition.
    A block with the correct syntax for using the method.
    A list of parameters the method accepts or requires.
    The return value of the function.
    An extended description.
    Examples of the method’s use.
    Other additional information.

In the instructions below, there are some errors in the code. Use the documentation for a given method to determine the error or fill in a blank to make the code run correctly.
*/

/************PRACTICE***************/

/*
1.

In the code editor, there is an array called words. We want to create a new array of interesting words. The first thing we want to do is check if there are words that are fewer than 6 characters long. There is something missing in the words.some() method call. Fix this method so that true is printed to the console. 

2.

The .some() method returned true, which means there are some words in the array that are shorter than six characters. Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords, declared with const.

We’ve used .filter() in a previous exercise,

3.

In the last line of main.js, there is this code:

// console.log(interestingWords.every(word =>        ));

Complete the code between the parentheses to check if every element has more than 5 characters.

Make sure to uncomment (delete the // before) the last line of the program before you run the code. 
*/

const words2 = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(
  words2.some((word) => {
    return word.length < 6;
  })
);

// Use filter to create a new array

const interestingWords = words2.filter((word) => {
  return word.length > 5;
});

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
);

/************PRACTICE***************/

/*
1.

Replace the word method in the first method call with a method that will do something to each of the values in the array and return undefined.

2.

In the second method call, replace the word method with a method that will return a new array with only those elements longer than 7 characters.
Checkpoint 3 Passed

3.

In the third method call, replace the word method with a method that accepts an array containing multiple values and returns a single value.

4.

In the fourth method call, replace the word method with a method that will return a new array of numbers returned from the function.

5.

In the fifth method call, replace the word method with a method that will return a boolean value.
*/

const cities = [
  'Orlando',
  'Dubai',
  'Edinburgh',
  'Chennai',
  'Accra',
  'Denver',
  'Eskisehir',
  'Medellin',
  'Yokohama',
];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach((city) => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter((city) => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0];
}, 'C');

console.log(word);

// Choose a method that will return a new array
const smallerNums = nums.map((num) => num - 5);

// Choose a method that will return a boolean value
nums.every((num) => num < 0);

/*
Review
******
******
Awesome job on clearing the iterators lesson! You have learned a number of useful methods in this lesson as well as how to use the JavaScript documentation from the Mozilla Developer Network to discover and understand additional methods. Let’s review!

    1. .forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.

    2. .map() executes the same code on every element in an array and returns a new array with the updated elements.

    3. .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.

    4. .findIndex() returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.

    5. .reduce() iterates through an array and takes the values of the elements and returns a single value.

    6. All iterator methods take a callback function, which can be a pre-defined function, a function expression, or an arrow function.

    7. You can visit the Mozilla Developer Network to learn more about iterator methods (and all other parts of JavaScript!).
*/
