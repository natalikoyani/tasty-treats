export function localStorageFindIndex(id) {
     let currentLocalStorage = localStorage.getItem('favoriteRecipes');
     let recipeList = currentLocalStorage ? JSON.parse(currentLocalStorage) : [];
     recipeList = Array.isArray(recipeList) ? recipeList : [];
     return recipeList.findIndex(recipe => recipe._id === id);
}