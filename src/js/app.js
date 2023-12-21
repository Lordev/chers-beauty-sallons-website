import { IG_URL, IG_KEY } from "../js/config/config";
import {
    headerController,
    storyController,
    reviewSController,
    portfolioController,
} from "../js/controller/controller.js";

headerController.createSlider();
storyController.createSlider();
reviewSController.createSlider();
portfolioController.fetchDataAndRenderSlider(`${IG_URL}${IG_KEY}`);
