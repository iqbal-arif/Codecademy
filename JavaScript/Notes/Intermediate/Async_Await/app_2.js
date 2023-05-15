const brainstormDinner = require('./library_2.js');

// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
    console.log(`I'm going to make ${meal} for dinner.`);
  });
}

// async/await version:
async function announceDinner() {
  // Write your code below:
}
