import { getRecipes } from './api';
import { renderRecipes } from './render-recipe-card';
import { addHeartsEventListener } from './hearts-listener';
import { addRecipeButton } from './open-recipe-modal';

const cardGallery = document.querySelector('.cards-gallery');
const allCategoriesBtn = document.querySelector('.all-categories-button');

export async function renderGallery() {
    const recipes = await getRecipes({});
    cardGallery.innerHTML = await renderRecipes(recipes);
    allCategoriesBtn.classList.add('active-category');
    addHeartsEventListener();
    addRecipeButton('.recipe-btn')
}