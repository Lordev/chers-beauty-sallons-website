import { IG_URL, IG_KEY } from './config/_config';
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
	galleryObserver,
} from '../js/controller/controller.js';

// Initialize menu active controller
activeMenuLinks.initActiveMenuItems();

// Initialize header scroll controller
headerScroll.init();

// Initialize footer links controller
const path = window.location.pathname;
footerInnerLinks.init();

// Initialize sliders
if (path === '/index.html' || path === '/') {
	homeBannerSlider.createHeaderSlider();
	aboutCardSlider.createSlider();
	testimonialSlider.createSlider();
	// instagramSlider.fetchDataAndRenderSlider(`${IG_URL}${IG_KEY}`);
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

// Initialize gallery observer

if (path === '/portfolio.html') {
	galleryObserver.init();
}
