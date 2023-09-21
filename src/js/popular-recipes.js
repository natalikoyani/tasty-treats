import { getPopularRecipes } from './api';
import { createMarkupPopularRecipes } from './render-popular';
import { openModelById } from './open-recipe-modal';

const popularRecipesContainer = document.querySelector('.popular-recipes-card');

window.addEventListener('resize', updatePopularRecipes);
updatePopularRecipes();

async function updatePopularRecipes() {
  await getPopularRecipes().then(response => {
    const numElements = window.innerWidth < 768 ? 2 : 4;
    const slicedRecipes = response.slice(0, numElements);
    const markup = createMarkupPopularRecipes(slicedRecipes);
    popularRecipesContainer.innerHTML = markup;

    popularRecipesContainer.addEventListener('click', event => {
      if (event.target.nodeName === 'BUTTON') {
        openModelById(event.target.dataset.id);
        console.log(event.target.dataset.id);
      }
    });
  });
}
