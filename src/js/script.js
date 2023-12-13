"use strict";

let checkbox = document.querySelector("#options-hoverpause-checkbox");

new Glide(".glide", {
    type: "carousel",
    perView: 1,
    autoplay: 8000,
    animationDuration: 2000,
    animationTimingFunc: "cubic-bezier(.71,.35,.59,.83)",
    gap: 0,
}).mount();
