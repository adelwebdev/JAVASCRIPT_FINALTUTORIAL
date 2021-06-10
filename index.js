let chaine = "des lettres oui encore une fois";
let number = 34;
let boolean = true;
console.log(chaine, number, boolean);

let array = ["je", "suis", 24, false];
console.log(array);

let objet = {
  prénom: "audrey",
  age: 34,
  ville: "Bordeaux",
};

console.log(objet);
console.log(typeof number);

let arbre = null;
console.log(typeof arbre);

let total = 2;
let x = 4;

total = ++x;
console.log(total);

let xx = 2;
let yy = "2";

if (!xx) {
  console.log("x n'existe pas");
} else {
  console.log("x existe: égale à " + xx);
}
if (xx === yy && x > 3) {
  console.log("yes");
} else {
  console.log("false");
}

a = 3;
b = "3";

a === b ? console.log("vrai") : console.log("false!");

function fct(x) {
  console.log("ert" + x);
}
fct(23);
