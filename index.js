let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");
let gameResult = document.getElementById("gameResult");
let resetBtn = document.getElementById("resetBtn");

let countdown = 25;
let randomNumber = Math.ceil(Math.random() * 100);

resetBtn.addEventListener("click", function () {
  countdown = 25;
  randomNumber = Math.ceil(Math.random() * 100);
  timerEl.textContent = countdown;
  gameResult.textContent = "";
  defuserEl.value = "";
  defuserEl.disabled = false;
  resetBtn.style.display = "none";
  intervalId = setInterval(startTimer, 1000);
  gameResult.style.backgroundColor = "unset";
});

function startTimer() {
  countdown--;
  timerEl.textContent = countdown;
  if (countdown === 0) {
    timerEl.textContent = "BOOM!";
    gameResult.textContent = "You are defeated! Better luck next time.";
    gameResult.style.backgroundColor = "#ff5252";
    clearInterval(intervalId);
    defuserEl.disabled = true;
    resetBtn.style.display = "inline";
  }
}

let intervalId = setInterval(startTimer, 1000);

defuserEl.addEventListener("keyup", function (event) {
  if (event.key === "Enter" && countdown !== 0) {
    let bombDefuserText = defuserEl.value;
    let guessedNumber = parseInt(bombDefuserText);
    
    if (isNaN(guessedNumber)) {
      gameResult.textContent = "Please provide a valid input.";
      gameResult.style.backgroundColor = "#1e217c";
    } 
    else if (guessedNumber > randomNumber) {
      gameResult.textContent = "Too High! Try Again.";
      gameResult.style.backgroundColor = "#1e217c";
    } 
    else if (guessedNumber < randomNumber) {
      gameResult.textContent = "Too Low! Try Again.";
      gameResult.style.backgroundColor = "#1e217c";
    } 
    else if (guessedNumber === randomNumber) {
      gameResult.textContent = "Congratulations! You got it right.";
      gameResult.style.backgroundColor = "green";
      timerEl.textContent = "You did it!";
      clearInterval(intervalId);
      defuserEl.disabled = true;
      resetBtn.style.display = "inline";
    }
  }
});
