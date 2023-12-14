"use strict";

let imgArr = new Glide(".glide", {
    type: "carousel",
    perView: 1,
    autoplay: 8000,
    animationDuration: 2000,
    animationTimingFunc: "cubic-bezier(.71,.35,.59,.83)",
    gap: 0,
}).mount();

// slide 2
const slider = document.getElementById("slider");
let imgArray = [
    "https://placehold.co/600x400/png",
    "https://placehold.co/800x400/png",
    "https://placehold.co/500x400/png",
];

let curIndex = 0;
const imgDuration = 3000;

function slideShow() {
    slider.className += "fadeOut";
    setTimeout(function () {
        slider.src = imgArray[curIndex];
        slider.className = "";
    }, 1000);
    curIndex++;
    if (curIndex == imgArray.length) {
        curIndex = 0;
    }
    setTimeout(slideShow, imgDuration);
}
slideShow();
