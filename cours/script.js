//selecteurs........
// document.querySelector("h4").style.letterSpacing = "5px";

// const baliseHTML = document.querySelector("h4");
// console.log(baliseHTML);
// baliseHTML.style.background = "salmon";
// const balise2 = (document.getElementById("btn-1").style.background = "yellow");

//click events......
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const questionContainer = document.querySelector(".click-event");
const response = document.querySelector("p");

console.log(questionContainer);
console.log(btn1, btn2);
console.log(response);

questionContainer.style.borderRadius = "150px";

questionContainer.addEventListener("click", () => {
  //   questionContainer.classList.add("question-click");
  //   questionContainer.classList.remove("question-click");
  questionContainer.classList.toggle("question-click");
  //   questionContainer.style.background = "red";
  //   questionContainer.style.border = "3px solid teal";
});

btn1.addEventListener("click", () => {
  console.log("click");
  response.classList.toggle("show-response"); //AJOUTER CLASSE
  //   response.style.visibility = "visible";
  response.style.background = "green"; //AJOUTER STYLE
});
btn2.addEventListener("click", () => {
  console.log("click");
  response.classList.toggle("show-response");
  //   response.style.visibility = "visible";
  response.style.background = "red";
});

// Mouse Events//...........

const mousemove = document.querySelector(".mousemove");
console.log(mousemove);

window.addEventListener("mousemove", (e) => {
  //   console.log("MOUSEMOVE!!", e);
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  console.log("test!");
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
