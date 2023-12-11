/*
******************
justCoolStuff()
******************
Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];

justCoolStuff(arr1, arr2); // Should return ['this']

You can test your function when you’re ready by passing in the myStuff and coolStuff arrays or by making arrays of your own!


*/

// Write your code here:

const coolStuff = [
  'gameboys',
  'skateboards',
  'backwards hats',
  'fruit-by-the-foot',
  'pogs',
  'my room',
  'temporary tattoos',
];

const myStuff = [
  'rules',
  'fruit-by-the-foot',
  'wedgies',
  'sweaters',
  'skateboards',
  'family-night',
  'my room',
  'braces',
  'the information superhighway',
];

const filterMethod = (arrayToBeFiltered) => {
  let matchedArray = ['fruit-by-the-foot', 'skateboards', 'my room'];
  switch (arrayToBeFiltered) {
    case 'fruit-by-the-foot':
    case 'skateboards':
    case 'my room':
      return arrayToBeFiltered;
  }
};

const justCoolStuff = (coolStuff, myStuff) => {
  const filterMyStuff = myStuff.filter(filterMethod);
  const filterCoolStuff = coolStuff.filter(filterMethod);
  const comparedStuff = filterMyStuff.every((stuff) =>
    filterCoolStuff.includes(stuff)
  );

  return comparedStuff
    ? filterCoolStuff
    : console.log('Sorry, every stuff does not match.  Check your logic!');
};

console.log(justCoolStuff(myStuff, coolStuff));
// Feel free to uncomment the code below to test your function
/*
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

*/

/*
const products = ['🍎 apple', '🥬 kale', '🍐 pear', '🌽 corn']
    const fruits = ['🍐 pear', '🍎 apple']
    const veggies = ['🥬 kale', '🧅 onion']

    //1. checking if AT LEAST ONE value is in the array
    const atLeastOneFruit = fruits.some(i => products.includes(i))
    // console.log(atLeastOneFruit) // true
    const atLeastOneVeggie = veggies.some(i => products.includes(i))
    // console.log(atLeastOneVeggie) // true

    //2. checking if ALL THE values are in the array
    const allTheFruits = fruits.every(i => products.includes(i))
    console.log(allTheFruits) // true
    const allTheVeggies = veggies.every(i => products.includes(i))
    // console.log(allTheVeggies) // false, the '🧅 onion' is missing

*/
