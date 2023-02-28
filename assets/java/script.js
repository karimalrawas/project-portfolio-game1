// Initializing variables and getting DOM elements
let userScore = 0;
let computerScore = 0;
let numberOfWins = 0;
let numberOfLosses = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

// Function to get computer's random choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// Function to convert choice to capitalized string
function convertCase(anythingIwant) {
  if (anythingIwant === 'paper') return 'Paper';
  if (anythingIwant === 'scissors') return 'Scissors';
  return 'Rock';
}

// Function to handle user's win
function win(user, computer) {
  userScore++;
  numberOfWins++;
  userScore_span.innerHTML = userScore;

  result_div.innerHTML = `<p>${convertCase(user)} beats ${convertCase(computer)}. You win this time human!</p>`;
  const roundStatus = document.getElementById(user);

// Check if the user has won 3 times
  if (numberOfWins === 3) {
    result_div.innerHTML += "<p>You saved humanity! Well done</p>";
    resetGame();
  }
}

// Function to handle user's loss
function loses(user, computer) {
  computerScore++;
  numberOfLosses++;
  computerScore_span.innerHTML = computerScore;

  result_div.innerHTML = `<p>${convertCase(computer)} beats ${convertCase(user)}. HA! AI will take over!</p>`;
  const roundStatus = document.getElementById(user);

// Check if the computer has won 3 times
  if (numberOfLosses === 3) {
    result_div.innerHTML += "<p>Game Over! AI will rise!</p>";
    resetGame();
  }
}

// Function to handle a draw
function draw(user, computer) {

  result_div.innerHTML = `<p>It was a draw! You both chose ${convertCase(user)}</p>`;
  const roundStatus = document.getElementById(user);

}

// Function to reset game scores
function resetGame() {
  userScore = 0;
  computerScore = 0;
  numberOfWins = 0;
  numberOfLosses = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
}

// Function to play the game and determine winner
function game(userChoice) {
  const computerChoice = getComputerChoice();


  switch (userChoice + computerChoice) {
    case 'paperrock':
    case 'rockscissors':
    case 'scissorspaper':
      win(userChoice, computerChoice);
      break;
    case 'rockpaper':
    case 'scissorsrock':
    case 'paperscissors':
      loses(userChoice, computerChoice);
      break;
    case 'rockrock':
    case 'scissorsscissors':
    case 'paperpaper':
      draw(userChoice, computerChoice);
      console.log("draw");
      break;
  }
}

// Main function to initialize game and add event listeners to buttons
function main() {
  let userWins = 0;
  let computerWins = 0;
  const maxWins = 3;

  rock_div.addEventListener('click', () => game('rock'));
  paper_div.addEventListener('click', () => game('paper'));
  scissors_div.addEventListener('click', () => game('scissors'));

  // Function to end rounds
  function endGame(message) {
    result_div.innerHTML = `<p>${message}</p>`;
    rock_div.removeEventListener('click', () => game('rock'));
    paper_div.removeEventListener('click', () => game('paper'));
    scissors_div.removeEventListener('click', () => game('scissors'));
  }

  // Function to update the scores
  function updateScoreboard() {
    userScore_span.innerHTML = userWins;
    computerScore_span.innerHTML = computerWins;
  }

  // Function to win or lose a full 3 round game and display texts respectively
  function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
      case 'paperrock':
      case 'rockscissors':
      case 'scissorspaper':
        win(userChoice, computerChoice);
        userWins++;
        if (userWins === maxWins) {
          endGame("You saved humanity! Well done.");
        } else {
          updateScoreboard();
        }
        break;
      case 'rockpaper':
      case 'scissorsrock':
      case 'paperscissors':
        loses(userChoice, computerChoice);
        computerWins++;
        if (computerWins === maxWins) {
          endGame("Game Over! AI will rise!");
        } else {
          updateScoreboard();
        }
        break;
      case 'rockrock':
      case 'scissorsscissors':
      case 'paperpaper':
        draw(userChoice, computerChoice);
        break;
    }
  }
}

main();




