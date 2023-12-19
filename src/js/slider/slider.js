import {
    Navigation,
    Pagination,
    Autoplay,
    EffectFade,
    EffectCards,
    FreeMode,
} from "swiper/modules";

("use strict");
///////////////////////////////////////
//* fadeSlider settings
export let fadeSlider = {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    effect: "fade",
    crossfade: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 4000,
        // waitForTransition: true,
        // pauseOnMouseEnter: true,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
};

//* cardSlider settings
export let cardSlider = {
    modules: [EffectCards, Autoplay, Pagination],
    effect: "cards",
    grabCursor: true,
    cardsEffect: {
        rotate: true,
        perSlideRotate: 12,
        perSlideOffset: 1,
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
export let defaultSlider = {
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

//* rollSlider settings
export let infiniteSlider = {
    modules: [Autoplay, FreeMode],
    loop: true,
    freeMode: true,
    spaceBetween: 30,
    grabCursor: true,
    slidesPerView: "6",
    loop: true,
    autoplay: {
        delay: 0.5,
        disableOnInteraction: true,
    },
    // freeMode: true,
    speed: 5000,
    freeModeMomentum: false,
};

//////////////////////////////////
