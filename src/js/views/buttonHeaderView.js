export class ButtonHeaderView {
	constructor(parentElement, breakpoint) {
		this.parentElement = parentElement;
		this.breakpoint = breakpoint;
		this.rendered = false;
		this.headerMenuButton = null;
	}

	renderButton() {
		const renderButton = `
				<label for="navi-toggle" class="header__button" id="header-menu-button">
					<span class="header__side-menu-icon">&nbsp;</span>
				</label>
		`;
		this.parentElement.insertAdjacentHTML('beforeend', renderButton);
		this.rendered = true;
		this.headerMenuButton = document.getElementById('header-menu-button');
	}

	removeButton() {
		const button = this.parentElement.querySelector('.header__button');
		if (button) {
			button.remove();
		}
		this.rendered = false;
	}

	checkBreakpoint = () => {
		if (window.innerWidth <= this.breakpoint && !this.rendered) {
			this.renderButton();
		} else if (window.innerWidth > this.breakpoint && this.rendered) {
			this.removeButton();
		}
	};

	init = () => {
		this.checkBreakpoint();
		window.addEventListener('resize', this.checkBreakpoint);
	};
}
