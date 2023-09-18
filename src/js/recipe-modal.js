
import { renderTags } from './render-tags';
import { renderIngridients } from './render-ingridients';

export function renderModalRecipe(recipe){

const {_id,title,instructions,thumb,time,youtube,tags,ingredients,rating} = recipe;

  return `<section class="backdrop-recipe-info  js-modal-recipe" data-modal>
    <div class="modal-container modal-recipe">
      <div class="js-create-modal">
        <h2 class="name-recipe-tablet">${title}</h2>
        <div>
          <iframe
            class="video-recipe"
            width="295"
            height="295"
            src="${youtube}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <img
            class="video-recipe visually-hidden"
            width="295"
            height="295"
            src="${thumb}"
            alt="${title}"
          />
        </div>
        <h2 class="name-recipe">${title}</h2>

        <div class="tag-and-reting" >
          <div class="tags-modal-tablet">${renderTags(tags)}
          </div>
  
          <div class="modal-rating">
            <p class="number-reting">${rating}</p>
            <div>
              <svg class="reting-stars" width="18" height="18">
                <use href="../img/icons.svg#star"></use>
              </svg>
              <svg class="reting-stars" width="18" height="18">
                <use href="../img/icons.svg#star"></use>
              </svg>
              <svg class="reting-stars" width="18" height="18">
                <use href="../img/icons.svg#star"></use>
              </svg>
              <svg class="reting-stars" width="18" height="18">
                <use href="../img/icons.svg#star"></use>
              </svg>
              <svg class="reting-stars" width="18" height="18">
                <use href="../img/icons.svg#star"></use>
              </svg>
            </div>
            <p class="time-cook">${time}min</p>
          </div>
        </div>
  
        <div class="recipe-ingredients">
          <ul class="ingredient">${renderIngridients(ingredients)}
          </ul>
        </div>
  
        <div class="tags-modal">${renderTags(tags)}
        </div>
        <div class="instructions">
          <p>${instructions}
          </p>
        </div>
      </div>
  
      <button class="modal-button add" data-id="${_id}" type="button">Add to favorite</button>
  
      <button class="modal-button" type="button">Give a rating</button>
  
      <button class="close-modal-recipe" type="button">
        <svg class="close-modal-recipe-icon" width="20" height="20">
          <use href="../img/icons.svg#x-modal"></use>
        </svg>
      </button>
    </div>
  </section> `
};




  let obj = {
    "_id": "6462a8f74c3d0ddd28897fb8",
    "title": "Mediterranean Pasta Salad",
    "category": "Seafood",
    "area": "Italian",
    "instructions": "Bring a large saucepan of salted water to the boil\r\nAdd the pasta, stir once and cook for about 10 minutes or as directed on the packet.\r\nMeanwhile, wash the tomatoes and cut into quarters. Slice the olives. Wash the basil.\r\nPut the tomatoes into a salad bowl and tear the basil leaves over them. Add a tablespoon of olive oil and mix.\r\nWhen the pasta is ready, drain into a colander and run cold water over it to cool it quickly.\r\nToss the pasta into the salad bowl with the tomatoes and basil.\r\nAdd the sliced olives, drained mozzarella balls, and chunks of tuna. Mix well and let the salad rest for at least half an hour to allow the flavours to mingle.\r\nSprinkle the pasta with a generous grind of black pepper and drizzle with the remaining olive oil just before serving.",
    "description": "A salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice.",
    "thumb": "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
    "preview": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560402/mwtf7uqrnsxvlpjqtslc.jpg",
    "time": "27",
    "youtube": "https://www.youtube.com/watch?v=e52IL8zYmaE",
    "tags": [
        "Pasta",
        "Baking"
    ],
    "ingredients": [
        {
            "id": "640c2dd963a319ea671e3724",
            "measure": "200 g",
            "name": "Mozzarella Balls",
            "desc": "Small, round balls of mozzarella cheese that are soft, smooth, and milky in flavor, and are often used as a topping for pizzas, salads, and pasta dishes.",
            "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564856/zbhre2hgosydezexwhky.png"
        },
        {
            "id": "640c2dd963a319ea671e3663",
            "measure": "250 g",
            "name": "Baby Plum Tomatoes",
            "desc": "The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America. The Nahuatl (Aztec language) word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived.[3][4] Its domestication and use as a cultivated food may have originated with the indigenous peoples of Mexico. The Aztecs used tomatoes in their cooking at the time of the Spanish conquest of the Aztec Empire, and after the Spanish encountered the tomato for the first time after their contact with the Aztecs, they brought the plant to Europe. From there, the tomato was introduced to other parts of the European-colonized world during the 16th century.",
            "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564221/hh3a8lt3xeopaaumybd0.png"
        },
        {
            "id": "640c2dd963a319ea671e36dd",
            "measure": "1  bunch",
            "name": "Fresh Basil",
            "desc": "An aromatic herb with green leaves that are used in many cuisines around the world, particularly in Italian cuisine. It has a sweet, slightly peppery flavor and a strong, pleasant aroma.",
            "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564798/kc3bngtbfjx85mhk6p0i.png"
        },
        {
            "id": "640c2dd963a319ea671e36cf",
            "measure": "350 g",
            "name": "Farfalle",
            "desc": "A type of pasta shaped like a bow tie or butterfly.",
            "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564797/jgwujfs7lp8bvymction.png"
        },
        {
            "id": "640c2dd963a319ea671e36cd",
            "measure": "3  tablespoons",
            "name": "Extra Virgin Olive Oil",
            "desc": "A high-quality oil made from the first pressing of the olives, with a fruity flavor and low acidity. Often used in dressings and for finishing dishes.",
            "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564796/wornokeoy7lwi7soyymw.png"
        },
        {
            "id": "640c2dd963a319ea671e36f3",
            "measure": "40 g",
            "name": "Green Olives",
            "desc": "Olives that are harvested before they are fully ripe and have a firm texture and slightly bitter flavor commonly used in salads, sandwiches, and as a snack.",
            "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564798/wsc9q0gthn85ppthqizm.png"
        },
        {
            "id": "640c2dd963a319ea671e3781",
            "measure": "200 g",
            "name": "Tuna",
            "desc": "A saltwater fish with firm, meaty flesh, commonly used in a variety of cuisines, including sushi, salads, and sandwiches.",
            "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564914/eny2eswuvz2owcjskgyr.png"
        },
        {
            "id": "640c2dd963a319ea671e375e",
            "measure": "to taste",
            "name": "Salt",
            "desc": "Crystalline mineral made of sodium chloride, commonly used as a seasoning and preservative in cooking and food preparation.",
            "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564910/a1sigxrvvbfhsrozsshz.png"
        },
        {
            "id": "640c2dd963a319ea671e373f",
            "measure": "to taste",
            "name": "Pepper",
            "desc": "A spice made from ground dried peppercorns, commonly used in cooking and as a table seasoning for its pungent and spicy flavor.",
            "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/qdnacuigdp7bquzjclub.png"
        }
    ],
    "rating": 4.03,
    "whoRated": 163
}
console.log(renderModalRecipe(obj))