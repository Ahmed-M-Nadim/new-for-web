"use strict";

const betta = document.querySelector("#betta");
const angle = document.querySelector("#angle");
const clown = document.querySelector("#clown");
const hero = document.querySelector("header");
const bettaButton = document.querySelector(".first");
const angleButton = document.querySelector(".second");
const clownButton = document.querySelector(".third");
const closeModal1 = document.querySelector(".close1");
const closeModal2 = document.querySelector(".close2");
const closeModal3 = document.querySelector(".close3");
const topLink = document.querySelectorAll(".topLink");
const topMenuMaster = document.querySelector("article");

for (let i = 0; i < topLink.length; i++) {
  topLink[i].addEventListener("click", () => {
    topMenuMaster.classList.add("articleVisible");
  });
}

bettaButton.addEventListener("click", () => {
  betta.style.visibility = "visible";
  hero.style.filter = "blur(6px)";
});
angleButton.addEventListener("click", () => {
  angle.style.visibility = "visible";
  hero.style.filter = "blur(6px)";
});
clownButton.addEventListener("click", () => {
  clown.style.visibility = "visible";
  hero.style.filter = "blur(6px)";
});

closeModal1.addEventListener("click", () => {
  betta.style.visibility = "hidden";
  hero.style.filter = "blur(0)";
});
closeModal2.addEventListener("click", () => {
  angle.style.visibility = "hidden";
  hero.style.filter = "blur(0)";
});
closeModal3.addEventListener("click", () => {
  clown.style.visibility = "hidden";
  hero.style.filter = "blur(0)";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && betta.style.visibility == "visible") {
    hero.style.filter = "blur(0)";
    betta.style.visibility = "hidden";
  } else if (e.key === "Escape" && angle.style.visibility == "visible") {
    hero.style.filter = "blur(0)";
    angle.style.visibility = "hidden";
  } else if (e.key === "Escape" && clown.style.visibility == "visible") {
    hero.style.filter = "blur(0)";
    clown.style.visibility = "hidden";
  } else if (e.key !== "Enter") {
    topMenuMaster.classList.remove("articleVisible");
  }
});
