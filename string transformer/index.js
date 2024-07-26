const input = document.querySelector(".input");
const resultContainer = document.querySelector(".result-container");

const getLowerCase = (text) => {
  return text.toLowerCase();
};

const getUpperCase = (text) => {
  return text.toUpperCase();
};

const getCamelCase = (text) => {
  let str = "";
  const wordStr = text.split(" ");

  for (let i = 0; i < wordStr.length; i++) {
    const word = wordStr[i];
    if (i === 0) {
      str += word;
    } else {
      str += word[0].toUpperCase() + word.slice(1);
    }
  }
  return str;
};

const getPascalCase = (text) => {
  let str = "";
  const wordsArr = text.split(" ");
  for (let i = 0; i < wordsArr.length; i++) {
    const word = wordsArr[i];
    str += word[0].toUpperCase() + word.slice(1);
  }
  return str;
};

const getSnakeCase = (text) => {
  return text.replaceAll(" ", "_");
};

const getKababCase = (text) => {
  return text.replaceAll(" ", "-");
};

const getTrim = (text) => {
  return text.trim();
};

const transformations = [
  { name: "Lower Case", func: getLowerCase },
  { name: "Upper Case", func: getUpperCase },
  { name: "Camel Case", func: getCamelCase },
  { name: "Pascal Case", func: getPascalCase },
  { name: "Snake Case", func: getSnakeCase },
  { name: "Kebab Case", func: getKababCase },
  { name: "Trim", func: getTrim },
];

const rendeResult = () => {
  const text = input.value;

  resultContainer.innerHTML = transformations
    .map(
      (ele, idx) => `
   <fieldset class=${ele.name}>
      <legend>Lower Case</legend>
      <p class="text">${ele.func(text)}</p>
    </fieldset>
  `
    )
    .join("");
};

input.addEventListener("input", () => {
  rendeResult();
});

rendeResult();
