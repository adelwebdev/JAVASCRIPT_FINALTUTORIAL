//XMLHttpRequest

function reqListener() {
  //   console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();

// --------------------La Méthode FETCH -----------------------------//
// fetch("https://api.blablagues.net/?rub=blagues")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => console.log(err));

// fetch("data.txt").then((res) => console.log(res));

fetch("data.txt").then((res) => res.text());
//   .then((data) => console.log(data));

fetch("data.json").then((res) => res.json());
// .then((data) => console.log(data));

fetch("data.json").then((res) => res.json());
// .then((data) => console.log(data));

const myHeaders = new Headers();

const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};
// fetch("data.json", init).then((res) => console.log(res));

// CRUD => CREATE (POST), READ (GET), UPDATE (PUT), DELETE (DELETE)
// const init2 = {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//   },
//   body: JSON.stringify({
//     pseudo: "From Scratch!",
//     message: "Salut!",
//   }),
//   mode: "cors",
//   credentials: "same-origin",
// };

// document.querySelector("form").addEventListener("submit", () => {
//   fetch("http://localhost:3000/posts", init2).then(() =>
//     console.log("data envoyée")
//   );
// });

const init2 = {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "From Scratch!",
    age: 34,
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/users/", init2).then(() =>
    console.log("data envoyée")
  );
});

//  -----------------------------
// Asynchrone
//  -----------------------------

setTimeout(() => {
  // console.log("test");
}, 2000);

// Promise ---------------------
// fetch("monLien").then((res) => res);

// Async / await ----------------
async function fetchData() {
  await fetch("monLien");
  // attend que le await soit exécuté avant sz faire la suite
  executeFonction();
}

const fetchData2 = async () => {
  await fetch("mon lien");
  // attend que le await soit exécuté avant sz faire la suite
  executeFonction();
};

// -------------------------------- Le JASON -----------------------------
// ----- La méthode .json() => méthode qui s'auto-resout en noyant le Body de la requête.

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    // stringify => il converti en JSON
    let settings = JSON.stringify(data);
    console.log(settings);
    // Parse => transform json en objet js
    console.log(JSON.parse(settings));
  });

//----------------------------------- Web API --------------------------------
// ---------------------------------Client Storage ----------------------------
// ----------------------------------Local Storage ----------------------------
localStorage.data = "je stock la data";
// console.log(localStorage.data);
localStorage.removeItem("data");
document.body.textContent = localStorage.data;
localStorage.user = "Denis";

const obj = {
  name: "denis",
  age: 22,
};
// -------------------Il faut passer des chaines de caractères -------------
localStorage.user = JSON.stringify(obj);
console.log(JSON.parse(localStorage.user));

//-------------------------------Session Storage ----------------------------
sessionStorage.dataSettings = "55px";
console.log(sessionStorage.dataSettings);
sessionStorage.clear();

// ----------------------------------Cookies----------------------------------
document.cookie = "username=adel";
// -------- Bonne paratique -------------------------------------------------
document.cookie = "pseudo=AB ;path=/; expire=45000; secure=samesite";
