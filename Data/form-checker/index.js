const inputs = document.querySelectorAll(
  "input[type='text'], input[type='password']"
);
console.log(inputs);

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    console.log(e.target.id);
  });
});
