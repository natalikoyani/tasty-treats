// Видалення картки по кліку по сердцю
import { addRecipeButton } from './open-recipe-modal';

let currentLocalStorage = localStorage.getItem('favoriteRecipes');
let recipeList = currentLocalStorage ? JSON.parse(currentLocalStorage) : [];
recipeList = Array.isArray(recipeList) ? recipeList : [];

const favList = document.querySelector('.js-list-fav');

favList.addEventListener('click', removeCard);

function refreshPage() {
  location.reload();
}
function removeCard(e) {
  if (e.target.closest('svg')?.nodeName == 'svg') {
    const card = e.target.closest('.fav-card');
    const svg = e.target.closest('svg');
    let recipeId = svg.dataset._id;
    let indexOfRecipe = recipeList.findIndex(recipe => recipe._id === recipeId);

    if (indexOfRecipe !== -1) {
      card.remove();
      recipeList.splice(indexOfRecipe, 1);
      localStorage.setItem('favoriteRecipes', JSON.stringify(recipeList));
    }
  }

  if (e.target.nodeName === 'BUTTON') {
    addRecipeButton(e);
  }
}
