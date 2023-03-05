function getReminder() {
  console.log('Water the plants.');
}

// Function Declaration
function greetInSpanish() {
  console.log('Buenas tardes.');
}

// Function with Parameter
function sayThanks(name) {
  console.log(
    'Thank you for your purchase ' + name + '! We appreciate your business.'
  );
}

sayThanks('Cole');

// Default Parameter
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

// Function with Return Keyword

function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

//   Helper Function

// Example I:
function multiplyByNineFifths(number) {
  return number * (9 / 5);
}

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
}

const tempFarenheit = getFahrenheit(15); // Returns 59
console.log(tempFarenheit);

// Example II:
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

// Function Expressions

// IMPORTANT NOTE: Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined.

const plantNeedsWater = function (day) {
  return day === 'Wednesday' ? true : false;
};

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));
