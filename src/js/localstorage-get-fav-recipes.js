export function getLocalStorageFavRecipes() {
     let currentLocalStorage = localStorage.getItem('favoriteRecipes');
     let recipeList = currentLocalStorage ? JSON.parse(currentLocalStorage) : [];
     return Array.isArray(recipeList) ? recipeList : [];
}