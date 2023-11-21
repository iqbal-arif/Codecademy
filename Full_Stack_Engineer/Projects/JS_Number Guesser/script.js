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

function compareGuesses(userGuess, computerGuess, secretTarget) {
  absoluteUserScore = Math.abs(userGuess - secretTarget);
  absoluteComputerScore = Math.abs(computerGuess - secretTarget);
  return absoluteUserScore > absoluteComputerScore ? true : false;
}

console.log(compareGuesses());
