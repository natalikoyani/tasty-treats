import { getRecipeById } from './api';
import { renderModalRecipe } from './recipe-modal';

const modalrecipe = document.querySelector('.js-create-modal');
const modalConteiner = document.querySelector('.js-modal-recipe');

export function addRecipeButton(classname) {
  let btns = document.querySelectorAll(classname);
  btns.forEach(btn => {
    btn.addEventListener('click', async event => {
      let recipeId = event.target.dataset._id;
      openModelById(recipeId);
    });
  });
}

const refs = {
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.add('visually-hidden');
}

export async function openModelById(recipeId) {
  let objRecipe = await getRecipeById(recipeId);
  let renderRecipe = renderModalRecipe(objRecipe);
  modalrecipe.innerHTML = renderRecipe;
  modalConteiner.classList.remove('visually-hidden');
}
