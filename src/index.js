let count = document.getElementById("count");
let roll = document.getElementById("roll");
let numberRandom = document.getElementById("number");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let save = document.getElementById("save");
let totalPlayer1 = document.getElementById("totalPlayer1");

totalCount = 0;
actualCount = 0;
round = 0;
totalCount = 0;

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function player1Count() {
  let numb = randomNumber(1, 6);
  numberRandom.innerHTML = numb;
  if (numb === 1) {
    actualCount = 0;
  } else {
    actualCount += numb;
  }
  count.innerHTML = actualCount;
}

roll.addEventListener("click", () => {
  player1Count();
});

save.addEventListener("click", () => {
  totalCount += actualCount;
  totalPlayer1.innerHTML = totalCount;
});
