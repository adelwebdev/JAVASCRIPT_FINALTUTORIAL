//-------------------------- LES DATES EN JAVASCRIPT--------------------------//
let date = new Date();
console.log(date);

//  ---------Timestamp-----------------------------
let timestamp = Date.parse(date);
console.log(timestamp);

// ----------- Isostring---------------------------------
console.log(date.toISOString());
let iso = date.toISOString();

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return newDate;
}
console.log(dateParser(date));
console.log(dateParser(timestamp));
console.log(dateParser(iso));

//---------------------------DESTRUCTURING--------------------------------------//

let moreData = {
  destVar: ["element1", "Element2"],
};

const { destVar } = moreData;

console.log(moreData.destVar[0]);
console.log(moreData.destVar);
console.log(destVar);

let array5 = [45, 23, 34];
let [x, y, z] = array5;
// console.log(z);

console.log(iso);

const dateDest = (chaine) => {
  let newDate = chaine.split("T")[0];
  let [y, m, d] = newDate.split("-");
  return [d, m, y].join("/");
};

console.log(dateDest(iso));

// ----- LES DATASETS -------------------------------

const h3js = document.getElementById("javascript");
console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll("h3");

h3.forEach((language) => console.log(language.dataset.lang));

// ------- LES REGEX ------------------------------------

let mail = "admb34@yandex.ru";
console.log(mail.search(/frscceeceom/));
console.log(mail.replace(/ad/, "de"));
console.log(mail.match(/ADM/i));
console.log(mail.match(/[zugm]/));
console.log(mail.match(/[37]/));
//tous les chiffres-------
console.log(mail.match(/\a/));
console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));

let separator = 324434554433;

console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")); // ------IMPORTANT!!
