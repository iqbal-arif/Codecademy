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
// console.log(currentYear)
const howOld = (giveYear = 0, age = 0) => {
  let calculatedYear = currentYear - giveYear;
  let calculatedAge;
  if (calculatedAge >= 0) {
    // calculatedYear = giveYear - currentYear;
    // calculatedAge = age + calculatedYear;

    return `You will be ${calculatedAge} in the year ${giveYear}`;
  } else if (calculatedAge < 0) {
    return `The ${giveYear} was ${calculatedAge} years before you were born`;
  } else if (giveYear < currentYear && age > 0) {
    return `You were ${calculatedAge} in the giveYear ${giveYear}`;
  }
  console.log(calculatedYear);
  console.log(currentYear);
  console.log(calculatedAge);
};

howOld(2050, 17);
