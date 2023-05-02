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
