function createRecipeMarkup(recipe) {
  return `<li
      class="popular-recipe-item"
    >
      <button class="popular-recipe-card js-card-button" aria-label="popular recipe" data-title="${recipe.title}" data-id="${recipe._id}">
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

export { createMarkupPopularRecipes, createRecipeMarkup };
