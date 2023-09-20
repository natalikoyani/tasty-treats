export function addRemoveFavorite(e) {
     let obj = e.target.dataset;
     let currentLocalStorage = localStorage.getItem('favoriteRecipes');
     let recipeList = currentLocalStorage ? JSON.parse(currentLocalStorage) : [];
     recipeList = Array.isArray(recipeList) ? recipeList : [];

     // check if recipe already in Favorites
     let recipeId = obj?._id;
     let indexOfRecipe = recipeList.findIndex(recipe => recipe._id === recipeId);

     if (indexOfRecipe < 0) {
          // add recipe to list
          recipeList.push(obj);
          localStorage.setItem('favoriteRecipes', JSON.stringify(recipeList));
     } else {
          // delete recipe from list
          recipeList.splice(indexOfRecipe, 1);
          localStorage.setItem('favoriteRecipes', JSON.stringify(recipeList));
     }
}