export class MobileMenuView {
	constructor(sideMenuWindow, breakpoint) {
		this.renderTarget = document.getElementById('nav-mobile');
		this.sideMenu = sideMenuWindow;
		this.breakPoint = breakpoint;
	}

	sideMenuHTML = () => {
		const sideMenu = html``;

		this.renderTarget.insertAdjacentHTML('beforeend', sideMenu);
	};

	renderMenu = () => {
		if (window.innerWidth <= this.breakPoint) {
			this.rendersideMenu();
			this.sideMenu.initEventListeners();
		} else {
			this.renderTarget.innerHTML = '';
		}
	};
}
