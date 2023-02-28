// Varibale for player
let currentPlayerOne = document.getElementById("currentPlayerOne");
let totalPlayer1 = document.getElementById("totalPlayer1");

// Variable for dice
let roll = document.getElementById("roll-button");
let save = document.getElementById("save");

// Variable for scoring
let numberRandom = document.getElementById("number");

totalCount = 0;
actualCount = 0;
round = 0;
totalCount = 0;

// Class for activ player slate-700/100

// Quand un joueur HOLD, c'est au jouieur suivant de jouer
// Quand un joueur fait 1 c'est au joueur suivant de jouer.

function player1Turn() {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  let numb = randomNumber(1, 6);
  const diceImage = "../images/dice" + numb + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", diceImage);
  if (numb === 1) {
    actualCount = 0;
  } else {
    actualCount += numb;
  }
  currentPlayerOne.innerHTML = actualCount;
}

roll.addEventListener("click", () => {
  player1Turn();
});

save.addEventListener("click", () => {
  totalCount += actualCount;
  totalPlayer1.innerHTML = totalCount;
  actualCount = 0;
  currentPlayerOne.innerHTML = actualCount;
});
