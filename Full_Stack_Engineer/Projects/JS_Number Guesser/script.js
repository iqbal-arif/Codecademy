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
  absoluteUserScore = Math.abs(userGuess - target); //6
  absoluteComputerScore = Math.abs(computerGuess - target); //3
  if (
    absoluteUserScore > absoluteComputerScore ||
    absoluteUserScore === absoluteComputerScore
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(compareGuesses());

function updateScore(gameResult) {}
