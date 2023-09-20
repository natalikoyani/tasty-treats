export function checkLocalStorage(id) {
     const lsFavorities = localStorage.getItem('favoriteRecipes')
          ? JSON.parse(localStorage.getItem('favoriteRecipes'))
          : [];
     const favorities = Array.isArray(lsFavorities)
          ? lsFavorities.map(recipe => recipe._id)
          : [];
     return favorities.includes(id);
}