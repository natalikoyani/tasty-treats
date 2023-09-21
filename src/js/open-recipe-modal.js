import { getRecipeById } from './api';
import { renderModalRecipe } from './recipe-modal';
import { changeFavoriteButton } from './change-favorite-modal-button';
import { resetIframe } from './iframe-reset';
import { addRemoveFavorite } from './add-remove-favorite';
import { findRecipeCart } from './find-recipe-cart';
import { getLocalStorageFavRecipes } from './localstorage-get-fav-recipes';
import { renderRecipes } from './render-fav-card';

const modalrecipe = document.querySelector('.js-create-modal');
const modalConteiner = document.querySelector('.js-modal-recipe');

export async function addRecipeButton(event) {
  let recipeId = event.target.dataset._id; // get reciepe id
  let objRecipe = await getRecipeById(recipeId); // fetch reciepe by id
  let renderRecipe = renderModalRecipe(objRecipe); // get reciepe render string
  modalrecipe.innerHTML = renderRecipe; // insert reciepe render string in modal window
  modalConteiner.classList.remove('visually-hidden'); // remove class from modal to show modal window
  document.body.style.overflow = 'hidden'; // off body scroll
  changeFavoriteButton('.modal-button-favorite'); // change Favorite Button depending on favorite or not
  let modalFavBtn = document.querySelector('.modal-button-favorite'); // get modal Favorite Button
  modalFavBtn.addEventListener('click', event => {
    addRemoveFavorite(event); // add/remove reciepe to/from localstorage
    changeFavoriteButton('.modal-button-favorite'); // change Favorite Button depending on favorite or not
    let gallery = document.querySelector('.cards-gallery'); // get gallary
    if (gallery) {
      let cart = findRecipeCart(gallery, event.target.dataset._id); // find in gallery Recipe Cart by id
      let svg = Array(...cart.children).find(child => child.nodeName == 'svg'); // find in Recipe Cart our svg
      svg.classList.toggle('heart-filled'); // toggle svg class 'heart-filled'
    }
    let gallaryFav = document.querySelector('.js-list-fav');
    if (gallaryFav) {
      let storageData = getLocalStorageFavRecipes();
      let renderFavRecipes = renderRecipes(storageData);
      gallaryFav.innerHTML = renderFavRecipes;
    }
  });

}

// export function addRecipeButton(classname) {
//   let btns = document.querySelectorAll(classname);
//   btns.forEach(btn => {
//     btn.addEventListener('click', async event => {
//       let recipeId = event.target.dataset._id;
//       let objRecipe = await getRecipeById(recipeId);
//       let renderRecipe = renderModalRecipe(objRecipe);
//       modalrecipe.innerHTML = renderRecipe;
//       modalConteiner.classList.remove('visually-hidden');
//     });
//   });
// }

const refs = {
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  modalСontainer: document.querySelector('[data-modal-modal-container]'),
};

refs.closeModalBtn.addEventListener('click', toggleModal);
refs.modal.addEventListener('click', toggleModal);
refs.modalСontainer.addEventListener('click', modalClickHandler);

function modalClickHandler(event) {
  event.stopPropagation();
}

function toggleModal() {
  refs.modal.classList.add('visually-hidden');
  document.body.style.overflow = 'auto';
  resetIframe('.video-recipe');
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    toggleModal();
  }
});

export async function openModelById(recipeId) {
  let objRecipe = await getRecipeById(recipeId);
  let renderRecipe = renderModalRecipe(objRecipe);
  modalrecipe.innerHTML = renderRecipe;
  modalConteiner.classList.remove('visually-hidden');
}
