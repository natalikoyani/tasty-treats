import { getRecipeById } from './api';
import { renderModalRecipe } from './recipe-modal';
import { changeFavoriteButton } from './change-favorite-modal-button';
import { resetIframe } from './iframe-reset';
import { addRemoveFavorite } from './add-remove-favorite';
import { findRecipeCart } from './find-recipe-cart';

const modalrecipe = document.querySelector('.js-create-modal');
const modalConteiner = document.querySelector('.js-modal-recipe');

export async function addRecipeButton(event) {
  let recipeId = event.target.dataset._id;
  let objRecipe = await getRecipeById(recipeId);
  let renderRecipe = renderModalRecipe(objRecipe);
  modalrecipe.innerHTML = renderRecipe;
  modalConteiner.classList.remove('visually-hidden');
  document.body.style.overflow = 'hidden';
  changeFavoriteButton('.modal-button-favorite');
  let modalFavBtn = document.querySelector('.modal-button-favorite');
  modalFavBtn.addEventListener('click', event => {
    addRemoveFavorite(event);
    changeFavoriteButton('.modal-button-favorite');
    let cart = findRecipeCart('.cards-gallery', event.target.dataset._id);
    let svg = Array(...cart.children).find(child => child.nodeName == 'svg');
    svg.classList.toggle('heart-filled');
    let cartFav = findRecipeCart('.js-list-fav', event.target.dataset._id);
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
