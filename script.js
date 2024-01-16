const scoreCounter = document.querySelector(".score-counter");
const grid = document.querySelector(".grid");
const endGameScreen = document.querySelector(".end-game-screen")
const endGameText = document.querySelector(".end-game-text");
const playAgainButton = document.querySelector(".play-again")

const totalCells = 100;
const totalBomb = 90;
const maxScore = 5;
const bombList = [];

let score = 0;



for (let i = 1; i <= 100; i+=1) {
  const cell = document.createElement("div");
  cell.classList.add("cell");

cell.addEventListener("click", function(){
  console.log()
})

grid.appendChild(cell);
}
