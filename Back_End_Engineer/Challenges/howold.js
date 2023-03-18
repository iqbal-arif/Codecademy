// Write your function here:

//Current Year & Month
const currentDate = new Date(2023, 02);
const currentYear = currentDate.getFullYear();
// console.log(currentYear)
const howOld = (givenYear, giveNAge) => {
  const yearAdjustment = currentYear - givenYear;
  const ageAdjustment = givenAge + yearAdjustment;
  console.log(yearAdjustment);
  console.log(currentYear);
  console.log(age);
};

howOld(1985, 30);
