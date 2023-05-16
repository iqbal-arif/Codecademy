let {
    cookBeans,
    steamBroccoli,
    cookRice,
    bakeChicken,
  } = require("./library.js");
  
  // Write your code below:
  
  async function serveDinnerAgain() {
    const foodArray = await Promise.all([
      steamBroccoli(),
      cookRice(),
      bakeChicken(),
     cookBeans(),
    ]);
    for (let i = 0; i < foodArray.length; i++) {
      console.log(`Dinner is served. We’re having [first item in foodArray ], [second item in foodArray ], [third item in foodArray], and [fourth item in foodArray ]`foodArray[i]);
    }
  }