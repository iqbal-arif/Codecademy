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
  const absoluteUserScore = Math.abs(userGuess - target); //6
  const absoluteComputerScore = Math.abs(computerGuess - target); //3

  return absoluteUserScore >= absoluteComputerScore ? true : false;
}
console.log(compareGuesses(4, 9, 3));

function updateScore(gameResult) {}
