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
  return day;
};

// Ideal Sleep hours Per Week
const getIdealSleepHours = () => {
  return (idealHours = 6 * 7);
};
console.log(getIdealSleepHours());
// console.log(daysOfWeek());
//  Sleep Hours Entry with Days

// No. of Hours of Rest per night
const getSleepHours = (day) => {
  // Sleep Hours per each night
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
  return `For ${day} total hours of sleep is ${sleepPerNight}`;
};

console.log(getSleepHours(daysOfWeek()));

// Calculating Debt Hours of Sleep per Night
const getActualSleepHours = () => {
  const dayList = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  let i = 0;
  let sumHoursOfSleep = 0;
  getSleepHours(daysOfWeek());
  const sleepDays = [];
  let j = 0;
  do {
    if (day === dayList[i]) {
      sleepDays.push(dayList[i]);
      sumHoursOfSleep = sumHoursOfSleep + sleepPerNight;
    }
    console.log(day, sleepPerNight);
    i++;
  } while (i < dayList.length);

  console.log(day, sleepPerNight, sumHoursOfSleep, sleepDays);
};

getActualSleepHours();

//   do {
//     if (day !== sleepDays[j]) {
//       sleepDays.push(dayList[j]);
//       sumHoursOfSleep = sumHoursOfSleep + sleepPerNight;
//     }
//     j++;
//   } while (j < sleepDays);
