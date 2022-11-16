const audio = new Howl({ src: ["car-honk.mp3"] });
// Horn
const hornl = document.getElementById("horn-l");
const hornc = document.getElementById("horn-c");
const hornr = document.getElementById("horn-r");
// Control Horn Display
const hornlh = document.getElementById("horn-lh");
const hornch = document.getElementById("horn-ch");
const hornrh = document.getElementById("horn-rh");


// Handler
hornl.addEventListener("click", (ev) => {
  ev.preventDefault();
  setTimeout(() => {
    hornlh.style.display = "none";
  }, 3000);
  hornlh.style.display = "flex";
  audio.play();
});
hornc.addEventListener("click", (ev) => {
  ev.preventDefault();
  setTimeout(() => {
    hornch.style.display = "none";
  }, 3000);
  hornch.style.display = "flex";
  audio.play();
});

hornr.addEventListener("click", (ev) => {
  ev.preventDefault();
  setTimeout(() => {
    hornrh.style.display = "none";
  }, 3000);
  hornrh.style.display = "flex";
  audio.play();
});
