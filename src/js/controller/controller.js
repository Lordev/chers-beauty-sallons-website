// controller.js
import * as model from '../model/model';
import { headerSlider } from '../views/homeSlidersViews/headerSliderView';
import {
	storySlider,
	reviewSlider,
	portfolioView,
	cardSliderCTA,
	cardSliderBeauty,
	cardSliderBridal,
} from '../views/homeSlidersViews/HomeSliderView.js';
import { ElementObserver, handleScroll } from '../utils/';

import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';

//////////////////////////////////////////////////////////////////
//* Controller Classes
class SliderController {
	constructor(model, slider) {
		this.model = model;
		this.slider = slider;
	}

	createSlider(settings) {
		this.slider.initSlider(settings);
	}

	createHeaderSlider(settings) {
		this.slider.renderElementOnChange(settings);
	}

	async fetchDataAndRenderSlider(url) {
		try {
			//0) render spinner
			this.slider.renderSpinner();
			//1) wait for fetching data
			await model.updateMedia(url);
			//2 render images to page
			// console.log(model.state.results);

			this.slider._renderSlides(model.state.results);
		} catch (err) {
			console.error(`error in controller`, err);
			this.slider.renderError();
		}
	}
}

export class HeaderScrollController {
	constructor(threshold, header) {
		this.threshold = threshold;
		this.header = header;
	}

	init() {
		handleScroll(this.threshold, this.header);
	}
}

export class MenuController {
	constructor(headerMenuButton, exitButton, sideMenuWindow, dropDown) {
		this.headerMenuButton = headerMenuButton;
		this.exitButton = exitButton;
		this.sideMenuWindow = sideMenuWindow;
		this.dropDown = dropDown;
		this.dropDownOpen = false;

		this.initEventListeners();
	}

	initEventListeners() {
		this.headerMenuButton.addEventListener('click', () => {
			this.sideMenuWindow.style.transform = 'translateX(0%)';
		});

		this.exitButton.addEventListener('click', () => {
			this.sideMenuWindow.style.transform = 'translateX(100%)';
		});

		this.dropDown.addEventListener('click', e => {
			e.stopPropagation();
			if (!this.dropDownOpen) {
				this.dropDownOpen = true;
				this.dropDown.style.height = '170px';
			} else {
				this.dropDownOpen = false;
				this.dropDown.style.transform = '20px';
			}
			console.log(this.dropDownOpen);
		});
	}
}

export class MenuLinksActiveController {
	constructor(page, menuItems, diensten, subMenuDiensten) {
		this.page = page;
		this.menuItems = menuItems;
		this.diensten = diensten;
		this.subMenuDiensten = subMenuDiensten;

		this.initActiveMenuItems();
	}

	initActiveMenuItems() {
		this.menuItems.forEach(item => {
			let href = item
				.getAttribute('href')
				.split('/')
				.pop()
				.split('.')
				.shift();
			if (href === this.page) {
				item.classList.add('header__nav__link--active');
			}
		});

		this.subMenuDiensten.forEach(item => {
			let href = item
				.getAttribute('href')
				.split('/')
				.pop()
				.split('.')
				.shift();
			if (href === this.page) {
				item.classList.add('menu-dropdown__item--active');
				this.diensten.classList.add('header__nav__link--active');
				this.diensten.setAttribute('active', 'true');
			}
		});
	}
}

export class ImageObserverController {
	constructor(threshold, elementSelector, observeClass) {
		this.imageObserver = new ElementObserver(
			threshold,
			elementSelector,
			observeClass
		);
	}

	init() {
		try {
			this.imageObserver.observeElements();
			const lightbox = new PhotoSwipeLightbox({
				gallery: '#gallery',
				children: 'a',

				initialZoomLevel: 'fit',
				secondaryZoomLevel: 'fill',

				imageClickAction: 'next',
				tapAction: 'next',

				// tap delay is removed if set to false
				doubleTapAction: true,
				pswpModule: () => import('photoswipe/dist/photoswipe.esm.js'),
			});

			lightbox.init();
		} catch (err) {
			console.error(
				`error observing gallery image in the controller`,
				err
			);
		}
	}
}

////////////////////////////////////////////////////////////////
//* Controller Instances

// Sliders
export const homeBannerSlider = new SliderController(model, headerSlider);
export const aboutCardSlider = new SliderController(model, storySlider);
export const testimonialSlider = new SliderController(model, reviewSlider);
export const instagramSlider = new SliderController(model, portfolioView);
export const ctaCardSlider = new SliderController(model, cardSliderCTA);
export const bridalPriceCardSlider = new SliderController(
	model,
	cardSliderBridal
);
export const beautyPriceCardSlider = new SliderController(
	model,
	cardSliderBeauty
);

// Header Scroll
export const headerScroll = new HeaderScrollController(
	window.innerHeight * 0.5,
	document.getElementById('header-sticky')
);

// Side Menu
const exitButton = document.getElementById('exit-button');
const headerMenuButton = document.querySelector('.header__button');
const sideMenuWindow = document.querySelector('.nav-mobile');
const dropDown = document.querySelector('#submenu-dropdown-link');
export const sideMenu = new MenuController(
	headerMenuButton,
	exitButton,
	sideMenuWindow,
	dropDown
);

// Active Menu Links
const path = window.location.pathname;
let page = path.split('/').pop().split('.').shift();
const menuItems = document.querySelectorAll('#nav-link');
const diensten = document.querySelector('#diensten');
const subMenuDiensten = document.querySelectorAll('#diensten-submenu-item');
export const activeMenuLinks = new MenuLinksActiveController(
	page,
	menuItems,
	diensten,
	subMenuDiensten
);

// Gallery Observer
export const galleryObserver = new ImageObserverController(
	0.2,
	'.gallery-img',
	'reveal-img'
);
