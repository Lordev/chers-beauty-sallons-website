import Swiper from "swiper";
import { cardSlider, defaultSlider, fadeSlider, infiniteSlider } from "./slider/slider";

("use strict");

//////////////////////////////////
//* Homepage
new Swiper(".header__swiper", fadeSlider);
new Swiper(".story__swiper", cardSlider);
new Swiper(".reviews__swiper", defaultSlider);
new Swiper(".portfolio__slider", infiniteSlider);
