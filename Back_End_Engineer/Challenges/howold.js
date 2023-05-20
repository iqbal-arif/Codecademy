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

/// Write your function here:
//Current Year & Month

const howOld = (age, year) => {
  const currentDate = new Date(2023, 02);
  let currentYear = currentDate.getFullYear();
  let yearDifference = year - currentYear;
  let newAge = age + yearDifference;
  // year is future
  if (newAge >= age) {
    return `You will be ${newAge} in the year ${year}`;
  } else if (newAge < 0) {
    const yearDifference = currentYear - year;
    const ageYear = currentYear - age;
    const priorAge = ageYear - year;
    return `The year ${year} was ${priorAge} years before you were born`;
  } else if (newAge < age) {
    const yearDifference = currentYear - year;
    return `You were ${newAge} in the year ${yearDifference}`;
  }
};
console.log(howOld(47, 2000));
