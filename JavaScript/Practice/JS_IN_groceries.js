/*
Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'

groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'

groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'

*/

const groceries = (groceryList) => {
  let itemList = groceryList.map((item) => item.item);
  let itemString = itemList.toString();
  console.log(itemString);
  const comaList = itemString.includes(',');
  console.log(comaList);
  //   console.log(itemList.length);
  //   for (let i = 0; i < itemString.length; i++) {
  for (let i = itemString.length - 1; i >= 0; i--) {
    // console.log(i);
    const charIdentified = ',';
    // console.log(itemString.charAt(i).replace(',', ' and '));
    charCount = 0;
    if (itemString.charAt(i) === charIdentified) {
      console.log('charCount', charCount, itemString.charAt(i));
      charCount++;
    }
    // }
    console.log('charCount start', charCount);
    // if (charCount >= 3) {
    //   return 0;
    // } else {
    // const commaChar = itemString.charAt(i);
    // console.log(commaChar);
    /*
    if (commaChar === ',') {
      itemString = itemString.charAt(i).replace(',', ' and ');
      //   return itemString;
      //   console.log(itemString);
    }
    */
  }
};

console.log(
  groceries([
    { item: 'Carrots' },
    { item: 'Hummus' },
    { item: 'Pesto' },
    { item: 'Rigatoni' },
  ])
);
