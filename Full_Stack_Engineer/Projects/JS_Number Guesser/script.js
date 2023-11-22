let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function guessAlter(guessRange) {
  if (guessRange <= 0 || guessRange >= 10) {
    alert('Your number is out of Range!!!. Please enter between 0 & 9');
  } else {
    compareGuesses();
  }
}

console.log(guessAlter(15));

function getAbsoluteDistance(userGuess, computerGuess) {
  let guess;
  let target;
  guessAlter(userGuess);
  if (guess === userGuess) {
    return Math.abs(userGuess - target);
  } else if (guess === computerGuess) {
    return Math.abs(computerGuess - target); //3
  }
}

function compareGuesses(userGuess, computerGuess, target) {
  const absoluteUserScore = getAbsoluteDistance(userGuess); //6
  const absoluteComputerScore = getAbsoluteDistance(computerGuess); //3

  return absoluteUserScore >= absoluteComputerScore ? true : false;
}
// console.log(compareGuesses(2, 2, 1));

function updateScore(gameResult) {
  gameResult === 'human' ? (humanScore = +1) : (computerScore = +1);
}

function advanceRound() {
  currentRoundNumber = currentRoundNumber + 1;
}
