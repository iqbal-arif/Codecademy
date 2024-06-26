/* Color Message
Create a function colorMessage() that takes 2 string arguments, favoriteColor and shirtColor.

If the value of favoriteColor is the same as the value of shirtColor return the string 'The shirt is your favorite color!'.

If not, return the string 'That is a nice color.'
*/
// Create function below

const colorMessage = (favoriteColor, shirtColor) => {
  return favoriteColor === shirtColor
    ? 'The shirt is your favorite color!'
    : 'That is a nice color.';
};
console.log(colorMessage('blue', 'blue'));
