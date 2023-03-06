// Random Sleep Hours Generator
let sleepHourRandomCalculator = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);
// console.log(sleepHourRandomCalculator(5, 10));

// Random Day Calculator
const daysOfWeek = () => {
  let daysNumber = Math.floor(Math.random() * 7);
  //   console.log(daysNumber);
  switch (daysNumber) {
    case 0:
      day = 'Monday';
      break;
    case 1:
      day = 'Tuesday';
      break;
    case 2:
      day = 'Wednesday';
      break;
    case 3:
      day = 'Thursday';
      break;
    case 4:
      day = 'Friday';
      break;
    case 5:
      day = 'Saturday';
      break;
    case 6:
      day = 'Sunday';
      break;
  }
  //   return day;
};

// Ideal Sleep hours Per Week
const extraSleep = 8;
const getIdealSleepHours = (extraSleep) => {
  if (extraSleep > 6) {
    return (idealHours = extraSleep * 7);
  } else {
    return (idealHours = 6 * 7);
  }
};
console.log(getIdealSleepHours(extraSleep));
// console.log(daysOfWeek());

//  Sleep Hours Entry with Days

// No. of Hours of Rest per night
const getSleepHours = (day) => {
  // Sleep Hours per each night
  let totalSleepPerWeek = 0;
  switch (day) {
    case 'Monday':
      sleepPerNight = sleepHourRandomCalculator(5, 10);
      break;
    case 'Tuesday':
      sleepPerNight = sleepHourRandomCalculator(5, 10);
      break;
    case 'Wednesday':
      sleepPerNight = sleepHourRandomCalculator(5, 10);
      break;
    case 'Thursday':
      sleepPerNight = sleepHourRandomCalculator(5, 10);
      break;
    case 'Friday':
      sleepPerNight = sleepHourRandomCalculator(5, 10);
      break;
    case 'Saturday':
      sleepPerNight = sleepHourRandomCalculator(5, 10);
      break;
    case 'Sunday':
      sleepPerNight = sleepHourRandomCalculator(5, 10);
      break;
  }
  return sleepPerNight;
  //   return `For ${day} total hours of sleep is ${sleepPerNight}
  //           And Total Sleep per Week is ${totalSleepPerWeek}`;
};

// console.log(getSleepHours(daysOfWeek()));

// Calculating Debt Hours of Sleep per Night
// const getActualSleepHours = () => console.log(getSleepHours(daysOfWeek()));

// getActualSleepHours();

// const getActualSleepHours = () =>
//   getSleepHours('Monday') +
//   getSleepHours('Tuesday') +
//   getSleepHours('Wednesday') +
//   getSleepHours('Thursday') +
//   getSleepHours('Friday') +
//   getSleepHours('Saturday') +
//   getSleepHours('Sunday');
const getActualSleepHours = () => 8 + 7 + 6 + 5 + 8 + 8 + 4;

console.log(getActualSleepHours());

//   do {
//     if (day !== sleepDays[j]) {
//       sleepDays.push(dayList[j]);
//       sumHoursOfSleep = sumHoursOfSleep + sleepPerNight;
//     }
//     j++;
//   } while (j < sleepDays);

// Calculate Sleep Debt

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(extraSleep);

  if (actualSleepHours === idealSleepHours) {
    return `Total Hours of Sleep per week = ${actualSleepHours}
        User got perfect amount of sleep`;
  } else if (actualSleepHours > idealSleepHours) {
    return `Total Hours of Sleep per week = ${actualSleepHours}
        User got more sleep than needed`;
  } else if (actualSleepHours < idealSleepHours) {
    return `
        Total Hours of Sleep per week = ${actualSleepHours}User should get some rest`;
  }
};

// Starting the Program
console.log(calculateSleepDebt());
