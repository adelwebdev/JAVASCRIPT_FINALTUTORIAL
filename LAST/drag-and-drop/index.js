let item;

document.addEventListener("dragstart", (e) => {
  item = e.target;
});

document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

document.addEventListener("drop", (e) => {
  e.preventDefault();
  console.log(e.target);
  e.target.appendChild(item);
});
