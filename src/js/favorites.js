const image = document.querySelector('.js-hero-img');

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

// ===============================================

// запропонувати чи запитати import KEY_FAVORITES

// import {creatMarkupRecipes} from
import { renderRecipes } from './render-recipe-card';
// import {findRecipe} from - це для модалки у ф-ції handlerClick

const KEY_FAVORITES = 'favoriteRecipes';

const list = document.querySelector('.js-list-fav');
const div = document.querySelector('.js-fav-wrapper');
const favorites = JSON.parse(localStorage.getItem(KEY_FAVORITES)) ?? [];

// Основна ф-ція малювання карток з локалсторедж

function creatMarkupFavorite(arr, list) {
  let markup;
  let markupEmpty;
  if (arr) {
    // arr.length добавити в умову if
    markup = renderRecipes(favorites, list);
    image.classList.remove('visually-hidden');
    return (list.innerHTML = markup);
  } else {
    markupEmpty = `<div class="hero-mob-wrapper">
          <svg class="hero-fav-svg" width="" height="">
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
creatMarkupFavorite();

// Відкриття модалки

// list.addEventListener('click', handlerClick);

// function handlerClick(event) {
//   event.preventDefault();
//   const recipe = findRecipe(event.target);
//   creatModal(recipe);
// }

// Видалення картки по кліку по сердцю
// const btnHeart = document.querySelector('.heart-btn');

// btnHeart.addEventListener('click', handlerRemoveFavRecipe);

// function handlerRemoveFavRecipe(e) {
//   // localStorage.removeItem();

//   if (e.target.tagName !== 'BUTTON') {
//     return;
//   }

//   if (e.target.classList.contains('btn-heart')) {
//     e.target.classList.remove('btn-heart');
//     e.target.classList.add('btn-heart-not-active');
//     const recipeId = e.target.id;

//     // Видаляємо рецепт з масиву favoritesRecipes

//     const recipeIndex = favoritesRecipes.findIndex(
//       recipe => recipe._id === recipeId
//     );
//     // console.log(recipeIndex);
//     favoritesRecipes.splice(recipeIndex, 1);
//     // localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoritesRecipes));

//     categories(
//       favoritesRecipes.map(recipe => {
//         return recipe.category;
//       })
//     );

//   }
// }

// Відмалювання категорій

const categoriesConteiner = document.querySelector('.js-categories-container');

const categoriesArray = favorites.map(recipe => {
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
