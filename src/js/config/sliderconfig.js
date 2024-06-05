import {
    Navigation,
    Pagination,
    Autoplay,
    EffectFade,
    EffectCards,
    FreeMode,
} from 'swiper/modules';

///////////////////////////////////////

//* fadeSlider settings

export const defaultSlider = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
};

export const fadeSlider = {
    ...defaultSlider,
    activeIndex: 4,
    modules: [Autoplay, EffectFade],
    effect: 'fade',
    centeredSlides: true,
    crossfade: true,
    autoplay: {
        delay: 8000,
        waitForTransition: true,
    },
    loop: true,
    speed: 1500,
};

//* cardSlider settings
export const cardSlider = {
    ...defaultSlider,
    modules: [EffectCards, Autoplay],
    effect: 'cards',
    centeredSlides: true,
    cardsEffect: {
        rotate: true,
        perSlideRotate: 2,
        perSlideOffset: 9,
        slideShadows: true,
    },
    // speed: 600,
    // autoplay: {
    //     delay: 4000,
    //     waitForTransition: true,
    // },
    loop: true,
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
    loop: true,
    slidesPerView: 2,
    autoplay: {
        delay: 0.5,
        disableOnInteraction: true,
    },
    freeMode: true,
    speed: 5000,
    freeModeMomentum: false,

    breakpoints: {
        600: {
            slidesPerView: 4,
        },

        1200: {
            slidesPerView: 7,
        },

        1500: {
            slidesPerView: 9,
        },
    },
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
