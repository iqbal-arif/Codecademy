// Write your function here:
/***********************************************/
/***************HOW OLD ARE YOU*****************/
/***********************************************/
/*
Write a function, howOld(), that has two number parameters, age and giveYear, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

    1. If the year is in the future, you should return a string in the following format:

    'You will be [calculated age] in the year [year passed in]'

    2. If the year is before they were born, you should return a string in the following format:

    'The year [year passed in] was [calculated number of years] years before you were born'

    3. If the year is in the past but not before the person was born, you should return a string in the following format:

    'You were [calculated age] in the year [year passed in]'
*/

//Current Year & Month
const currentDate = new Date(2023, 02);
const currentYear = currentDate.getFullYear();
// console.log(currentYear);
// console.log(currentYear)
const howOld = (year = 0, age = 0) => {
  // let calculatedYear = currentYear - year;
  // let calculatedAge;
  let calculatedYear = year - currentYear;
  console.log(year);
  let calculatedAge = age + calculatedYear;
  console.log(calculatedAge);
  const newAge = age + currentYear;
  // year is future
  age > calculatedAge
    ? console.log(`You will be ${calculatedAge} in the year ${calculatedYear}`)
    : console.log('Try again');

  // year is before they were born
  age <= 0
    ? console.log(
        `The year ${calculatedAge} was ${calculatedYear} years before you were born`
      )
    : console.log('Try again');
  // year is NOT before they were born
  age < calculatedAge
    ? console.log(`You were ${calculatedAge} in the year ${calculatedYear}`)
    : console.log('Try again');

  // if (currentYear < calculatedYear) {
  //   console.log(calculatedYear);
  //   console.log(calculatedAge);
  // } else if (calculatedAge < 0) {
  //   return `The ${year} was ${calculatedAge} years before you were born`;
  // } else if (year < currentYear && age > 0) {
  //   return `You were ${calculatedAge} in the giveYear ${year}`;
  // }
  // return;
  // console.log(calculatedYear);
  // console.log(currentYear);
  // console.log(calculatedAge);
};

// console.log(howOld(2050, 17));
howOld(2050, 47);
