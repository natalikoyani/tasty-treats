import { getRecipes } from './api';
import { renderRecipes } from './render-recipe-card';
import { addToFavorities } from './hearts-listener';

const cardGallery = document.querySelector('.cards-gallery');
const allCategoriesBtn = document.querySelector('.all-categories-button');

export async function renderGallery() {
  const recipes = await getRecipes({});
    cardGallery.innerHTML = await renderRecipes(recipes);
    allCategoriesBtn.classList.add('active-all-categories-btn');
    cardGallery.addEventListener('click', addToFavorities);
}
