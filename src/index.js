// Varibale for player
let currentPlayerOne = document.getElementById("currentPlayerOne");
let currentPlayerTwo = document.getElementById("currentPlayerTwo");
let totalPlayer1 = document.getElementById("totalPlayer1");
let playerOneContainer = document.getElementById("player1Container");

// Variable for dice
let roll = document.getElementById("roll-button");
let save = document.getElementById("save");

// Variable for scoring
let numberRandom = document.getElementById("number");
let gameOver = document.getElementById("gameOver");
let newGame = document.getElementById("newGame");

playerOneTotalCount = 0;
playerTwoTotalCount = 0;
playerOneActualCount = 0;
playerTwoActualCount = 0;
round = 0;
totalCount = 0;
player1Turn = true;
player2Turn = false;

// Class for activ player slate-700/100
// TODO : Style for active player
// TODO : Optimize style and logic
// TODO : Cleaning code and logic

function turnSystem() {
  if (playerOneTotalCount > 100 || playerTwoTotalCount > 100) {
    gameOver.innerHTML = "Le partie est terminée";
  } else {
    if (player1Turn === false) {
      player2Turn = true;
      player2Play();
    } else {
      player1Play();
    }
  }
}
// Quand un joueur HOLD, c'est au jouieur suivant de jouer
// Quand un joueur fait 1 c'est au joueur suivant de jouer.
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function player1Play() {
  let numb = randomNumber(2, 6);
  playerOneContainer.classList.add("bg-slate-800");
  const diceImage = "../images/dice" + numb + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", diceImage);
  if (numb === 1) {
    playerOneActualCount = 0;
    player1Turn = false;
  } else {
    playerOneActualCount += numb;
  }
  currentPlayerOne.innerHTML = playerOneActualCount;
}

function player2Play() {
  let numb = randomNumber(1, 6);
  const diceImage = "../images/dice" + numb + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", diceImage);
  if (numb === 1) {
    playerTwoActualCount = 0;
    player2Turn = false;
  } else {
    playerTwoActualCount += numb;
  }
  currentPlayerTwo.innerHTML = playerTwoActualCount;
}

roll.addEventListener("click", () => {
  turnSystem();
});

save.addEventListener("click", () => {
  if (player1Turn === true) {
    playerOneTotalCount += playerOneActualCount;
    totalPlayer1.innerHTML = playerOneTotalCount;
    playerOneActualCount = 0;
    currentPlayerOne.innerHTML = playerOneActualCount;
    player1Turn = false;
    player2Turn = true;
  } else {
    playerTwoTotalCount += playerTwoActualCount;
    totalPlayer2.innerHTML = playerTwoTotalCount;
    playerTwoActualCount = 0;
    currentPlayerTwo.innerHTML = playerTwoActualCount;
    player2Turn = false;
    player1Turn = true;
  }
});

newGame.addEventListener("click", () => {
  playerOneTotalCount = 0;
  totalPlayer1.innerHTML = playerOneTotalCount;
  playerTwoTotalCount = 0;
  totalPlayer2.innerHTML = playerTwoTotalCount;
});
