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
window.addEventListener("mouseup", () => {
  console.log("test!");
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid red";
});

questionContainer.addEventListener("mouseenter", () => {
  console.log("This is mouseEnter!");
  questionContainer.style.background = "salmon";
  questionContainer.style.color = "black";
});
questionContainer.addEventListener("mouseout", () => {
  console.log("This is mouseOut!");
  questionContainer.style.background = "black";
  questionContainer.style.color = "whitesmoke";
});
response.addEventListener("mouseover", () => {
  console.log("and this, mousOver");
  response.style.transform = "rotate(2deg)";
});

//*************************************************** */
//keypress event

const keypressContainer = document.querySelector(".keypress");
// const key = document.querySelector("#key");
const key = document.getElementById("key");
console.log(keypressContainer);
console.log(key);

document.addEventListener("keypress", (e) => {
  console.log("vous appuyer sur la touche " + e.key);
  key.textContent = 'La touche est "' + e.key + '"';
});
