import { fadeSlider } from "../../config/sliderconfig";
import SliderView from "../SliderView";
import Swiper from "swiper";

class headerSliderView extends SliderView {
    _errorMessage = `Error loading URL!`;

    constructor(parentElement, config) {
        super(parentElement, config);
    }

    renderElementOnChange() {
        const swiper = new Swiper(this.parentElement, {
            ...this.swiperSettings,
            // Other settings...
        });

        const Slides = document.querySelectorAll(".home-hero__img");
        const textBox = document.querySelectorAll(".home-hero__text-box");

        //1) First slide trigger
        document.addEventListener("DOMContentLoaded", function () {
            Slides.forEach((el) => {
                if (el.classList.contains("swiper-slide-active"))
                    setTimeout(function () {
                        el.classList.add("home-hero__img--active");
                        el.firstElementChild.classList.add("home-hero__text-box--active");
                        el.children[1].classList.add("home-hero__btn--active");
                    }, 5);
            });
        });

        //2) Slide change trigger
        swiper.on("slideChange", function () {
            let activeSlideIndex = swiper.realIndex;
            textBox.forEach((el) => {
                if (+el.dataset.textBox === activeSlideIndex + 1) {
                    setTimeout(function () {
                        el.parentElement.classList.add("home-hero__img--active");
                        el.classList.add("home-hero__text-box--active");
                        el.nextElementSibling.classList.add("home-hero__btn--active");
                    }, 5);
                } else {
                    el.classList.remove("home-hero__text-box--active");
                    el.nextElementSibling.classList.remove("home-hero__btn--active");
                    el.parentElement.classList.remove("home-hero__img--active");
                }
            });
        });
    }

    addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
}

export const headerSlider = new headerSliderView("header", fadeSlider);
