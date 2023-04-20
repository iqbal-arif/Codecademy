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
The .forEach() Method
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
The .map() Method
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
The .filter() Method
***
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
