// Human To Dog Years Convertor

// My Age
const myAge = 47;

// Early Years
let earlyYears = 2;

// Reassigning the variables
// earlyYears = earlyYears * 10.5;
earlyYears *= 10.5;

// Accounting for First Two Years
let laterYears = myAge - 2;

// Number of Dog Years
// laterYears = laterYears * 4;
laterYears *= 4;

// Logging Early Years and Later Years
console.log(earlyYears, laterYears);

// Adding Early Years and Later Years
const myAgeInDogYears = earlyYears + laterYears;

// Defining Name

const fullName = 'Arif Iqbal';

// Converting to LowerCase
const myName = fullName.toLowerCase();

// Logging the Result
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);

let num = 10;
num *= 3;
console.log(num);
