import { getRecipes } from './api';
import { renderRecipes } from './render-recipe-card';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';

const categories = document.querySelector('.categories-list');
const allCategoriesBtn = document.querySelector('.all-categories-button');
const cardGallery = document.querySelector('.cards-gallery');
const searchInput = document.querySelector('.search-input');
const btnReset = document.querySelector('.btn-reset');

categories.addEventListener('click', onCategoryClick);

let previousRecipes = [];
let activeButton = null;

function onCategoryClick(event) {
  const clickedButton = event.target;

  if (clickedButton.className === 'name-category') {
    clearPreviousData();
    searchByCategory(clickedButton);
  }
}

async function searchByCategory(clickedButton) {
  try {
    const value = clickedButton.innerText;
    const recipes = await getRecipes({ category: value });
    console.log(recipes);
    previousRecipes = recipes;
    renderFilteredRecipes(recipes);

    if (activeButton !== null) {
      activeButton.classList.remove('active-category');
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

searchInput.addEventListener('input', debounce(handlerInput, 300));

function handlerInput(event) {
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
    console.log(recipes);
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
allCategoriesBtn.addEventListener('click', onAllCategoriesClick);

function onAllCategoriesClick() {
  clearPreviousData();
  if (activeButton !== null) {
    activeButton.classList.remove('active-category');
    activeButton = null;
  }
  searchPerform('');
}

btnReset.addEventListener('click', handlerReset);

function handlerReset() {
  if (searchInput) {
    searchInput.value = '';
  }
}
