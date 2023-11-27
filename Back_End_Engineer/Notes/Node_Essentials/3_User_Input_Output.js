/****************** /*/ //*/*/*/*/*/*///*/ *************/
/*** 1. User Input & Output ***/

/*

Node environment, the console is the terminal, and the console.log() method is a “thin wrapper” on the .stdout.write() method of the process object. stdout stands for standard output.

In Node, we can also receive input from a user through the terminal using the stdin.on() method on the process object:
*/
process.stdin.on('data', (userInput) => {
  let input = userInput.toString();
  console.log(input);
});

//Number Guess Game and UserInput and Output

// Game logic
let secretValue = Math.floor(1 + Math.random() * 10).toString();

let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

module.exports = {
  testNumber: (input) => {
    if (input === 'quit') {
      process.stdout.write('Ok. Bye!\n');
      process.exit();
    }
    if (!numbers.includes(input)) {
      process.stdout.write(
        'Choose a number from 1 through 10!\nIs the number ... '
      );
    } else if (input === secretValue) {
      process.stdout.write(
        'Woah you got it! Are you psychic? See you later!\n'
      );
      process.exit();
    } else {
      process.stdout.write('Nope. Guess again!\nIs the number ... ');
    }
  },
};

//app.js
let { testNumber } = require('./game.js');

process.stdout.write(
  'I\'m thinking of a number from 1 through 10. What do you think it is? \n(Write "quit" to give up.)\n\nIs the number ... '
);

let playGame = (userInput) => {
  let input = userInput.toString().trim();
  testNumber(input);
};

process.stdin.on('data', playGame);
