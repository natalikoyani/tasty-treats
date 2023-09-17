export const renderRecipes = (recipes) => {
    
    const favorities = localStorage
        .getItem('favoriteRecipes')
        ?.map(recipe => recipe._id) || []

    return recipes
        .map(recipe => {

            const { _id, title, description, thumb, rating } = recipe
            let isFavorite = favorities.includes(_id)
            let roundedRating = Math.round(rating)

            return  `<div class="recipe-card"
            style="
            background-image: linear-gradient(transparent,  #05050552),
            url(${thumb});"
            >

        <svg class="heart-svg${isFavorite > 0 ? ' heart-filled' : ''}">
            <use href="./img/icons.svg#heart"></use>
        </svg>

        <h3 class="recipe-title">${title}</h3>
        <p class="recipe-description two-line-ellipsis">${description}</p>
        <div class="recipe-footer">
            <span class="rating-number">${rating}</span>
            <ul class="recipe-rating">
                <li class="rating-item">
                    <svg class="star-svg${roundedRating > 0 ? ' star-filled' : ''}">
                        <use href="./img/icons.svg#star"></use>
                    </svg>
                </li>
                <li class="rating-item">
                    <svg class="star-svg${roundedRating > 1 ? ' star-filled' : ''}">
                        <use href="./img/icons.svg#star"></use>
                    </svg>
                </li>
                <li class="rating-item">
                    <svg class="star-svg${roundedRating > 2 ? ' star-filled' : ''}">
                        <use href="./img/icons.svg#star"></use>
                    </svg>
                </li>
                <li class="rating-item">
                    <svg class="star-svg${roundedRating > 3 ? ' star-filled' : ''}">
                        <use href="./img/icons.svg#star"></use>
                    </svg>
                </li>
                <li class="rating-item">
                    <svg class="star-svg${roundedRating > 4 ? ' star-filled' : ''}">
                        <use href="./img/icons.svg#star"></use>
                    </svg>
                </li>
            </ul>
            <button class="recipe-btn" type="button">See recipe</button>
        </div>
    </div>`

        })
        .join('')
}