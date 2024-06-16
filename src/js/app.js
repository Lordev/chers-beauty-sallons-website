import { IG_URL, IG_KEY, LIMIT_FETCH_IG } from './config/_config';
import {
	homeBannerSlider,
	aboutCardSlider,
	testimonialSlider,
	bridalPriceCardSlider,
	beautyPriceCardSlider,
	ctaCardSlider,
	instagramSlider,
	headerScroll,
	footerInnerLinks,
	activeMenuLinks,
	galleryImageObserver,
	portfolioGallery,
	beautyGallery,
	revealLeft,
	revealRight,
	revealBottom,
	editorialsGallery,
	revealSection,
} from '../js/controller/controller.js';

// Initialize menu active controller
activeMenuLinks.initActiveMenuItems();

// Initialize header scroll controller
headerScroll.init();

// Initialize footer links controller
const path = window.location.pathname;
footerInnerLinks.init();

// Initialize reveal animations
revealLeft.observeElements();
revealRight.observeElements();
revealBottom.observeElements();
revealSection.observeElements();

// Initialize sliders
if (path === '/index.html' || path === '/') {
	homeBannerSlider.createHeaderSlider();
	aboutCardSlider.createSlider();
	testimonialSlider.createSlider();
	instagramSlider.fetchDataAndRenderSlider(
		`${IG_URL}${IG_KEY}&limit=${LIMIT_FETCH_IG}`
	);
}

if (
	path === '/tarieven.html' ||
	path === '/bruidsmake-up.html' ||
	path === '/beauty-en-party.html'
) {
	bridalPriceCardSlider.createSlider();
	beautyPriceCardSlider.createSlider();
	ctaCardSlider.createSlider();
}

if (path === '/bruidsmake-up.html') {
	beautyGallery.init();
}

if (path === '/editorials.html') {
	editorialsGallery.init();
}

if (path === '/portfolio.html') {
	galleryImageObserver.observeElements();
	portfolioGallery.init();
}
