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
/*
const filterMethod = (arrayToBeFiltered) => {
  // console.log(arrayToBeFiltered);
  // console.log(arrayToBeFiltered.includes('skateboards'));
  let matchedArray = [];
  const includeStr = arrayToBeFiltered.includes('skateboards');
  if (includeStr) {
    matchedArray.push(arrayToBeFiltered);
    console.log(matchedArray);
  }
  */
const filterMethod = (arrayToBeFiltered) => {
  let stringEle = arrayToBeFiltered.includes('skateboards');
  stringEle = arrayToBeFiltered.includes('my room');
  stringEle = arrayToBeFiltered.includes('skateboards');
  let matchedArray = [];
  // ;

  if (true) {
    matchedArray.push(stringEle);
  }
  console.log(matchedArray);

  // for (let i = 0; i < arrayToBeFiltered.length; i++) {
  // const includeStr = arrayToBeFiltered.includes('skateboards');
  // if (includeStr) {
  //   matchedArray.push(arrayToBeFiltered);
  // }
  // }
  // console.log(matchedArray);
  // return;
  // console.log(arrayToBeFiltered);
  // switch (arrayToBeFiltered) {
  //   case 'fruit-by-the-foot':
  //     matchedArray.push(arrayToBeFiltered);
  //     continue;
  //   case 'skateboards':
  //     matchedArray.push(arrayToBeFiltered);
  //   case 'my room':
  //     matchedArray.push(arrayToBeFiltered);
  //     console.log(matchedArray);
  //     break;
  //   default:
  //     console.log('Sorry nothing matched');
  //     return;
  // }
};
//   console.log(arrayToBeFiltered.toString());
// let stringElement = arrayToBeFiltered.toString();
//   let matchedArray = ['fruit-by-the-foot', 'skateboards', 'my room'];
// console.log(stringElement);
// if (
// stringElement === 'fruit-by-the-foot'
//   &&
//     stringElement === 'skateboards' &&
//     stringElement === 'my room'
// ) {
//   }
// }

// &&
// stringElement === 'skateboards' &&
// stringElement === 'my room'
const justCoolStuff = (myStuff, coolStuff) => {
  const filterMyStuff = myStuff.filter(filterMethod);
  //   return filterMyStuff;
};

console.log(justCoolStuff(myStuff, coolStuff));
// Feel free to uncomment the code below to test your function
/*
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

*/
