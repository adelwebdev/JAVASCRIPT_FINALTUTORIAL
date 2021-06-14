const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$*%!?;,.:/^@{}[]()#~&|<>";

function generatePassword() {
  console.log("je génére un mot de pass");

  let dataPass = [];
  console.log(lowercase.checked);

  if (lowercase.checked) dataPass.push(dataLowercase);
  if (uppercase.checked) dataPass.push(dataUppercase);
  if (numbers.checked) dataPass.push(dataNumbers);
  if (symbols.checked) dataPass.push(dataSymbols);

  console.log(dataPass);
}
// genratePassword();  ----- appelle de la fonction--------

// generateButton.addEventListener("click", () => {
// //   console.log("ca marche!");
// });

generateButton.addEventListener("click", generatePassword);
