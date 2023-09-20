import { addRecipeButton } from './open-recipe-modal';

export const addToFavorities = event => {

  if (event.target.nodeName === 'svg' || event.target.nodeName === 'use') {
    let closest = event.target.closest('svg');
    let dataset = event.target.closest('.recipe-card').dataset;
    // get + check localStorage
    let currentLocalStorage = localStorage.getItem('favoriteRecipes');
    let recipeList = currentLocalStorage ? JSON.parse(currentLocalStorage) : [];
    recipeList = Array.isArray(recipeList) ? recipeList : [];

    // check if recipe already in Favorites
    let recipeId = dataset?._id;
    let indexOfRecipe = recipeList.findIndex(recipe => recipe._id === recipeId);

    closest.classList.toggle('heart-filled');

    if (indexOfRecipe < 0) {
      // add recipe to list
      recipeList.push(dataset);
      localStorage.setItem('favoriteRecipes', JSON.stringify(recipeList));
    } else {
      // delete recipe from list
      recipeList.splice(indexOfRecipe, 1);
      localStorage.setItem('favoriteRecipes', JSON.stringify(recipeList));
    }
  }

  if (event.target.nodeName === 'BUTTON') { 
    addRecipeButton(event)
  }
}