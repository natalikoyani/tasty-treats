import { getRecipeById } from './api';
import { renderModalRecipe } from './recipe-modal';

const modalrecipe = document.querySelector('.js-create-modal');
const modalConteiner = document.querySelector('.js-modal-recipe');

export function addRecipeButton(classname) {
  let btns = document.querySelectorAll(classname);
  btns.forEach(btn => {
    btn.addEventListener('click', async event => {
      let recipeId = event.target.dataset._id;
      let objRecipe = await getRecipeById(recipeId);
      let renderRecipe = renderModalRecipe(objRecipe);
      modalrecipe.innerHTML = renderRecipe;
      modalConteiner.classList.remove('visually-hidden');
      const ifr = document.querySelector('iframe');
      ifr.onload = () => {
        console.dir(ifr);
      }
      ifr.onerror = () => {
        console.log('not loaded');
      }
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
