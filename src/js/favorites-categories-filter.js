// Фільтрування по категоріям

import { renderRecipes } from './render-fav-card';

const favList = document.querySelector('.js-list-fav');

let currentLocalStorage = localStorage.getItem('favoriteRecipes');
let recipeList = currentLocalStorage ? JSON.parse(currentLocalStorage) : [];
recipeList = Array.isArray(recipeList) ? recipeList : [];

const categoryButtons = document.querySelectorAll('.fav-category-fltr-btn');
const allCategoriesBtn = document.querySelector('.btn-all-categories');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedCategory = button.id;
    displayRecipesByCategory(selectedCategory);

    allCategoriesBtn.classList.remove('active-category-fav');
  });
});

function displayRecipesByCategory(category) {
  const filterRecipes = recipeList.filter(
    recipe => recipe.category === category
  );
  favList.innerHTML = renderRecipes(filterRecipes);
}

allCategoriesBtn.addEventListener('click', handlerAllCategories);

function handlerAllCategories(e) {
  favList.innerHTML = renderRecipes(recipeList);
  allCategoriesBtn.classList.add('active-category-fav');
}
