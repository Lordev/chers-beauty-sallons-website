export function handleBreakPoints(action) {
	const screenWidth = window.innerWidth;
	if (screenWidth <= 600) {
		action();
	}
}
