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

export const defaultSlider = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    spaceBetween: 100,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
};

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
    centeredSlides: true,
    cardsEffect: {
        rotate: true,
        perSlideRotate: 2,
        perSlideOffset: 9,
        slideShadows: true,
    },
    speed: 600,
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
export const defaultSliderAuto = {
    ...defaultSlider,
    modules: [Navigation, Pagination, Autoplay],
    grabCursor: true,
    autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
    },
    speed: 500,
    loop: true,
};

//* rollSlider setting
export const infiniteSlider = {
    modules: [Autoplay, FreeMode],
    loop: true,
    freeMode: true,
    spaceBetween: 0,
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

export const sliderBreakpointsFour = {
    ...defaultSlider,
    breakpoints: {
        600: {
            slidesPerView: 1,
        },

        1200: {
            slidesPerView: 2,
        },

        1500: {
            slidesPerView: 4,
        },
    },
};

export const sliderBreakpointsThree = {
    ...defaultSlider,
    breakpoints: {
        600: {
            slidesPerView: 1,
        },

        1200: {
            slidesPerView: 2,
        },

        1500: {
            slidesPerView: 3,
        },
    },
};
