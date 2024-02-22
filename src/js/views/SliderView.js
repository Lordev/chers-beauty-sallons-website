
import Swiper from "swiper";
import icons from "../../../img/icons.svg";

export default class SliderView {
    constructor(parentElement, config) {
        this.parentElement = document.getElementById(parentElement);
        this.swiperSettings = {
            ...config,
        };
    }

    initSlider() {
        // Initialize the Swiper instance with settings
        const swiper = new Swiper(this.parentElement, {
            ...this.swiperSettings,
            // Other settings...
        });
    }

    _clear() {
        this.parentElement.innerHTML = "";
    }

    renderSpinner() {
        const markup = `
        <div class="spinner">
        <svg>
        <use href="${icons}#icon-loader"></use>
        </svg>
        </div> 
        `;
        this._clear();
        this.parentElement.insertAdjacentHTML("afterbegin", markup);
    }

    renderError(message = this._errorMessage) {
        const markup = `
            <div class="error">
                <div>
                    <svg>
                        <use href="${icons}#icon-alert-triangle"></use>
                    </svg>
                </div>
                <p>${message}</p>
            </div>`;
        this._clear();
        this.parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    x;

    renderMessage(message = this._message) {
        const markup = `
            <div class="message">
                <div>
                    <svg>
                        <use href="${icons}#icon-smile"></use>
                    </svg>
                </div>
                <p>${message}</p>
            </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }

    onRenderComplete() {
        // You can trigger additional events or actions when rendering is complete
    }
}
