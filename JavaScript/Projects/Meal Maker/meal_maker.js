/*
**********
Meal Maker
**********
A restaurant has hired you to create a function for their website that allows them to set a meal and price each morning for Today’s Special. Use your knowledge of getters and setters to make sure anyone who uses the new function can generate a meal and a price for Today’s Special without any embarrassing errors!

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck” to see a project walkthrough video.

*/

/*

1.

We’ll hold the meal, price, and their respective getters and setters in an object named menu.

In app.js, create an empty menu object.
2.

The menu object will hold the meal and price of Today’s Special as properties and they shouldn’t be altered directly.

Within the menu object, create a _meal property with a value of an empty string (''). This will eventually hold the name of the meal.
3.

Next, add a _price property with a value of 0. This will eventually hold the price of the meal, and should also not be altered directly.
4.

We know properties that begin with _ should not be directly manipulated. But just to validate this knowledge, let’s test it out!

Below the menu object, directly manipulate the two properties by assigning _meal a number value and _price a string value.

Then, below the new assignments, console.log() the menu object to see how not type checking these values could cause confusion for a website visitor!

*/

const menu = {
  _meal: ' ',
  _price: 0,
  set meal(mealToCheck) {
    if (mealToCheck === string) {
      return (_meal = mealToCheck);
    }
  },
  set price(priceToCheck) {
    if (priceToCheck === number) {
      return (_price = priceToCheck);
    }
  },
  get todaysSpecial() {
    // if(_meal && _price){
    //   return `Today’s Special is ${_meal} for $${_price}!`
    // }else{
    //   return `Meal or price was not set correctly!`
    // }
    this._meal && this._price
      ? console.log(`Today’s Special is ${this._meal} for $${this._price}!`)
      : console.log(`Meal or price was not set correctly!`);
  },
};

_meal = menu.meal;
_price = menu.price;

menu._meal = 'Soup';
menu._price = 10;

menu.todaysSpecial;

console.log(menu);
