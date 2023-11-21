let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

console.log(generateTarget());

const secretTarget = generateTarget();
const userGuess = humanGuessInput;

function compareGuesses(userGuess, computerGuess, secretTarget) {
  secretTarget ? userGuess : computerGuess;
}
