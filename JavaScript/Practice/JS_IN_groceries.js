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
  const groceryItem = Object.values(groceryList);

  //   console.log(groceryItem);
  let itemList = groceryList.map((item) => item.item);
  console.log(itemList);
  for (let i = itemList.length - 1; i >= 0; i--) {
    console.log(i);
    if (i === 3) {
      //   return itemList[i];
      const itemComma = itemList[i].includes(',');
      console.log(itemComma);
    }
  }
};
/*
const groceries = (groceryList) => {
  let itemList = groceryList.map((item) => item.item);
  const itemArray = [];
  console.log(itemArray.push(itemList));
  let itemString = itemList.toString();
  console.log(itemString);
  const comaList = itemString.includes(',');
  console.log(comaList);
  //   console.log(itemList.length);
  //   for (let i = 0; i < itemString.length; i++) {
  charCount = 0;
  for (let i = itemString.length - 1; i >= 0; i--) {
    // console.log(i);
    const charIdentified = ',';
    if (itemString.charAt(i) === charIdentified) {
      console.log(i);
      //   console.log('charCount', charCount, itemString.charAt(i));
      charCount++;
      let newStr = [];
      if (charCount === 1) {
        let newItem = itemString.charAt(i).replace(',', ' and ');
        newStr.push(newItem);
        // console.log(itemString.charAt(i).replace(',', ' and '));
      }
      console.log(newStr);
      console.log('charCount block', charCount);
    }
    // }
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
/*
  }
};
*/
console.log(
  groceries([
    { item: 'Carrots' },
    { item: 'Hummus' },
    { item: 'Pesto' },
    { item: 'Rigatoni' },
  ])
);
