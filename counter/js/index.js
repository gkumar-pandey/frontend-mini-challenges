const counterValue = document.querySelector(".value");
const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".reset");
const stepInput = document.querySelector(".step");

let counter = 0;

incrementBtn.addEventListener("click", () => {
  const step = parseInt(stepInput.value);
  counter += step;
  counterValue.textContent = counter;
});

decrementBtn.addEventListener("click", () => {
  const step = parseInt(stepInput.value);
  counter -= step;
  counterValue.textContent = counter;
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});
