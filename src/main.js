import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import { Notify } from 'notiflix';
import SlimSelect from 'slim-select';
import debounce from 'lodash.debounce';

import './js/hamburger-menu';
import { renderGallery } from './js/render-card-gallery.js';
import {
  onCategoryClick,
  handlerInput,
  onAllCategoriesClick,
  handlerReset,
} from './js/search';

import './js/hero.js';
import './js/fillCategories';
import './js/popular-recipes.js';
import './js/open-recipe-modal.js';
import './js/scroll-fetching.js';
import './js/loader.js'

renderGallery();
const categories = document.querySelector('.categories-list');
const searchInput = document.querySelector('.search-input');
const allCategoriesBtn = document.querySelector('.all-categories-button');
const btnReset = document.querySelector('.btn-reset');

allCategoriesBtn.addEventListener('click', onAllCategoriesClick);
categories.addEventListener('click', onCategoryClick);
searchInput.addEventListener('input', debounce(handlerInput, 300));
btnReset.addEventListener('click', handlerReset);
