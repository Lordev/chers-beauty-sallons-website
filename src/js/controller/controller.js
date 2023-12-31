// controller.js
import * as model from "../model/model";
import {
    storySlider,
    reviewSlider,
    portfolioView,
} from "../views/homeSlidersViews/HomeSliderView.js";
import { headerSlider } from "../views/homeSlidersViews/headerSliderView";

// Controller functions
class SliderController {
    constructor(model, slider) {
        this.model = model;
        this.slider = slider;
    }

    createSlider(settings) {
        this.slider.initSlider(settings);
    }

    createHeaderSlider(settings) {
        this.slider.renderElementOnChange(settings);
    }

    async fetchDataAndRenderSlider(url) {
        try {
            //0) render spinner
            this.slider.renderSpinner();
            //1) wait for fetching data
            await model.updateMedia(url);
            //2 render images to page
            // console.log(model.state.results);

            this.slider._renderSlides(model.state.results);
        } catch (err) {
            console.error(`error in controller`, err);
            this.slider.renderError();
        }
    }
}

// Create an instance of the controller
export const headerController = new SliderController(model, headerSlider);
export const storyController = new SliderController(model, storySlider);
export const reviewSController = new SliderController(model, reviewSlider);
export const portfolioController = new SliderController(model, portfolioView);
