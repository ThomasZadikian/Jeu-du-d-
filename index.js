//get element for gameSystem
const dice = document.getElementById("dice");
const roll = document.getElementById("rollButton");
const hold = document.getElementById("holdButton");
const newGame = document.getElementById("newGame");
const gameOver = document.getElementById("gameOver");

//get element for players
const player0 = document.getElementById("activePlayer0");
const player0Background = document.getElementById("player0");
const player1 = document.getElementById("activePlayer1");
const player1Background = document.getElementById("player1");

let randomNumber = 0;
let roundScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let finish = false;

function rollDice() {
  let numb = Math.floor(Math.random() * (7 - 1) + 1);
  const diceImage = "/images/dice" + numb + ".png";
  dice.setAttribute("src", diceImage);
  if (numb !== 1) {
    roundScore += numb;
    document.getElementById(`currentPlayer${activePlayer}`).textContent =
      roundScore;
  } else {
    changePlayer();
  }
}

function changePlayer() {
  roundScore = 0;
  document.getElementById(`currentPlayer${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("activePlayer");
  player1.classList.toggle("activePlayer");
  player0Background.classList.toggle("bg-red-400");
  player1Background.classList.toggle("bg-red-400");
}

function holdScore() {
  scores[activePlayer] += roundScore;
  document.getElementById(`totalPlayer${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 100) {
    gameOver.style.visibility = "visible";
    finish = true;
  } else {
    changePlayer();
  }
}

const replay = function () {
  document.location.reload();
};

roll.addEventListener("click", () => {
  finish ? null : rollDice();
});
hold.addEventListener("click", () => {
  finish ? null : holdScore();
});
newGame.addEventListener("click", replay);
