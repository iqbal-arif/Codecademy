let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

let userInput = 4;
let computerInput = 2;
// let target = generateTarget();
let target = 9;

console.log('Variable Target  ' + target);
// console.log('UserInput  ' + userInput);
// console.log('ComputerInput  ' + computerInput);
// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function guessAlter(guessRange) {
  if (guessRange <= 0 || guessRange >= 9) {
    alert('Your number is out of Range!!!. Please enter between 0 & 9');
  } else {
    compareGuesses();
  }
}

// console.log(guessAlter(15));

function getAbsoluteDistance(user, computer, guesser) {
  //   console.log(target);
  //   console.log('UserInputABS  ' + userInput);
  //   console.log('ComputerInputABS  ' + computerInput);
  //   let guesser;
  //   let guess;
  if (guesser === 'user') {
    return Math.abs(userInput - target);
  } else if (guesser === 'computer') {
    return Math.abs(computerInput - target); //3
  }
}

function compareGuesses(userInput, computerInput, target) {
  //   guessAlter(userGuess);
  const absoluteUserScore = getAbsoluteDistance(userInput, target, 'user'); //6
  const absoluteComputerScore = getAbsoluteDistance(
    computerInput,
    target,
    'computer'
  ); //3
  console.log(absoluteUserScore);
  console.log(absoluteComputerScore);

  if (absoluteUserScore < target && absoluteUserScore < absoluteComputerScore) {
    return true;
  } else if (
    absoluteComputerScore < target &&
    absoluteComputerScore > absoluteUserScore
  ) {
    return false;
  } else {
    return true;
  }
}
console.log(compareGuesses());

function updateScore(gameResult) {
  gameResult === 'human' ? (humanScore = +1) : (computerScore = +1);
}

function advanceRound() {
  currentRoundNumber = currentRoundNumber + 1;
}
