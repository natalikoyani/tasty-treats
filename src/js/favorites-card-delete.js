// Видалення картки по кліку по сердцю

import { addRecipeButton } from './open-recipe-modal';
import { categories, recipeList } from './favorites-render';
import { creatMarkupFavorite } from './favorites-render';
import { renderRecipes } from './render-fav-card';

const favListCards = document.querySelector('.js-list-fav');

favListCards.addEventListener('click', onCard);

function onCard(e) {
  const favList = document.querySelector('.js-list-fav');
  if (e.target.closest('svg')?.nodeName == 'svg') {
    const svg = e.target.closest('svg');
    let recipeId = svg.dataset._id;
    let indexOfRecipe = recipeList.findIndex(recipe => recipe._id === recipeId);
    let categoryBeforeDelete = [
      ...new Set(recipeList.map(recipe => recipe.category)),
    ];

    if (indexOfRecipe !== -1) {
      recipeList.splice(indexOfRecipe, 1);

      if (recipeList.length > 0) {
        favList.innerHTML = renderRecipes(recipeList);
      } else {
        favList.innerHTML = '';
        creatMarkupFavorite(recipeList);
      }
      localStorage.setItem('favoriteRecipes', JSON.stringify(recipeList));
      let uniqueCategory = [
        ...new Set(recipeList.map(recipe => recipe.category)),
      ];
      let deletedCategory = categoryBeforeDelete.filter(
        caterogy => !uniqueCategory.includes(caterogy)
      );
      if (deletedCategory.length) {
        categories(uniqueCategory);
      }
    }
  }

  if (e.target.nodeName === 'BUTTON') {
    addRecipeButton(e);
  }
}
