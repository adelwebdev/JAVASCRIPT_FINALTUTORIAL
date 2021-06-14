//---------------------------------types data-------------------------------------
let string = "chaine";
let number = 23;
let boolean = true;
let vare; // type Undefined

//tableaux

let tab = ["me", "you", "them"];
// console.log(tab[0][1]); ---------se balader dans tableau

let array = ["alger", 23, true, [1, 2], { nom: "marcel lupin" }];
//console.log(array[4].nom);    -------se balader dans objet

let objet = {
  pseudo: "marcel",
  age: 33,
  technos: ["JS", "React", "NodeJs"],
  admin: false,
};

objet.adress = "22 rue du code";
console.log(objet);

let data = [
  {
    pseudo: "Marcel",
    age: 33,
    technos: ["JS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Raul",
    age: 35,
    technos: ["PHP", "React", "NodeJs"],
    admin: true,
  },
];
console.log(data);
// console.log(data[2].pseudo[0]); se balader dans les datas (data base)

// les tructures de controle -------------

//if
if (data[0].age > data[1].age) {
  console.log(data[0].pseudo + "est plus agé que " + data[1].pseudo);
} else {
}

//while
let w = 0;
while (w < 10) {
  w++;
  console.log("La valeur de w est: " + w);
}

//do while
let d = 0;
do {
  d++;
  console.log(d);
} while (d < 5);

//for
for (const user of data) {
  document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

for (i = 0; i < data.length; i++) {
  //   console.log(i);
  console.log(data[i].technos);
  document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
  document.body.innerHTML += `<h2> ${data[i].pseudo}</h2> `;
}
// console.log(data.length);
//-----------------------------switch---------------------------------------
document.body.addEventListener("click", (e) => {
  console.log(e.target.id);
  //   if (e.target.id === "javascript") {
  //     document.body.style.background = "yellow";
  //   }
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

//---------------FIRST PROJECT------------------------------------
//--------------TEXT QUI S'ANIME---------------------------------

//------------LES METHODES---------------------------------------
//------------METHODE SUR LES STRING--------------------------
let string2 = "Javascript Est Un Langage Orienté Objet";

// console.log(typeof string2);
// console.log(eval("1" + 2));
// console.log(eval(parseInt("1") + 2));
// console.log(isNaN("--34"));

console.log(string2.length);
console.log(string2[22]);
console.log(string2.indexOf("angage"));
console.log(string2.indexOf("y")); //retourne -1 s'il ne connait pas

let newString = string2.slice(2);
console.log(newString);
let newString2 = string2.slice(5, 17); // le slice découpe le text
console.log(newString2);

console.log(string2.split("i")); //le split enlève la lettre en question

console.log(string2.toLowerCase()); //tt en minuscule
console.log(string2.toUpperCase()); //tt en majuscule

console.log(string2.replace("Javascript", "PHP")); //pr remplacer

//----- les méthodes pr les numbers--------------- et oui les variables!

let numero = 43.5674;
let numeroChaine = "34.1234543 est un chiffre";
console.log(numero.toFixed(2)); // nbr de chiffre apres la virgule......
console.log(parseInt("23"));
console.log(parseInt(numeroChaine)); // prend premier chiffre qu'il trouve dans un string
console.log(parseFloat(numeroChaine)); // prend meme les chiffres apr virgules

// -------Méthode-MATH----
console.log(Math.PI);
console.log(Math.round(3.711));
console.log(Math.floor(2.7));
console.log(Math.ceil(4.1));
console.log(Math.pow(2, 8));
console.log(Math.sqrt(81));
console.log(Math.random());
console.log(Math.floor(Math.random() * 100));

//-------Les Méthodes pr les tableaux---------
let tabler = ["java", "c++", "c"];
let tabler2 = ["ruby", "delphi"];

let newTabler = tabler.concat(tabler2);
console.log(newTabler); // il concatène les 2 tableaux

let newArray = [tabler, tabler2];
console.log(newArray); //tab qui enferme 2 tableaux
let newArray2 = [...tabler, ...tabler2];
console.log(newArray2); // on a fusionné les 2 tableaux

console.log(tabler.join("  "));
console.log(newTabler.slice(1, 4));
console.log(newTabler.indexOf("ruby"));
console.log(newTabler.indexOf("python"));

newTabler.forEach((languages) => {
  console.log(languages);
});

console.log(newTabler.every((languages) => languages === "c"));
console.log(newTabler.some((languages) => languages === "c"));

// let shift = newTabler.shift();
// console.log(newTabler);
// let shift2 = newTabler.pop();
// console.log(newTabler);

const restTabler = newTabler.splice(1, 4, "python");
console.log(restTabler);
console.log(newTabler);

//--------Important--------- manip Array

let arrayNumber = [4, 23, 65, 1, 87];
console.log(arrayNumber.reduce((x, y) => x + y));
arrayNumber.push("coucou");
console.log(arrayNumber);

//--------------------------------------------------
// FILTER, SORT, MAP -----------------------Important!!!!!!!!!!!!!!!!!!!!!!
//--------------------------------------------------

console.log(arrayNumber.filter((number) => number > 10));
console.log(arrayNumber.sort());
console.log(arrayNumber.sort((a, b) => a - b));

arrayNumber.map((number) => console.log(number));
arrayNumber.map((number) => (document.body.innerHTML += number));
arrayNumber.map((number) => (document.body.innerHTML += `<li>${number}</li>`));

document.body.innerHTML += arrayNumber
  .map((number) => `<li>${number}</li>`)
  .join("");

//---------METHODE PR LES OBJETS-------------------------------------
document.body.innerHTML = data
  // .filter((user) => user.admin === false)    --------------- filtre par status: admin ou non?
  // .filter((user) => user.pseudo.includes("i"))   ------------------ letrre inclue dans le nom
  // .sort((a, b) => b.age - a.age)   -------------------- pour classer par age
  .map(
    (user) => `
<div class = "user-card">
<h2>${user.pseudo}</h2>
<p>Age : ${user.age} ans</p>
<p>Status: ${user.admin ? "Modérateur" : "Membre"}</p>
</div>
`
  )
  .join("");
