const choices = document.querySelectorAll('.choice');
const score = document.querySelector('#score');
const result = document.querySelector('#result');
const modal = document.querySelector('.modal');
const scoreboard = {
  player: 0,
  computer: 0
};

function play(e) {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'draw';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
}

function showWinner(winner, computerChoice) {
  if (winner === 'player') {
    scoreboard.player++;
    result.innerHTML = `
      <h1 class="text-win">You Win!</h1>
      <img src="assets/images/${computerChoice}.png" alt="${computerChoice}">
      <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
    `;
  } else if (winner === 'computer') {
    scoreboard.computer++;
    result.innerHTML = `
      <h1 class="text-lose">You Lose!</h1>
      <img src="assets/images/${computerChoice}.png" alt="${computerChoice}">
      <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
    `;
  } else {
    result.innerHTML = `
      <h1>It's a Draw!</h1>
      <img src="assets/images/${computerChoice}.png" alt="${computerChoice}">
      <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
    `;
  }
  score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
  `;
  modal.style.display = 'block';
}

function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
  `;
}

function closeModal(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', closeModal);
