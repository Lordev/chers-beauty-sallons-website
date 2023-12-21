// controller.js
import * as model from "../model/model";
import {
    headerSlider,
    storySlider,
    reviewSlider,
    portfolioView,
} from "../views/homeSlidersViews/HomeSliderView.js";

// Controller functions
class SliderController {
    constructor(model, slider) {
        this.model = model;
        this.slider = slider;
    }

    createSlider(settings) {
        this.slider.initSlider(settings);
    }

    async fetchDataAndRenderSlider(url) {
        try {
            //1) wait for fetching data
            await model.updateMedia(url);

            // console.log(model.state.mediaUrl);

            //2 render images to page

            portfolioView._renderSlides(model.state);
        } catch (err) {
            console.log(err);
        }
    }
}

// Create an instance of the controller
export const headerController = new SliderController(model, headerSlider);
export const storyController = new SliderController(model, storySlider);
export const reviewSController = new SliderController(model, reviewSlider);
export const portfolioController = new SliderController(model, portfolioView);
