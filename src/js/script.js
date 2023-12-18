"use strict";
let imgArr = new Glide(".glide", {
    type: "carousel",
    perView: 1,
    autoplay: 8000,
    animationDuration: 2000,
    animationTimingFunc: "cubic-bezier(.71,.35,.59,.83)",
    gap: 0,
}).mount();

// Slider
window.addEventListener("load", () => {
    autoSlide();
});

function autoSlide() {
    setInterval(() => {
        slide(getItemActiveIndex() + 1);
    }, 5000); // slide speed = 3s
}

function slide(toIndex) {
    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item__active");

    // check if toIndex exceeds the number of carousel items
    if (toIndex >= itemsArray.length) {
        toIndex = 0;
    }

    const newItemActive = itemsArray[toIndex];

    // start transition
    newItemActive.classList.add("carousel_item__pos_next");
    setTimeout(() => {
        newItemActive.classList.add("carousel_item__next");
        itemActive.classList.add("carousel_item__next");
    }, 20);

    // remove all transition class and switch active class
    newItemActive.addEventListener(
        "transitionend",
        () => {
            itemActive.className = "carousel_item";
            newItemActive.className = "carousel_item carousel_item__active";
        },
        {
            once: true,
        }
    );
}

function getItemActiveIndex() {
    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item__active");
    const itemActiveIndex = itemsArray.indexOf(itemActive);
    return itemActiveIndex;
}

//review slider
var swiper = new Swiper(".mySwiper", {
    // effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 6000,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + "</span>";
        // },
    },
});

{
    /* <Marquee content="this is my content" />; */
}
//review slider
// var swiper = new Swiper(".test", {
//     effect: "flip",
//     grabCursor: true,
//     autoplay: true,
//     pagination: {
//         el: ".swiper-pagination",
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });
