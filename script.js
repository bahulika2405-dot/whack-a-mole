let score = 0;
let timeLeft = 30;
let gameTimer;
let moleTimer;

const grid = document.getElementById("grid");

function startGame() {
  score = 0;
  timeLeft = 30;

  document.getElementById("score").textContent = score;
  document.getElementById("time").textContent = timeLeft;

  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("gameOverScreen").classList.add("hidden");
  document.getElementById("gameScreen").classList.remove("hidden");

  createGrid();

  moleTimer = setInterval(showMole, 800);
  gameTimer = setInterval(updateTime, 1000);
}

function createGrid() {
  grid.innerHTML = "";

  for (let i = 0; i < 9; i++) {     // FOR loop
    const hole = document.createElement("div");
    hole.classList.add("hole");
    hole.addEventListener("click", () => hitMole(hole));
    grid.appendChild(hole);
  }
}

function showMole() {
  const holes = document.querySelectorAll(".hole");
  holes.forEach(hole => hole.classList.remove("mole"));

  const randomIndex = Math.floor(Math.random() * holes.length);
  holes[randomIndex].classList.add("mole");
}

function hitMole(hole) {
  if (hole.classList.contains("mole")) {
    score += 10;
    document.getElementById("score").textContent = score;
    hole.classList.remove("mole");
  }
}

function updateTime() {
  timeLeft--;
  document.getElementById("time").textContent = timeLeft;

  if (timeLeft <= 0) {      // Conditional
    endGame();
  }
}

function endGame() {
  clearInterval(moleTimer);
  clearInterval(gameTimer);

  document.getElementById("gameScreen").classList.add("hidden");
  document.getElementById("gameOverScreen").classList.remove("hidden");
  document.getElementById("finalScore").textContent = score;
}

function restartGame() {
  startGame();
}
