import { getRecipes } from './api';

const categories = document.querySelector('.categories-list');
const allCategoriesBtn = document.querySelector('.all-categories-button');

categories.addEventListener('click', onCategoryClick);

let previousRecipes = [];
let activeButton = null;

function onCategoryClick(event) {
  const value = event.target.innerText;
  const clickedButton = event.target;

  if (clickedButton.className === 'name-category') {
    clearPreviousData();
    searchByCategory(value);

    if (activeButton !== null) {
      activeButton.classList.remove('active-category');
    }

    clickedButton.classList.add('active-category');
    activeButton = clickedButton;
  }
}

async function searchByCategory(value) {
  try {
    const recipes = await getRecipes({ category: value });
    console.log(recipes.results);
    previousRecipes = recipes.results;
  } catch (error) {
    console.log(error);
  }
}

function clearPreviousData() {
  previousRecipes = [];
}

//при кліку на кнопку відмалювання карточек рецептів
allCategoriesBtn.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  const clickedButton = event.target;
  searchAllRecipies();
  if (activeButton !== null) {
    activeButton.classList.remove('active-category');
  }
  clickedButton.classList.add('active-category');
  activeButton = clickedButton;
}

// цю функцію необхідно додати в основний файл для
//відмальовки всіх карточек рецептів при завантаженні сторінки Home
async function searchAllRecipies() {
  try {
    const allRecipes = await getRecipes({});
    console.log(allRecipes.results);
  } catch (error) {
    console.log(error);
  }
}
