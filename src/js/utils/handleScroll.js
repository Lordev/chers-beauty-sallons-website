export function handleScroll(threshold, header) {
	let scrolledPastThreshold = false;
	let lastScrollPosition = 0;

	function scrollHandler() {
		let scrollPosition = window.scrollY;

		if (!scrolledPastThreshold && scrollPosition > threshold) {
			const headerInner = document.getElementById('header-sticky');
			const header = document.querySelector('.header');
			const headerHeight = headerInner.getBoundingClientRect().height;
			header.style.height = `${headerHeight}px`;
			scrolledPastThreshold = true;
		}

		if (!scrolledPastThreshold && scrollPosition <= threshold) {
			header.classList.remove(
				'animate-move-up',
				'header--sticky',
				'animate-move-down'
			);
			// Reset the header to init state
		}

		if (scrolledPastThreshold) {
			if (
				scrollPosition > lastScrollPosition &&
				scrollPosition > threshold
			) {
				// Scrolling down
				if (header.classList.contains('animate-move-down')) {
					header.classList.remove('animate-move-down');
					header.classList.add('animate-move-up');
				}
			} else if (scrollPosition < lastScrollPosition) {
				scrolledPastThreshold = false;
				// Scrolling up
				header.classList.remove('animate-move-up');
				header.classList.add('animate-move-down', 'header--sticky');
			}
		}

		lastScrollPosition = scrollPosition;
	}

	// Attach the scroll event listener
	window.addEventListener('scroll', scrollHandler);

	// Return a function to disconnect the scroll event listener
	return function disconnectScrollHandler() {
		window.removeEventListener('scroll', scrollHandler);
	};
}
