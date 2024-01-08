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
/*
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];
*/
//

inValidCompanies = (cc) => {
  let ccAmex = 3;
  let ccVisa = 4;
  let ccMaster = 5;
  let ccDiscover = 6;
  let compList = [];
  cc.forEach((comp, i) => {
    console.log(comp.length, i, comp[0]);
    comp[0] === ccAmex
      ? console.log(i, 'ccAmex')
      : comp[0] === ccVisa
      ? console.log(i, 'ccVisa')
      : comp[0] === ccMaster
      ? console.log(i, 'ccMaster')
      : console.log(i, 'ccDiscover');
    // console.log(cardID);
    // comp.forEach((c) => {
    //   console.log(c);
    // });
    // console.log('invalidList', c.length, c)})
    // let cardID =
    //   c[0] === ccAmex
    //     ? console.log('ccAmex')
    //     : c[0] === ccVisa
    //     ? 'ccVisa'
    //     : c[0] === ccMaster
    //     ? 'ccMaster'
    //     : 'ccDiscover';
    // console.log(cardID);
  });
  console.log(compList);
};

const validateCred = (cardNum) => {
  console.log('ori-card', cardNum.length, cardNum);
  // inValidCompanies(cardNum);

  // Check for the first digit of the cc no,. card[0]
  // let ccCompany = cardNum.forEach((cc) => {
  //   let creditCompany;
  //   return cc === ccAmex
  //     ? console.log('ccAmex')
  //     : cc === ccVisa
  //     ? 'ccVisa'
  //     : cc === ccMaster
  //     ? 'ccMaster'
  //     : 'ccDiscover';
  // });
  // console.log(ccCompany);

  let evenIndexedNum = [];
  let oddIndexedNum = [];
  // for (let e = 1; e < cardNum.length; e += 2) {
  let doubleDigit = [];
  let evenIndex = [];
  for (let e = 0; e < cardNum.length; e++) {
    // console.log(cardNum[e]);
    // Multiply evenIndex by 2 and checking if 9 needs to be subtracted

    // let evenIndexX2 = evenIndex * 2;
    // if (evenIndexX2 > 9) {
    //   doubleDigit.push(evenIndexX2 - 9);
    // } else {
    //   doubleDigit.push(evenIndexX2);
    // }
    // return 'doubleDigit', doubleDigit;
    let oddIndex = cardNum[e];
    let evenIndex = cardNum[e];
    // cardNum[e - 1] === -1 ? evenIndexNum.push(cardNum[e]) : 0;
    // console.log(e);
    // if (e % 2 == 0) {
    //   let evenIndex = cardNum[e];
    //   evenIndexedNum.push(evenIndex);
    // }
    e % 2 === 0 ? evenIndexedNum.push(evenIndex) : oddIndexedNum.push(oddIndex);
  }
  console.log('evenindex', evenIndexedNum, 'oddindex', oddIndexedNum);

  let evenDoubleDigit = [];
  evenIndexedNum.forEach((digit) => {
    let DDigit = digit * 2;
    if (DDigit > 9) {
      evenDoubleDigit.push(DDigit - 9);
    } else {
      evenDoubleDigit.push(DDigit);
    }
  });
  console.log('evenDoubleDigit', evenDoubleDigit);
  const modifiedArray = oddIndexedNum.concat(evenDoubleDigit);
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
};

// console.log(validateCred(valid1));
/*
const validateCred = (cardNum) => {
  console.log('ori-card', cardNum.length, cardNum);
  const itemKey = Object.keys(cardNum);
  console.log(itemKey);
  itemKey.forEach((item) => {
    if (item % 2 == 0) {
      // const evenKey = [];
      // evenKey.push(item);
      console.log(item);
    }
    // else {
    //   const oddKey = [];
    //   oddKey.push(item);
    //   console.log(oddKey);
    // }
  });
  cardNum.forEach((element) => {
    const itemIndex = element;
    // console.log(itemIndex);
  });
};
*/
const idInvalidCardCompanies = inValidCompanies(batch);
const findInvalidCards = validateCred(valid1);

console.log(findInvalidCards);
console.log;
/*
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
}*/
