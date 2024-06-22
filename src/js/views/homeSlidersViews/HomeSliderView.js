import {
	cardSlider,
	infiniteSlider,
	defaultSliderAuto,
	sliderBreakpointsThree,
	sliderBreakpointsFour,
} from '../../config/sliderconfig';
import SliderView from '../SliderView';
import Swiper from 'swiper';

class homeSliderView extends SliderView {
	_errorMessage = `Error loading URL!`;

	constructor(parentElement, config) {
		super(parentElement, config);
	}

	addHandlerRender(handler) {
		window.addEventListener('load', handler);
	}

	_renderSlides(data) {
		const promises = data.map((entry, index) => {
			const { mediaUrl, permalink, caption } = entry;

			return this._loadImage(mediaUrl, permalink, caption, index);
		});

		Promise.all(promises)
			.then(renderedSlides => {
				this._renderOnDOM(renderedSlides);
			})
			.catch(error => {
				console.error(
					'Error loading images or rendering slides:',
					error
				);
			});
	}

	_loadImage(item, link, caption, index) {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.src = item;
			img.onload = () => {
				// console.log(`Image loaded: ${item}`);
				const slideHTML = `<div


                class="swiper-slide infinite-slider__slide"
                data-swiper-slide-index="${index}"
            >
                <a href="${link}" target="_blank aria-label="checkout my instagram photo with caption: ${caption}">
                    <div class="infinite-slider__img"
                        style="background-image: url(${item})">
                    </div> 
                    </a>
            </div>`;
				resolve(slideHTML);
			};
			img.onerror = error => {
				reject(error);
				console.error(`Error loading image: ${item}`, error);
			};
			// img.addEventListener("loadstart", () =>
			//     console.log(`Image load started: ${item}`)
			// );
			// img.addEventListener("loadend", () =>
			//     console.log(`Image load ended: ${item}`)
			// );
		});
	}

	_renderOnDOM(renderedSlides) {
		// clearing
		this._clear();
		// All images are loaded, now render the slides
		this.parentElement.innerHTML = renderedSlides.join('');

		// Initialize the Swiper instance with settings
		const swiper = new Swiper('.api-slider', {
			...this.swiperSettings,
		});
		// Notify the controller that rendering is complete
		// this.onRenderComplete();
	}
}

export const storySlider = new homeSliderView('card', cardSlider);
export const reviewSlider = new homeSliderView(
	'default-slider',
	defaultSliderAuto
);
export const portfolioView = new homeSliderView(
	'infinite-slider',
	infiniteSlider
);
export const cardSliderCTA = new homeSliderView(
	'cards-slider',
	sliderBreakpointsThree
);
export const cardSliderBridal = new homeSliderView(
	'cards-prices-bridal',
	sliderBreakpointsFour
);
export const cardSliderBeauty = new homeSliderView(
	'cards-prices-beauty',
	sliderBreakpointsThree
);
