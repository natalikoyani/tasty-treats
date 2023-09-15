import axios from 'axios';
// import { updatePopularRecipes } from './api';

const popularRecipesUrl =
  'https://tasty-treats-backend.p.goit.global/api/recipes/popular';

const container = document.querySelector('.popular-recipes-card');

window.addEventListener('resize', updatePopularRecipes);
updatePopularRecipes();

async function updatePopularRecipes() {
  await axios
    .get(popularRecipesUrl)
    .then(response => {
      //   console.log(response);
      const popularRecipes = response.data;
      const numElements = window.innerWidth < 768 ? 2 : 4;
      const slicedRecipes = popularRecipes.slice(0, numElements);
      const markup = createMarkupPopularRecipes(slicedRecipes);
      container.innerHTML = markup;
    })
    .catch(error => {
      console.error('Error fetching popular recipes:', error);
    });
}

function createRecipeMarkup(recipe) {
  return `<li
      class="popular-recipe-item"
    >
      <button class="popular-recipe-card js-card-button" aria-label="popular recipe${recipe.title}" data-id="${recipe._id}">
        <img
          class="popular-card-image"
          src="${recipe.preview}"
          alt="${recipe.title}"
        >
        <div class="popular-card-content">
          <h3 class="popular-card-heading">${recipe.title}</h3>
          <p class="popular-card-description">
            ${recipe.description}
          </p>
        </div>
      </button>
    </li>`;
}

function createMarkupPopularRecipes(recipes) {
  return `<ul class="popular-recipe-list list">
      ${recipes.reduce(
        (accumulator, recipe, index) =>
          accumulator + createRecipeMarkup(recipe, index + 1),
        ''
      )}
    </ul>`;
}
