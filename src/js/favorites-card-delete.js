// Видалення картки по кліку по сердцю

let currentLocalStorage = localStorage.getItem('favoriteRecipes');
let recipeList = currentLocalStorage ? JSON.parse(currentLocalStorage) : [];
recipeList = Array.isArray(recipeList) ? recipeList : [];

const btnHearts = document.querySelectorAll('.heart-filled');

btnHearts.forEach(heart => {
  heart.addEventListener('click', removeCard);
});

function removeCard(e) {
  const card = e.target.closest('.recipe-card');
  let recipeId = e.currentTarget.dataset._id;
  let indexOfRecipe = recipeList.findIndex(recipe => recipe._id === recipeId);

  if (indexOfRecipe !== -1) {
    card.remove();
    recipeList.splice(indexOfRecipe, 1);
    localStorage.setItem('favoriteRecipes', JSON.stringify(recipeList));
  }
}
