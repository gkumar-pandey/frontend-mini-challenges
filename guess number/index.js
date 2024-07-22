const numberInput = document.querySelector(".guess-input");
const submitBtn = document.querySelector(".submit-btn");
const resultContainer = document.querySelector(".result-container");
const startBtn = document.querySelector(".start-btn");

const numberToGuess = Math.floor(Math.random() * 100) + 1;
startBtn.disabled = true;

const guessesNumbers = [];

const rederMessage = (message, guess, guessesNumbers) => {
  guessesNumbers.push(guess);
  resultContainer.innerHTML = `
      <p>${message}</p>
      <p>Your Guesses: ${guessesNumbers}</p>
  `;
};

startBtn.addEventListener("click", () => {
  resultContainer.innerHTML = "";
  guessesNumbers.length = 0;
  startBtn.disabled = true;
});

submitBtn.addEventListener("click", () => {
  const guess = parseInt(numberInput.value);

  if (guess > numberToGuess) {
    rederMessage("Too High", guess, guessesNumbers);
  } else if (guess < numberToGuess) {
    rederMessage("Too Low", guess, guessesNumbers);
  } else {
    rederMessage("You Got it! Congrats", guess, guessesNumbers);
    startBtn.disabled = false;
  }

  numberInput.value = "";
});
