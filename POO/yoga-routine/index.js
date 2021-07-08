const main = document.querySelector("main");
// console.log(main);

let exerciceArray = [
  { pic: 0, min: 1 },
  { pic: 1, min: 1 },
  { pic: 2, min: 1 },
  { pic: 3, min: 1 },
  { pic: 4, min: 1 },
  { pic: 5, min: 1 },
  { pic: 6, min: 1 },
  { pic: 7, min: 1 },
  { pic: 8, min: 1 },
  { pic: 9, min: 1 },
];

class Exercice {}

const utils = {};

const page = {
  lobby: function () {
    document.querySelector("h1").innerHTML =
      "Paramétrage <i id='reboot' class='fas fa-undo'></i>";
    main.innerHTML = "Exercices";
    document.querySelector(".btn-container").innerHTML =
      "<button id='start'>Commencer<i class='far fa-play-circle'></i></button>";
  },
  routine: function () {},
  finish: function () {},
};

page.lobby();
