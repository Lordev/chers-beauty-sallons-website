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
	revealLeft,
	revealRight,
	revealBottom,
	revealSection,
	mobileMenu,
	headerSideMenuButton,
} from '../js/controller/controller.js';

// Initialize menu active controller
activeMenuLinks.initActiveMenuItems();

// Initialize header scroll controller
headerScroll.init();
mobileMenu.init();
headerSideMenuButton.init();

// Initialize footer links controller
const path = window.location.pathname;
footerInnerLinks.init();

// Initialize reveal animations
revealLeft.observeElements();
revealRight.observeElements();
revealBottom.observeElements();
revealSection.observeElements();

// gallery
portfolioGallery.init();

console.log(process.env.IG_URL);

// Initialize sliders
if (path === '/index.html' || path === '/') {
	homeBannerSlider.createHeaderSlider();
	aboutCardSlider.createSlider();
	testimonialSlider.createSlider();
	instagramSlider.fetchDataAndRenderSlider(
		`${process.env.IG_URL}&access_token=${process.env.IG_KEY}&limit=${process.env.LIMIT_FETCH_IG}`
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

if (path === '/portfolio.html') {
	galleryImageObserver.observeElements();
}
