// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];
//valid1,valid3,invalid1,mystery3
// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:
// const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
//
/*
const validateCred = (cardNum) => {
  console.log('ori-card', cardNum.length, cardNum);
  let evenIndexNum = [];
  for (let e = 1; e < cardNum.length; e += 2) {
    // cardNum[e - 1] === -1 ? evenIndexNum.push(cardNum[e]) : 0;
    let evenIndex = cardNum[e];
    evenIndexNum.push(evenIndex);
  }
  console.log('evenindex', evenIndexNum);
  //   console.log(evenIndex);
  let doubleDigit = [];
  if (cardNum.length === 15) {
    for (let i = cardNum.length; i >= 1; i -= 2) {
      // console.log('Array Length', cardNum.length - 1);
      let otherIndex = i - 2;
      console.log('othercard', i, cardNum[otherIndex]);

      let otherDigit = cardNum[otherIndex] * 2;
      // console.log(otherIndex, cardNum[otherIndex]);
      if (otherDigit > 9) {
        doubleDigit.push(otherDigit - 9);
      } else {
        doubleDigit.push(otherDigit);
      }
    }
  } else {
    for (let i = cardNum.length; i >= 1; i -= 2) {
      // console.log('Array Length', cardNum.length - 1);
      let otherIndex = i - 2;
      console.log('othercard', i, cardNum[otherIndex]);

      let otherDigit = cardNum[otherIndex] * 2;
      // console.log(otherIndex, cardNum[otherIndex]);
      if (otherDigit > 9) {
        doubleDigit.push(otherDigit - 9);
      } else {
        doubleDigit.push(otherDigit);
      }
    }
  }
  // console.log(doubleDigit);
  const modifiedArray = evenIndexNum.concat(doubleDigit);
  console.log(modifiedArray);
  const reducedArray = modifiedArray.reduce((finalNum, num) => {
    return finalNum + num;
  }, 0);
  console.log(reducedArray);
  // const ccValidity = reducedArray % 10 ? true : false;
  // return ccValidity;
  // console.log(reducedArray);
  const ccValidity = reducedArray % 10;
  console.log(ccValidity);
  return ccValidity === 0 ? true : false;

  return ccValidity;

  //   cardNum.filter(otherDigit=>)
};
*/
// console.log(validateCred(valid1));

const validateCred = (cardNum) => {
  console.log('ori-card', cardNum.length, cardNum);
  console.log(Object.keys(cardNum));
  let evenIndexNum = [];
  cardNum.forEach((element) => {
    const itemIndex = element.filter((item) => item / 2);
  });
};
const findInvalidCards = validateCred(valid1);

console.log(findInvalidCards);
