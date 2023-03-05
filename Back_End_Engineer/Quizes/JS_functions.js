// Q1: Which of the following is the correct way to call the function below?

const multiplier = (number) => {
  console.log(3 * number);
};

// A1:
multiplier(5);

// Q2: Which correctly represents the most condensed form of the function? Recall that this syntax is also known as ‘concise body.’

// A2:
const areaOfCircle = (radius) => Math.PI * radius * radius;

// Q3: Which of the following most accurately describes the volumeOfCube() function?

function volumeOfCube(side) {
  return side * side * side;
}

volumeOfCube(5);
// Output: 125.

// A3: Nice job! A function declaration uses the function keyword, a name, and a function body.

// Q4: What will be printed to the console?

const eatFruit = (fruit = 'apple') => {
  console.log(`This ${fruit} is delicious!`);
};

eatFruit();

// A4: Correct! eatFruit() has a default value of 'apple' for the fruit parameter.

// Q5: Which of the following is a parameter in the block of code below?

let input = 8;
const controlVal = input / 2 + 3;
const multiplier = (number, phase) => {
  const val = number * controlVal + phase;
  console.log(val);
};

// A5: Nice work! number and phase are parameters in the multiplier function.

//  Q6: What’s the purpose of a parameter?
//  A6: Arguments are the values passed into a function. Parameters act as placeholders for argument values.
// Correct Answer is To allow a function to accept data.

// Q7: What will this code print to the console?

const sleepTimer = (alarm) => {
    console.log('My alarm is set for: ' + alarm);
  }
   
  sleepTimer('8:30AM');
//   My alarm is set for 8:30AM
// A7 :Correct! '8:30AM' is the argument passed to sleepTimer().

// Q8 : What is wrong with the code snippet provided?

const greeting = => {
    console.log('Hello Programmer!');
  };

// A8 : Correct! When there are no parameters, an arrow function needs to have a set of empty parentheses (). 
// The greeting function is missing a set of () between the = and =>

// Q9 : This code prints: I ran 3 miles at an average of undefined per mile. Why does the text include undefined?

const workoutJournal = (miles, avgTime) => {
    console.log('I ran ' + miles + ' miles at an average of ' + avgTime + ' per mile.');
  };
   
  workoutJournal('3');
// A9 : Correct! When the second argument is not specified, the value of avgTime defaults to undefined.
// The call to workoutJournal is missing a second argument.

//  Q10: Which of the following best describes what a function in JavaScript is used for?
// A10 : A function is a reusable piece of code that can accept input adn performs a specific task.