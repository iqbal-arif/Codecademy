let {
  cookBeans,
  steamBroccoli,
  cookRice,
  bakeChicken,
} = require('./library.js');

// Write your code below:

async function serveDinnerAgain() {
  const foodArray = await Promise.all([
    steamBroccoli(),
    cookRice(),
    bakeChicken(),
    cookBeans(),
  ]);
  // let vege = foodArray[0];
  // let grain = foodArray[1];
  // let meat = foodArray[2];
  // let beans = foodArray[3];

  // cconsole.log(`Dinner is served. We're having ${vege}, ${grain}, ${meat}, and ${beans}.`);
  let vege = foodArray[0];
  let grain = foodArray[1];
  let meat = foodArray[2];
  let beans = foodArray[3];

  console.log(
    `Dinner is served. We're having ${vege}, ${grain}, ${meat}, and ${beans}.`
  );
}

serveDinnerAgain();
