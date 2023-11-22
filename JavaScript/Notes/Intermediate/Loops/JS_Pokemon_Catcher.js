// Exercise: Pokemon Catcher
// Coding question

//     1. Write a for...of loop that iterates through our pokemonList array.

//     2. Inside the block of the for...of loop, use console.log() and string interpolation as modeled above to log each element in the pokemon array within the string 'You caught a 'X'!' For example, the first iteration of the loop should print ‘You caught a Pikachu!’ to the console.

//     3. One of the elements, 'Yoshi', is not a Pokemon. If you encounter 'Yoshi', use continue to skip this element before it is logged to the console.

const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];

// Write your code below

for (const list of pokemonList) {
  if (list === 'Yoshi') {
    continue;
  }
  console.log(`You caught a ${list}!`);
  for (const char of list) {
    if (char === 'x') {
      console.log("You caught a 'X'!");
    }
    // console.log(char)
  }
}
