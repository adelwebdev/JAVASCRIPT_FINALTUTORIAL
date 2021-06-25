const inputs = document.querySelectorAll(
  "input[type='text'], input[type='password']"
);
console.log(inputs);

const pseudoChecker = (value) => {
  const pseudoContainer = document.querySelector(".pseudo-container");
  const errorDisplay = document.querySelector(".pseudo-container > span");
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    pseudoContainer.classList.add("error");
    errorDisplay.textContent = "le pseudo doit faire en 3 et 20 caractères";
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    pseudoContainer.classList.add("error");
    errorDisplay.textContent =
      "le pseudo ne doit pas contenir de caractères spéciaux";
  } else {
    pseudoContainer.classList.remove("errore");
    errorDisplay.textContent = "";
  }
};

// const pseudoChecker = (value) => {
//   console.log(value);
// };
const emailChecker = (value) => {
  console.log(value);
};
const passwordChecker = (value) => {
  console.log(value);
};
const confirmChecker = (value) => {
  console.log(value);
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    // console.log(e.target.id);
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        pseudoChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});
