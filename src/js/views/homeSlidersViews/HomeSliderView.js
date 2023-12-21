import {
    fadeSlider,
    cardSlider,
    defaultSlider,
    infiniteSlider,
} from "../../config/sliderconfig";
import SliderView from "../SliderView";
import Swiper from "swiper";

class homeSliderView extends SliderView {
    constructor(parentElement, config) {
        super(parentElement, config);
    }

    addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }

    _renderSlides(data) {
        const media = data.mediaUrl;
        console.log(media);
        const promises = media.map((item, index) => {
            return this._loadImage(item, index);
        });
        Promise.all(promises)
            .then((renderedSlides) => {
                this._renderOnDOM(renderedSlides);
            })
            .catch((error) => {
                console.error("Error loading images or rendering slides:", error);
            });
    }

    _loadImage(item, index) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = item;
            img.onload = () => {
                console.log(`Image loaded: ${item}`);
                const slideHTML = `<div
                    class="swiper-slide portfolio__img"
                    style="background-image: url(${item})"
                    data-swiper-slide-index="${index}">&nbsp;
                </div>`;
                resolve(slideHTML);
            };
            img.onerror = (error) => {
                reject(error);
                console.error(`Error loading image: ${item}`, error);
            };
            img.addEventListener("loadstart", () =>
                console.log(`Image load started: ${item}`)
            );
            img.addEventListener("loadend", () =>
                console.log(`Image load ended: ${item}`)
            );
        });
    }

    _renderOnDOM(renderedSlides) {
        // All images are loaded, now render the slides
        this.parentElement.innerHTML = renderedSlides.join("");

        // Initialize the Swiper instance with settings
        const swiper = new Swiper(".portfolio__slider", {
            ...this.swiperSettings,
        });

        // Notify the controller that rendering is complete
        // this.onRenderComplete();
    }
}

export const headerSlider = new homeSliderView("header", fadeSlider);
export const storySlider = new homeSliderView("story", cardSlider);
export const reviewSlider = new homeSliderView("review", defaultSlider);
export const portfolioView = new homeSliderView("portfolio", infiniteSlider);
