import { renderRecipes } from './render-fav-card';

// ===============================================

const favList = document.querySelector('.js-list-fav');
const div = document.querySelector('.js-fav-wrapper');
const image = document.querySelector('.js-hero-img');

let currentLocalStorage = localStorage.getItem('favoriteRecipes');
let recipeList = currentLocalStorage ? JSON.parse(currentLocalStorage) : [];
recipeList = Array.isArray(recipeList) ? recipeList : [];

// ====== Adaptive ======

window.addEventListener('resize', showImg);

showImg();
function showImg() {
  if (window.innerWidth < 768) {
    image.classList.add('visually-hidden');
  }
  if (window.innerWidth >= 768) {
    image.classList.remove('visually-hidden');
  }
}

// Основна ф-ція малювання карток з localStorage

function creatMarkupFavorite(arr, list) {
  let markup;
  let markupEmpty;

  if (arr.length) {
    markup = renderRecipes(recipeList);
    image.classList.remove('visually-hidden');
    favList.innerHTML = markup;
  } else {
    markupEmpty = `<div class="hero-mob-wrapper">
            <svg class="hero-fav-svg">
            <use href="./img/icons.svg#hat"></use>
          </svg>
            <p class="hero-text-fav">
              It appears that you haven't added any recipes to your favorites yet.
              To get started, you can add recipes that you like to your favorites
              for easier access in the future.
            </p>
          </div>`;
    return div.insertAdjacentHTML('beforeend', markupEmpty);
  }
}
creatMarkupFavorite(recipeList);

// Відмалювання категорій

const categoriesConteiner = document.querySelector('.js-categories-container');

const categoriesArray = recipeList.map(recipe => {
  return recipe.category;
});

function categories(categories) {
  const setCategories = [...new Set(categories)];
  const categoriesMarkup = setCategories
    .map(name => {
      return `<button class="fav-category-fltr-btn" id='${name}' type="button" data-category="${name}">${name}</button>`;
    })
    .join('');
  const all_categoriesBtnMarkup = () => {
    if (setCategories.length) {
      return `<button class="btn-all-categories  active-category-fav" type="button">All categories</button>${categoriesMarkup}`;
    } else {
      return (categoriesConteiner.innerHTML = '');
    }
  };
  categoriesConteiner.innerHTML = all_categoriesBtnMarkup();
}

categories(categoriesArray);
