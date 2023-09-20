import { getRecipes } from './api';
import { renderRecipes } from './render-recipe-card';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';

const cardGallery = document.querySelector('.cards-gallery');
const searchInput = document.querySelector('.search-input');
const allCategoriesBtn = document.querySelector('.all-categories-button');

let previousRecipes = [];
let activeButton = null;

export function onCategoryClick(event) {
  const clickedButton = event.target;

  if (clickedButton.className === 'name-category') {
    allCategoriesBtn.classList.remove('active-all-categories-btn');

    clearPreviousData();
    searchByCategory(clickedButton);
  }
}

async function searchByCategory(clickedButton) {
  try {
    const value = clickedButton.innerText;
    const recipes = await getRecipes({ category: value });
    previousRecipes = recipes;
    renderFilteredRecipes(recipes);

    if (activeButton !== null) {
      activeButton.classList.remove('active-category');
    }
    if (allCategoriesBtn.classList.contains('active-all-categories-btn')) {
      allCategoriesBtn.classList.remove('active-all-categories-btn');
    }

    clickedButton.classList.add('active-category');
    activeButton = clickedButton;
  } catch (error) {
    console.log(error);
  }
}

function renderFilteredRecipes(recipes) {
  cardGallery.innerHTML = renderRecipes(recipes);
}

function clearPreviousData() {
  previousRecipes = [];
}

export function handlerInput(event) {
  const query = event.target.value;
  searchPerform(query.trim());
}

async function searchPerform(query) {
  try {
    const categoryFilter = document.querySelector(
      '.name-category.active-category'
    );
    let categoryValue = '';

    if (categoryFilter) {
      categoryValue = categoryFilter.innerText;
    }

    const recipes = await getRecipes({ title: query, category: categoryValue });
    previousRecipes = recipes;
    if (recipes.length === 0) {
      Notify.failure('Oops! Something went wrong! Try again later');
    } else {
      renderFilteredRecipes(recipes);
    }
  } catch (error) {
    console.log(error);
  }
}

export function onAllCategoriesClick() {
  clearPreviousData();
  searchInput.value = '';
  if (activeButton !== null) {
    activeButton.classList.remove('active-category');
    activeButton = null;
    allCategoriesBtn.classList.add('active-all-categories-btn');
  }
  searchPerform('');
}

export function handlerReset() {
  if (searchInput) {
    searchInput.value = '';
  }
  searchPerform('');
}
