export class ButtonHeaderView {
	constructor(parentElement, breakpoint) {
		this.parentElement = parentElement;
		this.breakpoint = breakpoint;
		this.rendered = false;
		this.renderedEL = null;
		this.sideMenuWindow = document.getElementById('mobile-menu');
	}

	render() {
		const renderButton = `
			<label for="navi-toggle" class="header__button" id="header-menu-button">
				<span class="header__side-menu-icon">&nbsp;</span>
			</label>
		`;
		this.parentElement.insertAdjacentHTML('beforeend', renderButton);

		this.rendered = true;
		this.renderedEL = document.getElementById('header-menu-button');

		this.renderedEL.addEventListener('click', this.handleClick);
	}

	remove() {
		if (this.renderedEL !== null) {
			this.renderedEL.removeEventListener('click', this.handleClick);
			this.renderedEL.remove();
			this.renderedEL = null;
		}
		this.rendered = false;
	}

	handleClick = e => {
		e.stopPropagation();
		this.sideMenuWindow.style.transform = 'translateX(0)';
	};
}
