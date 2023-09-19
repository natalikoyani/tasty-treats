export const addHeartsEventListenerFav = () => {

    const favHearts = document.querySelectorAll('.fav-card .heart-svg');

    const addToFavorities = (event) => {
        let dataset = event.currentTarget.dataset
        
        // get + check localStorage
        let currentLocalStorage = localStorage.getItem('favoriteRecipes')
        let recipeList = currentLocalStorage ? JSON.parse(currentLocalStorage) : []
        recipeList = Array.isArray(recipeList) ? recipeList : []
        
        // check if recipe already in Favorites
        let recipeId = dataset?._id
        let indexOfRecipe = recipeList.findIndex(recipe => recipe._id === recipeId)
        
        event.currentTarget.classList.toggle("heart-filled");
        
        if (indexOfRecipe < 0) {
            // add recipe to list
            recipeList.push(dataset)
            localStorage.setItem('favoriteRecipes', JSON.stringify(recipeList))
        } else { 
            // delete recipe from list
            recipeList.splice(indexOfRecipe, 1)
            localStorage.setItem('favoriteRecipes', JSON.stringify(recipeList))
        }
    }
    
    cardHearts.forEach(c => c.addEventListener('click' , addToFavorities) )
}