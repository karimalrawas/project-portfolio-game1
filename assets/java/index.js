const choices = ["rock", "paper", "scissors"];
const images = {
  rock: [
   
  ],
  paper: [
 
  ],
  scissors: [
    
  ],
};
const container = document.querySelector(".container");
const computerScoreEl = document.getElementById("computer-score");
const userScoreEl = document.getElementById("user-score");
const userSelectionEl = document.getElementById("user-selection");
const computerSelectionEl = document.getElementById("computer-selection");

let computerScore = 0;
let userScore = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function updateScore() {
  computerScoreEl.textContent = computerScore;
  userScoreEl.textContent = userScore;
}

function displaySelection(selection, player) {
  const imgIndex = Math.floor(Math.random() * images[selection].length);
  const imgSrc = images[selection][imgIndex];
  const imgEl = document.createElement("img");
  imgEl.src = imgSrc;
  imgEl.alt = selection;
  player.appendChild(imgEl);
}

function checkResult(userChoice) {
  const computerChoice = getComputerChoice();
  displaySelection(computerChoice, computerSelectionEl);
  displaySelection(userChoice, userSelectionEl);

  if (userChoice === computerChoice) {
    container.textContent = "Tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    container.textContent = "You win!";
  } else {
    computerScore++;
    container.textContent = "Computer wins!";
  }
  updateScore();
}

document.getElementById("rock").addEventListener("click", function () {
  checkResult("rock");
});

document.getElementById("paper").addEventListener("click", function () {
  checkResult("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
  checkResult("scissors");
});
