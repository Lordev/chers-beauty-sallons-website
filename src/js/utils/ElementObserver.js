export class ElementObserver {
	constructor(threshold = 0.2, elementSelector, observeClass = 'observe') {
		this.observer = null;
		this.threshold = threshold;
		this.elementSelector = elementSelector;
		this.observeClass = observeClass;
	}

	observeElements() {
		const revealElement = (entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add(this.observeClass);
					entry.target.classList.remove(this.elementSelector);
					observer.unobserve(entry.target);
				}
			});
		};

		this.observer = new IntersectionObserver(revealElement, {
			root: null,
			threshold: this.threshold,
		});

		const allElements = Array.from(
			document.getElementsByClassName(this.elementSelector)
		);

		allElements.forEach(element => {
			this.observer.observe(element);
			element.classList.add(this.observeClass);
		});
	}

	disconnectObserver() {
		if (this.observer) {
			this.observer.disconnect();
		}
	}
}
