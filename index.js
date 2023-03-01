// get element for player
let currentPlayerOne = document.getElementById("currentPlayerOne");
let currentPlayerTwo = document.getElementById("currentPlayerTwo");
let totalPlayer1 = document.getElementById("totalPlayer1");
let totalPlayer2 = document.getElementById("totalPlayer2");

// Get element for container
let playerOneContainer = document.getElementById("player1Container");
let playerTwoContainer = document.getElementById("player2Container");
let playerOneActive = document.getElementById("player1Active");
let playerTwoActive = document.getElementById("player2Active");

// Variable for dice
let roll = document.getElementById("rollButton");
let save = document.getElementById("holdButton");
let diceIMG = document.getElementById("dice");

// get element for scoring
let numberRandom = document.getElementById("number");
let gameOver = document.getElementById("gameOver");
let newGame = document.getElementById("newGame");

playerOneTotalCount = 0;
playerTwoTotalCount = 0;
playerOneActualCount = 0;
playerTwoActualCount = 0;
gameFinish = false;
player1Turn = true;
player2Turn = false;

// TODO : animate dice roll
// TODO : Optimize logic
// TODO : Cleaning code and logic

//

function turnSystem() {
  if (player1Turn === false) {
    player2Turn = true;
    player2Play();
  } else {
    player1Turn = true;
    player1Play();
  }
}

function holdSystem() {
  if (player1Turn === true) {
    playerOneTotalCount += playerOneActualCount;
    totalPlayer1.innerHTML = playerOneTotalCount;
    if (playerOneTotalCount >= 100 || playerTwoTotalCount >= 100) {
      gameOver.style.visibility = "visible";
      gameFinish = true;
    } else {
      playerOneActualCount = 0;
      currentPlayerOne.innerHTML = playerOneActualCount;
      playerOneContainer.classList.remove("bg-red-400");
      playerOneActive.classList.remove("activePlayer");
      playerTwoContainer.classList.add("bg-red-400");
      playerTwoActive.classList.add("activePlayer");
      player1Turn = false;
      player2Turn = true;
    }
  } else {
    playerTwoTotalCount += playerTwoActualCount;
    totalPlayer2.innerHTML = playerTwoTotalCount;
    if (playerOneTotalCount >= 100 || playerTwoTotalCount >= 100) {
      gameOver.style.visibility = "visible";
      gameFinish = true;
    } else {
      playerTwoActualCount = 0;
      currentPlayerTwo.innerHTML = playerTwoActualCount;
      playerTwoContainer.classList.remove("bg-red-400");
      playerTwoActive.classList.remove("activePlayer");
      playerOneContainer.classList.add("bg-red-400");
      playerOneActive.classList.add("activePlayer");
      player2Turn = false;
      player1Turn = true;
    }
  }
}

function player1Play() {
  let numb = Math.floor(Math.random() * (7 - 1) + 1);
  const diceImage = "/images/dice" + numb + ".png";
  diceIMG.setAttribute("src", diceImage);
  if (numb === 1) {
    playerOneContainer.classList.remove("bg-red-400");
    playerOneActive.classList.remove("activePlayer");
    playerTwoContainer.classList.add("bg-red-400");
    playerTwoActive.classList.add("activePlayer");
    playerOneActualCount = 0;
    player1Turn = false;
    player2Turn = true;
  } else {
    playerOneActualCount += numb;
  }
  currentPlayerOne.innerHTML = playerOneActualCount;
}

function player2Play() {
  let numb = Math.floor(Math.random() * (6 - 1) + 1);

  const diceImage = "../images/dice" + numb + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", diceImage);
  if (numb === 1) {
    playerTwoContainer.classList.remove("bg-red-400");
    playerTwoActive.classList.remove("activePlayer");
    playerOneContainer.classList.add("bg-red-400");
    playerOneActive.classList.add("activePlayer");
    playerTwoActualCount = 0;
    player2Turn = false;
    player1Turn = true;
  } else {
    playerTwoActualCount += numb;
  }
  currentPlayerTwo.innerHTML = playerTwoActualCount;
}

roll.addEventListener("click", () => {
  gameFinish ? null : turnSystem();
});

save.addEventListener("click", () => {
  gameFinish ? null : holdSystem();
});

newGame.addEventListener("click", () => {
  playerOneTotalCount = 0;
  playerOneActualCount = 0;
  currentPlayerOne.innerHTML = 0;
  totalPlayer1.innerHTML = playerOneTotalCount;
  playerTwoTotalCount = 0;
  playerTwoActualCount = 0;
  currentPlayerTwo.innerHTML = 0;
  totalPlayer2.innerHTML = playerTwoTotalCount;
  gameOver.style.visibility = "hidden";
  gameFinish = false;
  player1Turn = true;
  player2Turn = false;
});
