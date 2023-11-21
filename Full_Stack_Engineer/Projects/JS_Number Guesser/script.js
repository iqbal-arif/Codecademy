let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

// const humanGuessInput = document.querySelector('.human-guess');
// console.log(generateTarget());

// const secretTarget = generateTarget();
// const userGuess = humanGuessInput;
// console.log(userGuess);

function compareGuesses(userGuess, computerGuess, target) {
  absoluteUserScore = Math.abs(userGuess - target);
  absoluteComputerScore = Math.abs(computerGuess - target);
  return absoluteUserScore !== absoluteComputerScore ? true : false;
}
console.log(compareGuesses());

function updateScore(gameResult) {}
