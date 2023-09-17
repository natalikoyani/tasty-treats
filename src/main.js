import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import { Notify } from 'notiflix';
import SlimSelect from 'slim-select';
import debounce from 'lodash.debounce';

import './js/hero.js';
import './js/fillCategories';
import './js/popular-recipes.js'
import { getRecipes } from './js/api.js';
import { renderRecipes } from './js/render-recipe-card.js';

const cardGallery = document.querySelector('.cards-gallery');

const recipes = await getRecipes({});
cardGallery.innerHTML = await renderRecipes(recipes);