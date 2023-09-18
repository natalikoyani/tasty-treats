import { getRecipes } from './api';
import { renderRecipes } from './render-recipe-card';

const cardGallery = document.querySelector('.cards-gallery');

export async function renderGallery() {
  const recipes = await getRecipes({});
  cardGallery.innerHTML = await renderRecipes(recipes);
}
