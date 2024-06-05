import { fadeSlider } from '../../config/sliderconfig';
import SliderView from '../SliderView';
import Swiper from 'swiper';

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

        const sliderEl = document.querySelectorAll('.home-hero__img');

        //1) First slide trigger
        document.addEventListener('DOMContentLoaded', function () {
            sliderEl.forEach(el => {
                if (el.classList.contains('swiper-slide-active'))
                    el.classList.add('home-hero__img--active');
            });
        });

        //2) Slide change trigger
        swiper.on('slideChange', function () {
            const activeSlideIndex = swiper.realIndex;
            sliderEl.forEach((el, index) => {
                if (index === activeSlideIndex) {
                    el.classList.add('home-hero__img--active');
                } else {
                    el.classList.remove('home-hero__img--active');
                }
            });
        });
    }

    addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }
}

export const headerSlider = new headerSliderView('header', fadeSlider);
