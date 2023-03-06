// User Input Functionality
const getUserChoice = (userInput) => {
  // UserInput Case Check
  userInput = userInput.toLowerCase();
  // UserInput Rock, Paper, Scissor Check
  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors'
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

let userChoice = getUserChoice('Rock');
let computerChoice = getComputerChoice();

const determineWinner = (userChoice, computerChoice) => {
  console.log(userChoice, computerChoice);
  // Tie
  if (userChoice === computerChoice) {
    return `The game is "TIE".`;
  } else {
    return `The game is "NOT TIE".`;
  }
};

console.log(determineWinner(userChoice, computerChoice));
