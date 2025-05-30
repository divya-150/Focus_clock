let minutes = 25;
let seconds = 0;
let timer;
let isRunning = false;

const minuteDisplay = document.getElementById("minutes");
const secondDisplay = document.getElementById("seconds");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    timer = setInterval(runTimer, 1000);
    isRunning = true;
  }
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  minutes = 25;
  seconds = 0;
  updateDisplay();
});

function runTimer() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timer);
      isRunning = false;
      alert("Time's up! Take a break!");
      return;
    }
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }
  updateDisplay();
}

function updateDisplay() {
  minuteDisplay.textContent = String(minutes).padStart(2, "0");
  secondDisplay.textContent = String(seconds).padStart(2, "0");
}

// Dark mode toggle
const toggleThemeBtn = document.getElementById("toggle-theme");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});