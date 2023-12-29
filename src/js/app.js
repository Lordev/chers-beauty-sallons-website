import { IG_URL, IG_KEY } from "../js/config/config";
import PhotoSwipeLightbox from "photoswipe/dist/photoswipe-lightbox.esm";
import { Loader } from "../../node_modules/@googlemaps/js-api-loader";

import {
    headerController,
    storyController,
    reviewSController,
    portfolioController,
} from "../js/controller/controller.js";

// homepage;

// document.addEventListener();
headerController.createSlider();
storyController.createSlider();
reviewSController.createSlider();
portfolioController.fetchDataAndRenderSlider(`${IG_URL}${IG_KEY}`);

// Include Lightbox

//* 1) loading images in from an array// const renderImgs = async function (images) {
//     console.log(images);
//     try {
//         const imgLoadPromises = images.map((img) => {
//             console.log(img);
//             return new Promise((resolve) => {
//                 const imageElement = new Image();
//                 console.log(imageElement);
//                 imageElement.src = img;
//                 imageElement.onload = () => {
//                     const width = imageElement.width;
//                     const height = imageElement.height;

//                     resolve(
//                         `<a href="${img}" class="link hidden img" data-pswp-width="${width}" data-pswp-height="${height}" target="_blank"><img
//                         class="hover" src="${img}" alt=""/></a>`
//                     );
//                 };
//             });
//         });

// const renderedImages = await Promise.all(imgLoadPromises);

// document.querySelector("#gallery").innerHTML = renderedImages.join("");

// Now that the images are loaded and rendered, observe them

//     } catch (err) {
//         console.error(err);
//     }
// };

//!PORTFOLIO

// const revealElement = function (entries, observer) {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.remove("hidden");
//             entry.target.classList.add("transform");
//             observer.unobserve(entry.target);
//         }
//     });
// };

// const sectionObserver = new IntersectionObserver(revealElement, {
//     root: null,
//     threshold: 0.15,
// });

// const allImages = document.querySelectorAll(".img");
// allImages.forEach(function (element) {
//     sectionObserver.observe(element);
//     element.classList.add("hidden");
// });

// // renderImgs(imgZoom);

// const lightbox = new PhotoSwipeLightbox({
//     gallery: "#gallery",
//     children: "a",

//     initialZoomLevel: "fit",
//     secondaryZoomLevel: "fill",

//     imageClickAction: "next",
//     tapAction: "next",

//     // tap delay is removed if set to false
//     doubleTapAction: false,
//     pswpModule: () => import("photoswipe/dist/photoswipe.esm"),
// });
// lightbox.init();

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
