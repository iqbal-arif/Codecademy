// 1. For of Loop
//Here is an example of iterating over each element in an array using a traditional for loop with an index variable:

const hobbies = ['singing', 'eating', 'quidditch', 'writing'];

for (let i = 0; i < hobbies.length; i++) {
  console.log(`I enjoy ${hobbies[i]}.`);
}

// And here is an example of iterating through the same array using a for...of loop:

const hobbies2 = ['singing', 'eating', 'quidditch', 'writing'];

for (const hobby of hobbies2) {
  console.log(`I enjoy ${hobby}.`);
}

// 2. Iterating Through an Array

// One of the primary uses of the for...of loop is iterating through the items of an array. Let’s breakdown the syntax with a new example:

const fruits = ['oranges', 'apples', 'grapes'];

for (const fruit of fruits) {
  console.log(fruit);
}

// 3. Iterating Through a String

// The for...of can also be used to iterate over strings. Here is an example:

const username = 'joe';

for (const char of username) {
  console.log(char);
}

// 4. Break and Continue

// for...of has the advantage of setting up most of your loop parameters for you, but sometimes it is necessary to reclaim some control of how iteration is managed. One way of doing this is using JavaScript’s break and continue statements.

// The break statement can be used to jump out of a loop. For example:

const strangeBirds = [
  'Shoebill',
  'Cockatrice',
  'Basan',
  'Terrorbird',
  'Parotia',
  'Kakapo',
];

for (const bird of strangeBirds) {
  if (bird === 'Basan') {
    break;
  }
  console.log(bird);
}

// Will iterate through the array until it encounters the great mythical Basan, then it will exit. This will print out:

// Shoebill
// Cockatrice

// The continue statement is used to skip one iteration of the loop. For example:

const strangeBirds2 = [
  'Shoebill',
  'Cockatrice',
  'Basan',
  'Cow',
  'Terrorbird',
  'Parotia',
  'Kakapo',
];

for (const bird of strangeBirds2) {
  if (bird === 'Cow') {
    continue;
  }
  console.log(bird);
}

// Will iterate through the array and print out every value except the suspected imposter:

// Shoebill
// Cockatrice
// Basan
// Terrorbird
// Parotia
// Kakapo
