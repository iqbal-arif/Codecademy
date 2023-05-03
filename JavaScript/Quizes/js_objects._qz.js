/*
Q1: What is a factory function?
A1: A function that returns an object.
*/

/*
Q2: How can we add a property to the object below?
*/
let bikes = {
  schwinn: 'blue',
  trek: 'black',
};

// A2:
bikes['specialized'] = 'red';
// Good job! We could accomplish the same thing using dot notation: bikes.specialized = 'red';

/*
Q3: Which line of code would NOT print the value saved to the _num key in the tempObj object.
*/
let tempObj = {
  _num: 22,
  get num() {
    return this._num;
  },
};
// A3:
console.log(tempObj.num());
// Correct! We wrote a getter. This line is looking for a regular method called .num() and would cause an error

/*
Q4: What should we add to the empty .withDiscount() method to return the cost of the meatballs object with a two dollar discount?
*/
let meatballs = {
  cost: 5,
  withDiscount() {},
};

// A4:
return this.cost - 2;

/*
Q5: Which of the following is an example of destructured assignment?
*/
const myDog = {
  name: 'Tadpole',
  breed: 'mutt',
  color: 'tan',
  weight: 32,
};
// A5:
let { name } = myDog;

//Correct! Using ES6’s destructured assignment, we can use this syntax to create a variable name with a value of myDog‘s .name property

/*
Q6: How can we call the method in the code below?
*/
let myObj = {
  sayHello() {
    return 'Hello there!';
  },
};
//A6:
myObj.sayHello();

/*
Which line of code would NOT print the value saved to the _num key in the tempObj object.
*/
let tempObj2 = {
  _num: 22,
  get num() {
    return this._num;
  },
};

/*
Q7: Which of the following statements is correct?
A7: Objects store unordered data of amy type as key-value pairs.
*/

/*
Q8: What will the following code output?
*/
const car = {
  numDoors: 4,
  isDirty: true,
  color: 'red',
};

for (let key in car) {
  console.log(key);
}

// A8: numDoors, isDirty, color
// Correct! This code will iterate through the car object and print each key.

/*
Q9: What are the keys in this object?
*/
let apartment = {
  coffeeMaker: 'Aeropress',
  ceilingFan: true,
  books: 114,
};

// A9: coffeeMaker, ceilingFan, books

/*
Q10: Which is the correct syntax for creating an object literal?
A10
*/
let myObjSample = {
  greeting: 'hello',
};

/*
Q11: What is a method?
A11: A method is property with a function as its value. 
*/

/*
Q12: Which of the following Object methods can be used to copy all of the properties of an object into a new object?
A12: Object.assign()
*/

/*
Q13: Given the following code, which expression will evaluate to apples?
*/
const refrigerator = {
  dairy: ['cheese', 'milk', 'sour cream'],
  temperature: 35,
  'produce drawer': {
    vegetables: ['lettuce', 'broccoli', 'peas'],
    fruit: ['apples', 'berries', 'grapes'],
  },
};
// A13: Correct! refrigerator['produce drawer'] will evaluate to the object containing the fruit key which holds an array. At the 0th index of that array is 'apples'

refrigerator['produce drawer'].fruit[0];

/*
Q14: What’s wrong with the setter method in the example below?
*/
let tempObj3 = {
  _num: 22,
  set num(numIn) {
    _num = numIn;
  },
};
// A14: The setter should contain this._num in place of _num.
