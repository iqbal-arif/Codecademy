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

  console.log(groceryItem);
  let itemList = groceryList.map((item) => item.item);
  //   Add AND with push
  // Use splice and push to add and
  console.log('itemList', itemList);
  if (itemList.length === 1) {
    itemList = itemList.toString();
    return 'List to String', itemList;
  }
  // console.log(itemList.toString()); // uncomment this one
  //Reverse loop (looping backward)
  //   for (let i = itemList.length - 1; i >= 0; i--) {
  //   }
  for (let j = itemList.length - 1; j >= 0; j--) {
    // Froward Loop (Looping Forward)
    //   for (let i = 0; i < itemList.length; i++) {
    // itemList = itemList[i].replaceAll(',', ', ');
    // console.log(itemList[i]);
    if (j === itemList.length - 1) {
      itemList.splice(itemList.length - 1, 0, 'and');
      let itemStr = itemList.toString();
      itemStr = itemStr.replace(/[,]/g, ', ');
      itemStr = itemStr.replace(', and,', ' and ');
      //   return 'Inside block', itemStr;
      console.log('Inside block', `'${itemStr}'.`); // uncomment this one
    }
    // console.log('Outside If-block', itemStr);
  }
  let itemListStr = itemList.toString();
  //console.log(itemStrReplace); //comment
  // console.log(itemStr); //comment
  //   if (j === itemList.length - 1) {
  //   }
};
//
console.log(
  groceries([{ item: 'Lettuce' }, { item: 'Onions' }, { item: 'Tomatoes' }])
);
