import { renderRecipes } from './render-fav-card';

// ===============================================

// import {findRecipe} from - це для модалки у ф-ції handlerClick

const favList = document.querySelector('.js-list-fav');
const div = document.querySelector('.js-fav-wrapper');
const image = document.querySelector('.js-hero-img');

const recipeBtnFav = document.querySelector('.recipe-btn');
const recipeCardFav = document.querySelector('.recipe-card');

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

let currentLocalStorage = localStorage.getItem('favoriteRecipes');
let recipeList = currentLocalStorage ? JSON.parse(currentLocalStorage) : [];
recipeList = Array.isArray(recipeList) ? recipeList : [];

// Основна ф-ція малювання карток з localStorage

function creatMarkupFavorite(arr, list) {
  let markup;
  let markupEmpty;

  if (arr.length) {
    markup = renderRecipes(recipeList);

    image.classList.remove('visually-hidden');
    favList.innerHTML = markup;

    // recipeCardFav.classList.add('recipe-card-favorites');
    // recipeBtnFav.classList.add('recipe-btn-favorites');
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
      return `<button class="fav-category-fltr-btn" id='${name}' type="button">${name}</button>`;
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

// Відкриття модалки

// list.addEventListener('click', handlerClick);

// function handlerClick(event) {
//   event.preventDefault();
//   const recipe = findRecipe(event.target);
//   creatModal(recipe);
// }

// фільтрування по категоріям

// const categoryButtons = document.querySelectorAll('.fav-category-fltr-btn');
// const allCategoriesBtn = document.querySelector('.btn-all-categories');

// categoryButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const selectedCategory = button.id;
//     displayRecipesByCategory(selectedCategory);
//   });
// });

// function displayRecipesByCategory(category) {
//   const filterRecipes = recipeList.filter(
//     recipe => recipe.category === category
//   );
//   favList.innerHTML = renderRecipes(filterRecipes);
//   allCategoriesBtn.addEventListener('click', handlerAllCategories);
// }

// function handlerAllCategories(e) {
//   favList.innerHTML = renderRecipes(recipeList);
// }

// Видалення картки по кліку по сердцю

// const btnHearts = document.querySelectorAll('.heart-filled');

// btnHearts.forEach(heart => {
//   heart.addEventListener('click', removeCard);
// });

// function removeCard(e) {
//   const card = e.target.closest('.recipe-card');
//   let recipeId = e.currentTarget.dataset._id;
//   let indexOfRecipe = recipeList.findIndex(recipe => recipe._id === recipeId);
//   console.dir(card);

//   if (indexOfRecipe !== -1) {
//     card.remove();
//     recipeList.splice(indexOfRecipe, 1);
//     localStorage.setItem('favoriteRecipes', JSON.stringify(recipeList));
//   }
// }

// ===========
