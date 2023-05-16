let {
  cookBeans,
  steamBroccoli,
  cookRice,
  bakeChicken,
} = require('./library.js');

// Write your code below:

async function serveDinner() {
  const serveDinnerAgain = await Promise.all([
    cookBeans(),
    steamBroccoli(),
    cookRice(),
    bakeChicken(),
  ]);
}
