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


function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}


function convertCase(anythingIwant) {
  if (anythingIwant === 'paper') return 'Paper';
  if (anythingIwant === 'scissors') return 'Scissors';
  return 'Rock';
}


function win(user, computer) {
  userScore++;
  numberOfWins++;
  userScore_span.innerHTML = userScore;
  const userName = ' (user)'.fontsize(5)
  const compName = ' (comp)'.fontsize(5)
  result_div.innerHTML = `<p>${convertCase(user)} beats ${convertCase(computer)}. You win this time human!</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('winningStyles');

  if (numberOfWins === 3) {
    result_div.innerHTML += "<p>You saved humanity! Well done</p>";
    resetGame();
  }
}

function loses(user, computer) {
  computerScore++;
  numberOfLosses++;
  computerScore_span.innerHTML = computerScore;
  const userName = ' (user)'.fontsize(5)
  const compName = ' (comp)'.fontsize(5)
  result_div.innerHTML = `<p>${convertCase(computer)} beats ${convertCase(user)}. HA! AI will take over!</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('losingStyles');
  
  if (numberOfLosses === 3) {
    result_div.innerHTML += "<p>Game Over! AI will rise!</p>";
    resetGame();
  }
}

function draw(user, computer) {
  const userName = ' (user)'.fontsize(5)
  const compName = ' (comp)'.fontsize(5)
  result_div.innerHTML = `<p>It was a draw! You both chose ${convertCase(user)}</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('drawStyles');
  
}


function resetGame() {
  userScore = 0;
  computerScore = 0;
  numberOfWins = 0;
  numberOfLosses = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
}

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


function main() {
    let userWins = 0;
    let computerWins = 0;
    const maxWins = 3;
    
    rock_div.addEventListener('click', () => game('rock'));
    paper_div.addEventListener('click', () => game('paper'));
    scissors_div.addEventListener('click', () => game('scissors'));
    
    function endGame(message) {
      result_div.innerHTML = `<p>${message}</p>`;
      rock_div.removeEventListener('click', () => game('rock'));
      paper_div.removeEventListener('click', () => game('paper'));
      scissors_div.removeEventListener('click', () => game('scissors'));
    }
    
    function updateScoreboard() {
      userScore_span.innerHTML = userWins;
      computerScore_span.innerHTML = computerWins;
    }
    
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
  
