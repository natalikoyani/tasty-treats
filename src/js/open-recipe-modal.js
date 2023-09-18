import { getRecipeById } from './api';
import { renderModalRecipe } from './recipe-modal';

const modalrecipe = document.querySelector('.js-modal-recipe');
// createModalRecipe();

// async function createModalRecipe(id) {
//   await getRecipeById().then(
//     data => (modalrecipe.innerHTML = renderModalRecipe(data))
//   );
// }

const refs = {
    // openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };
//   refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("visually-hidden");
  }