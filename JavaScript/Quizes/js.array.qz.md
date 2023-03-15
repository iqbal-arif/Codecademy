Q1. What is the purpose of an array?
A1. To store data in an organized fashion.

Q2. What is the value of topPriority?

```
const errands = ['Go to the bank', 'Pick up dry cleaning', 'Go grocery shopping'];

const topPriority = errands.indexOf('Pick up dry cleaning');
```

A2: 1
Correct! .indexOf() returns the index of the element in the array, given that the element in the array.

Q3: What will happen after running the following code?

```
const countries = ['Japan', 'Denmark', 'Mexico', 'Morocco'];
countries.shift();
console.log(countries);
countries =  ['England', 'Mozambique', 'Cambodia', 'Peru'];
console.log(countries);
```

A3: One array will be logged to the console followed by an error message.
['Denmark', 'Mexico', 'Morocco'];
TypeError: Assignment to constant variable

Correct! You can mutate an array saved to a variable declared with const but you cannot reassign the variable.

Q4: What will be logged to the console when we run the code below?

```
const myArray = ['item 0', 'item 1', 'item 2'];

myArray.push('item 3');
myArray.pop();

console.log(myArray);
```

A4: ['item 0', 'item 1', 'item 2'];
Correct! .push('item 3') adds 'item 3' to the end of myArray and .pop() removes the last element.

A5: Which of the methods below does NOT change the array it is called on?
A5: .slice() ; Correct! .slice() will not mutate the array it was called on.

Q6: What will be printed to the console?

```
const fruits = ['Apples', 'Oranges', 'Pears', 'Mangos'];
fruits[2] = 'Bananas';
console.log(fruits);
```

A6: ['Apples', 'Oranges', 'Bananas', 'Mangos'];

Q7: What is the correct syntax for an array?
A7: let myArray = ["Rappel into a cave", "Take a falconry class", "Learn to juggle"];
Nice work! Array literals are denoted by [] and the elements are separated by commas.

Q8: How can you find how many elements are within an array?
A8: myArray.length
You got it! You can access the .length property of an array to get the number of elements in the array.

Q9: What will be logged to the console when we run the code below?

```
const cities = ['Chicago', 'San Francisco', 'New York'];

console.log(cities[3]);
```

A9: undefined
Perfect! There’s no element currently in index 3, so cities[3] returns undefined.

Q10: How could you access the second item, ‘Lion’, in the following code block?

```
const animalArray = ['Sloth', 'Lion', 'Chipmunk'];
```

A10: animalArray[1];
Way to go! Lion is in index 1 of animalArray
