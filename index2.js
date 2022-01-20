const imag = document.querySelector("#img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5");
const ring = (key) => {
  const audio = new Audio();
  audio.src = "./mp3/" + key + ".mp3";
  audio.play();
};

imag.addEventListener("click", (e) => {
  ring("tajine");
});

img2.addEventListener("click", (e) => {
  ring("4x4");
});

img3.addEventListener("click", (e) => {
  ring("pq");
});

img4.addEventListener("click", (e) => {
  ring("choix");
});

img5.addEventListener("click", (e) => {
  ring("croc");
});
