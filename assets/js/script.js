const div = document.querySelector(".explication");
const mousemove = document.querySelector(".mousemove");
const body = document.querySelector("body");
//console.log(div)

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.width = "100px";
  mousemove.style.height = "100px";
});

window.addEventListener("mouseup", () => {
  mousemove.style.width = "50px";
  mousemove.style.height = "50px";
});

div.addEventListener("click", () => {
  div.classList.toggle("home");
  //div.style.background = "red"
});

window.addEventListener("keypress", (k) => {
  if (k.key === "G") alert("GIGNRP");
  if (k.key === "g") alert("GIGNRP");
});
