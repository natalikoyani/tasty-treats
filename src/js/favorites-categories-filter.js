// Фільтрування рецептів по категоріям

import { renderRecipes } from './render-fav-card';
import { recipeList } from './favorites-render';
import { creatMarkupFavorite } from './favorites-render';

const favList = document.querySelector('.js-list-fav');

const categoryList = document.querySelector('.js-categories-container');

categoryList.addEventListener('click', e => {
  const categoryButtons = document.querySelectorAll('.fav-category-fltr-btn');
  if (e.target.nodeName === 'BUTTON') {
    categoryButtons.forEach(data =>
      data.classList.remove('active-category-fav')
    );
    e.target.classList.toggle('active-category-fav');

    if (e.target.id !== 'all') {
      displayRecipesByCategory(e.target.id);
    } else {
      let currentLocalStorage = localStorage.getItem('favoriteRecipes');
      let recipeList = currentLocalStorage
        ? JSON.parse(currentLocalStorage)
        : [];
      creatMarkupFavorite(recipeList);
    }
  }
});

function displayRecipesByCategory(category) {
  const filterRecipes = recipeList.filter(
    recipe => recipe.category === category
  );
  favList.innerHTML = renderRecipes(filterRecipes);
}
