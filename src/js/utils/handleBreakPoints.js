export function handleBreakPoints(screenWidth, action) {
	const checkBreakPoint = () => {
		const windowWidth = window.innerWidth;
		if (!action) return;
		if (windowWidth <= screenWidth) {
			action();
		}
	};

	checkBreakPoint();

	// Check on window resize
	window.addEventListener('resize', checkBreakPoint);
}
