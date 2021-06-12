const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
console.log(buttons);
console.log(result);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.id);
    result.textContent += e.target.id;
  });
});

equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

clear.addEventListener("click", () => {
  result.textContent = "";
});
