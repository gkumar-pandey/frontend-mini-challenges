const heightInput = document.querySelector(".height");
const weightInput = document.querySelector(".weight");
const calculateBmiBtn = document.querySelector(".calculate-bmi-btn");
const bmiValue = document.querySelector(".bmi-value");

const calculateBmi = (height, weight) => {
  const heightInMeter = height / 100;
  const bmi = weight / Math.pow(heightInMeter, 2);
  return bmi;
};

calculateBmiBtn.addEventListener("click", () => {
  const height = heightInput.value;
  const weight = weightInput.value;
  const bmi = calculateBmi(height, weight);

  bmiValue.textContent = bmi.toFixed(2);
});
