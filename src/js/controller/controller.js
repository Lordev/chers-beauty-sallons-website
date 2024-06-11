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
import { ButtonHeaderView } from '../views/buttonHeaderView';
import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';

//////////////////////////////////////////////////////////////////
//* Controller Classes

class mobileMenuController {
	constructor(parentEl, exitButton, dropDown, breakPoint) {
		this.parentEl = parentEl;
		this.exitButton = exitButton;
		this.dropDown = dropDown;
		this.breakPoint = breakPoint;
		this.dropDownOpen = false;

		this.initEventListeners();
	}

	initEventListeners = () => {
		this.exitButton.addEventListener('click', e => {
			this.parentEl.style.transform = 'translateX(100%)';
		});

		if (!this.dropDown) return;
		this.dropDown.addEventListener('click', e => {
			if (!this.dropDownOpen) {
				this.dropDownOpen = true;
				this.dropDown.style.height = '156px';
			} else {
				this.dropDownOpen = false;
				this.dropDown.style.height = '20px';
			}
			console.log(this.dropDownOpen);
		});
	};
}

class HeaderButtonController {
	constructor(parentElement, breakPoint) {
		this.parentElement = document.getElementById(parentElement);
		this.breakPoint = breakPoint;
		this.sideMenuWindow = document.getElementById('mobile-menu');
		this.init();
	}

	openMenu = () => {
		if (this.parentElement && this.sideMenuWindow) {
			this.parentElement.addEventListener('click', () => {
				this.sideMenuWindow.style.transform = 'translateX(0%)';
			});
		} else {
			console.error(
				'Parent element or side menu window element is not defined'
			);
		}
	};

	renderButton = () => {
		if (this.parentElement) {
			const button = new ButtonHeaderView(
				this.parentElement,
				this.breakPoint
			);
			button.init();
		} else {
			console.error('Parent element is not defined');
		}
	};

	init = () => {
		this.renderButton();
		this.openMenu();
	};
}

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

class HeaderScrollController {
	constructor(threshold, header) {
		this.threshold = threshold;
		this.header = header;
	}

	setHeaderHeight() {
		const headerContainer = document.querySelector('.header');

		window.addEventListener('resize', () => {
			const headerHeight = this.header.getBoundingClientRect().height;
			headerContainer.style.height = `${headerHeight}px`;
		});
	}

	init() {
		this.setHeaderHeight();
		handleScroll(this.threshold, this.header);
	}
}

class MenuLinksActiveController {
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

class ImageObserverController {
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

class innerLinksController {
	constructor(links) {
		this.links = links;
		this.init();
	}

	init() {
		this.links.forEach(link => {
			const href = link.getAttribute('href');

			link.addEventListener('click', e => {
				e.preventDefault();
				e.stopPropagation();

				if (link.target === '_blank') {
					window.open(href, '_blank');
				} else {
					window.location.href = href;
				}
			});
		});
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

// Header;
export const headerScroll = new HeaderScrollController(
	window.innerHeight * 0.5,
	document.getElementById('header-sticky')
);

// Side Menu
export const mobileMenu = new mobileMenuController(
	document.getElementById('mobile-menu'),
	document.getElementById('exit-button'),
	document.getElementById('sidemenu-diensten'),
	900
);

// Header Button

export const headerSideMenuButton = new HeaderButtonController(
	'header-sticky',
	900
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

//Footer Links
const footerLinks = document.querySelectorAll('.footer__item__link');
export const footerInnerLinks = new innerLinksController(footerLinks);
