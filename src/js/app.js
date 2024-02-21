import { IG_URL, IG_KEY } from "../js/config/config";
import PhotoSwipeLightbox from "photoswipe/dist/photoswipe-lightbox.esm";

import {
    headerController,
    storyController,
    reviewSController,
    portfolioController,
    cardController,
    cardBeautyController,
    cardBridalController,
} from "../js/controller/controller.js";

// // document.addEventListener();
if (window.location.pathname === "/index.html" || "/") {
    // headerController.createHeaderSlider();
    // storyController.createSlider();
    // reviewSController.createSlider();
    // portfolioController.fetchDataAndRenderSlider(`${IG_URL}${IG_KEY}`);
}

cardController.createSlider();
cardBeautyController.createSlider();
cardBridalController.createSlider();

//! Header
const header = document.querySelector(".container-header");

let lastScrollPosition = 0;
let threshold = window.innerHeight / 2;
let scrolledPastThreshold = false;

window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;

    if (!scrolledPastThreshold && scrollPosition > threshold) {
        // Set the flag to true once we have scrolled 50vh away from the top.
        scrolledPastThreshold = true;
    }

    if (scrolledPastThreshold) {
        if (scrollPosition > lastScrollPosition && scrollPosition > threshold) {
            // Scrolling down
            if (header.classList.contains("moveDown")) {
                header.classList.remove("moveDown");
            }
        } else if (scrollPosition < lastScrollPosition) {
            // Scrolling up
            // Check if scrolled back above the 50vh threshold
            if (scrollPosition <= threshold) {
                // Reset the classes and flags when scrolling back above the 50vh threshold
                scrolledPastThreshold = false;
                // logo.style.transform = "scale(1)";
                header.classList.remove("fixed", "moveDown");
            } else {
                // logo.style.transform = "scale(0.7)";
                header.classList.add("fixed");
                header.classList.add("moveDown");
            }
        }
    }

    lastScrollPosition = scrollPosition;
});

// //!PORTFOLIO

if (window.location.pathname === "/portfolio.html") {
    const revealElement = function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("hidden");
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealElement, {
        root: null, // Use the viewport as the root
        threshold: 0.2, // The element will be revealed when 20% of it is visible
    });

    const allImages = document.querySelectorAll(".gallery-img");
    allImages.forEach(function (element) {
        sectionObserver.observe(element);
        element.classList.add("hidden");
    });

    // // renderImgs(imgZoom);

    const lightbox = new PhotoSwipeLightbox({
        gallery: "#gallery",
        children: "a",

        initialZoomLevel: "fit",
        secondaryZoomLevel: "fill",

        imageClickAction: "next",
        tapAction: "next",

        // tap delay is removed if set to false
        doubleTapAction: true,
        pswpModule: () => import("photoswipe/dist/photoswipe.esm.js"),
    });

    lightbox.init();
}
//! Contact me
// or const {Loader} = require('google-maps'); without typescript

// const loader = new Loader({
//     apiKey: "",
//     version: "weekly",
//     libraries: ["places"],
// });

// const mapOptions = {
//     center: {
//         lat: -33,
//         lng: 151.213108,
//     },
//     zoom: 4,
// };

// console.log(loader);

// loader
//     .importLibrary("maps")
//     .then(({ Map }) => {
//         new Map(document.getElementById("map"), mapOptions);
//     })
//     .catch((e) => {
//         // do something
//     });

// form handling

//! SIDE MENU

const exitButton = document.querySelector(".nav-mobile__toggle");
const sideMenuWindow = document.querySelector(".nav-mobile");
const headerMenuButton = document.querySelector(".header__button");
const dropDown = document.querySelector("#submenu-dropdown-link");

exitButton.addEventListener("click", () => {
    sideMenuWindow.style.transform = "translateX(100%)";
});

headerMenuButton.addEventListener("click", () => {
    sideMenuWindow.style.transform = "translateX(0%)";
});

dropDown.addEventListener("click", () => {
    dropDown.style.height === "20px"
        ? (dropDown.style.height = "170px")
        : (dropDown.style.height = "20px");
});
