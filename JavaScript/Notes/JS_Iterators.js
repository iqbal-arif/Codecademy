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

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below

fruits.forEach((fruit = (fruit) => console.log(`I want to eat a ${fruit}`)));
