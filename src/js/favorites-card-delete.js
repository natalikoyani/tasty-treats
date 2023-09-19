// Видалення картки по кліку по сердцю
const favList = document.querySelector('.js-list-fav');

let currentLocalStorage = localStorage.getItem('favoriteRecipes');
let recipeList = currentLocalStorage ? JSON.parse(currentLocalStorage) : [];
recipeList = Array.isArray(recipeList) ? recipeList : [];

const btnHearts = document.querySelectorAll('.heart-filled');

btnHearts.forEach(heart => {
  heart.addEventListener('click', removeCard);
});

function refreshPage() {
  location.reload();
}
function removeCard(e) {
  const card = e.target.closest('.fav-card');

  let recipeId = e.currentTarget.dataset._id;
  let indexOfRecipe = recipeList.findIndex(recipe => recipe._id === recipeId);

  if (indexOfRecipe !== -1) {
    card.remove();
    refreshPage();
    recipeList.splice(indexOfRecipe, 1);
    localStorage.setItem('favoriteRecipes', JSON.stringify(recipeList));
  }
}
