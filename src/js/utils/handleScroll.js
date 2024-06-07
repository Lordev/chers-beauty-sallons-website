export function handleScroll(threshold, header) {
	let scrolledPastThreshold = false;
	let lastScrollPosition = 0;

	function scrollHandler() {
		let scrollPosition = window.scrollY;

		if (!scrolledPastThreshold && scrollPosition > threshold) {
			scrolledPastThreshold = true;
			// Set the flag to true once we have scrolled past the threshold.
		}

		if (scrolledPastThreshold) {
			if (
				scrollPosition > lastScrollPosition &&
				scrollPosition > threshold
			) {
				// Scrolling down
				if (header.classList.contains('moveDown')) {
					header.classList.remove('moveDown');
				}
			} else if (scrollPosition < lastScrollPosition) {
				if (scrollPosition <= threshold) {
					// Reset the classes and flags when scrolling back above the threshold
					scrolledPastThreshold = false;
					header.classList.remove('fixed', 'moveDown');
				} else {
					header.classList.add('fixed');
					header.classList.add('moveDown');
				}
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
