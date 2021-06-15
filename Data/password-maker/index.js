const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$*%!?;,.:/^@{}[]()#~&|<>";
const rangeValue = document.getElementById("password-lenght");
const passwordOutput = document.getElementById("password-output");

// console.log(rangeValue.value);
console.log(passwordOutput);

function generatePassword() {
  let dataPass = [];
  let password = "";

  if (lowercase.checked) dataPass.push(...dataLowercase);
  if (uppercase.checked) dataPass.push(...dataUppercase);
  if (numbers.checked) dataPass.push(...dataNumbers);
  if (symbols.checked) dataPass.push(...dataSymbols);

  if (dataPass.length === 0) {
    alert("Veuiller séléctionner des critères");
    return;
  }
  for (i = 0; i < rangeValue.value; i++) {
    // console.log(dataPass[Math.floor(Math.random() * dataPass.length)]);
    password += dataPass[Math.floor(Math.random() * dataPass.length)];
    // console.log(dataPass);
    // console.log(password);
  }
  passwordOutput.value = password;

  passwordOutput.select();
  document.execCommand("copy");

  generateButton.textContent = "Password copié!";

  setTimeout(() => {
    generateButton.textContent = "Générer mot de pass";
  }, 200);
}

// genratePassword();  ----- appelle de la fonction--------
// generateButton.addEventListener("click", () => {
// //   console.log("ca marche!");
// });

generateButton.addEventListener("click", generatePassword);
