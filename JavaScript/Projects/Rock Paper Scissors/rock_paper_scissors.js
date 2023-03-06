// User Input Functionality
const getUserChoice = (userInput) => {
  // UserInput Case Check
  userInput = userInput.toLowerCase();
  // UserInput Rock, Paper, Scissor Check
  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors' ||
    userInput === 'bomb'
  ) {
    return userInput;
  } else {
    console.log(
      `Sorry Wrong Input! Please user "Rock", "Paper", or "Scissors" only to continue the game.`
    );
  }
};

// console.log(getUserChoice('Paper'));

// Computer Input Functionality

const getComputerChoice = () => {
  let computerInput = Math.floor(Math.random() * 3);
  //   console.log(computerInput);
  if (computerInput === 0) {
    return 'rock';
  } else if (computerInput === 1) {
    return 'paper';
  } else if (computerInput === 2) {
    return 'scissors';
  }
};

// console.log(getComputerChoice());

// User & Computer Input Comparison

const determineWinner = (userChoice, computerChoice) => {
  console.log(userChoice, computerChoice);
  // Tie

  if (userChoice === computerChoice) {
    return `The game is "TIE".`;
  }
  // Computer Wins
  if (
    (computerChoice === 'paper' && userChoice === 'rock') ||
    userChoice === 'scissors'
  ) {
    return `Computer Won`;
  } else if (
    // User Wins
    ((userChoice === 'paper' || userChoice === 'bomb') &&
      computerChoice === 'rock') ||
    computerChoice === 'scissors'
  ) {
    return `User Won`;
  }
};

// console.log(determineWinner(userChoice, computerChoice));

// Start Game

let userChoice = getUserChoice('bomb');
let computerChoice = getComputerChoice();

function playGame(userChoice, computerChoice) {
  return determineWinner(userChoice, computerChoice);
}

console.log(playGame(userChoice, computerChoice));
