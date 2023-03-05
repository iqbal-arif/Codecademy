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
