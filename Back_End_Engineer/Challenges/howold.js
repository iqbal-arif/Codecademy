// Write your function here:
/***********************************************/
/***************HOW OLD ARE YOU*****************/
/***********************************************/
/*
Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

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
const howOld = (givenYear = 0, givenAge = 0) => {
  let yearAdjustment = currentYear - givenYear;
  let ageAdjustment = givenAge + yearAdjustment;
  if (givenYear > currentYear) {
    if (yearAdjustment < 0 && ageAdjustment < 0) {
      yearAdjustment = Math.abs(yearAdjustment);
      ageAdjustment = Math.abs(ageAdjustment);
    }
    console.log(`You will be ${ageAdjustment} in the year ${givenYear}`);
  }
  console.log(yearAdjustment);
  console.log(currentYear);
  console.log(ageAdjustment);
};

howOld(2085);
