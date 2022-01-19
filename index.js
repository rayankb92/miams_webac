// const nav = document.querySelector("nav");

// window.addEventListener("scroll", (e) => {
//   if (window.scrollY > 120) {
//     nav.style.top = 0;
//   }
// });

// const response = document.querySelector("#js");
// response.classList.add("show-response");

// window.addEventListener("DOMContentLoaded", (event) => {
//   response.id.remove("#js");

//   response.classList.add("show-response");
// });

const btn = document.querySelector("#btnmap1");
const btn2 = document.querySelector("#btnmap2");
const btn3 = document.querySelector("#btnmap3");
const map = document.querySelector("#map1");
const map2 = document.querySelector("#map2");
const map3 = document.querySelector("#map3");

btn.addEventListener("click", () => {
  map.style.display = "block";
});

btn2.addEventListener("click", () => {
  map2.style.display = "block";
});

btn3.addEventListener("click", () => {
  map3.style.display = "block";
});
