import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import { Notify } from 'notiflix';
import SlimSelect from 'slim-select';
import debounce from 'lodash.debounce';

import { renderGallery } from './js/render-card-gallery.js';

import './js/hero.js';
import './js/fillCategories';
import './js/popular-recipes.js'

renderGallery();