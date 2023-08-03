const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const modal = document.querySelector("#modal");
const hed = document.querySelector(".hed");
const icon = document.querySelector("#icon");

btn.addEventListener("click", () => {
  modal.classList.remove("hed");
});
btn2.addEventListener("click", () => {
  modal.classList.remove("hed");
});
btn3.addEventListener("click", () => {
  modal.classList.remove("hed");
});
btn4.addEventListener("click", () => {
  modal.classList.remove("hed");
});
icon.addEventListener("click", () => {
   modal.classList.add("hed");
 });
 