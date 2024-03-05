const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const Close = document.querySelector(".close");
const body = document.querySelector(".body");


function clicked() {
  nav.classList.add("nav--visible");
  menu.classList.add("menu--hide");
  Close.classList.add("close--show");
  body.classList.add('body--no-scroll')
  body.classList.add("backdrop");
}

function back() {
  nav.classList.remove("nav--visible");
  menu.classList.remove("menu--hide");
  Close.classList.remove("close--show");
  body.classList.remove("body--no-scroll")
  body.classList.remove("backdrop");
}

menu.addEventListener("click", clicked);
Close.addEventListener("click", back);