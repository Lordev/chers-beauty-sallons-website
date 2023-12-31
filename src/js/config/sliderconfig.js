import {
    Navigation,
    Pagination,
    Autoplay,
    EffectFade,
    EffectCards,
    FreeMode,
} from "swiper/modules";
import { PORTFOLIO_IMGS } from "./config";

///////////////////////////////////////
//* fadeSlider settings
export const fadeSlider = {
    activeIndex: 4,
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    effect: "fade",
    crossfade: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 8000,
        waitForTransition: true,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
        clickable: true,
    },
    speed: 1500,
};

//* cardSlider settings
export const cardSlider = {
    modules: [EffectCards, Autoplay, Pagination],
    effect: "cards",
    grabCursor: true,
    cardsEffect: {
        rotate: true,
        perSlideRotate: 8,
        perSlideOffset: 2,
        slideShadows: true,
    },
    autoplay: {
        delay: 4000,
        waitForTransition: true,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
};

//* defaultSlider settings
export const defaultSlider = {
    grabCursor: true,
    modules: [Navigation, Pagination, Autoplay],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
};

//* rollSlider setting
export const infiniteSlider = {
    modules: [Autoplay, FreeMode],
    loop: true,
    freeMode: true,
    spaceBetween: 5,
    grabCursor: true,
    slidesPerView: PORTFOLIO_IMGS - 3,
    loop: true,
    autoplay: {
        delay: 0.5,
        disableOnInteraction: true,
    },
    freeMode: true,
    speed: 5000,
    freeModeMomentum: false,
};
