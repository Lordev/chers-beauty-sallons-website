import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";

export let swiperReview = {
    modules: [Navigation, Pagination, Autoplay, FreeMode],
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
