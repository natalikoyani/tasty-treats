import { renderRecipes } from './render-recipe-card';

// ===============================================

// import {findRecipe} from - це для модалки у ф-ції handlerClick

const favList = document.querySelector('.js-list-fav');
const div = document.querySelector('.js-fav-wrapper');
const image = document.querySelector('.js-hero-img');

// const recipeBtnFav = document.querySelector('.recipe-btn');
// const recipeCardFav = document.querySelector('.recipe-card');

// ====== Adaptive

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
// const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) ?? [];
console.log(recipeList);

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
      return `<button class="btn-all-categoris  active_all-categories" type="button">All categories</button>${categoriesMarkup}`;
    } else {
      return '';
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

// Видалення картки по кліку по сердцю

// const btnHeart = document.querySelector('.heart-svg');

// btnHeart.addEventListener('click', handlerRemoveFavRecipe);

// function handlerRemoveFavRecipe(e) {
//   // localStorage.removeItem();

//   if (e.target.tagName !== 'BUTTON') {
//     return;
//   }

//   if (e.target.classList.contains('heart-filled')) {
//     e.target.classList.remove('heart-filled');
//     e.target.classList.add('heart-svg');
//     const recipeId = e.target.id;

//     // Видаляємо рецепт з масиву favoritesRecipes

//     const recipeIndex = recipeList.findIndex(recipe => recipe._id === recipeId);
//     // console.log(recipeIndex);
//     recipeList.splice(recipeIndex, 1);
//     // localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoritesRecipes));

//     // categories(
//     //   favoritesRecipes.map(recipe => {
//     //     return recipe.category;
//     //   })
//     // );
//   }
// }
