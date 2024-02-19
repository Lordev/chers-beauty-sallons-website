export default function respondToScreenWidthPhone(action) {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 600) {
        action();
    }
}
