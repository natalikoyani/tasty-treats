import { renderTags } from './render-tags';
import { renderIngridients } from './render-ingridients';
import { renderVideo } from './render-video';
import { renderInstruction } from './renfer-inrtruction';

export function renderModalRecipe(recipe) {
  const {
    _id,
    title,
    instructions,
    thumb,
    time,
    youtube,
    tags,
    ingredients,
    rating,
    description,
    category,
  } = recipe;
  let roundedRating = Math.round(rating);

  return `<h2 class="name-recipe-tablet">${title}</h2>
        <div>
          <iframe
            class="video-recipe"
            width="295"
            height="295"
            src="${renderVideo(youtube)}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
              <svg class="reting-stars${roundedRating > 0 ? ' star-filled' : ''
    }" width="18" height="18">
                <use href="./img/icons.svg#star"></use>
              </svg>
              <svg class="reting-stars${roundedRating > 1 ? ' star-filled' : ''
    }" width="18" height="18">
                <use href="./img/icons.svg#star"></use>
              </svg>
              <svg class="reting-stars${roundedRating > 2 ? ' star-filled' : ''
    }" width="18" height="18">
                <use href="./img/icons.svg#star"></use>
              </svg>
              <svg class="reting-stars${roundedRating > 3 ? ' star-filled' : ''
    }" width="18" height="18">
                <use href="./img/icons.svg#star"></use>
              </svg>
              <svg class="reting-stars${roundedRating > 4 ? ' star-filled' : ''
    }" width="18" height="18">
                <use href="./img/icons.svg#star"></use>
              </svg>
            </div>
            <p class="time-cook">${time}min</p>
          </div>
        </div>
  
        <div class="recipe-ingredients">
          <ul>${renderIngridients(ingredients)}
          </ul>
        </div>
  
        <div class="tags-modal">${renderTags(tags)}
        </div>
        <div class="instructions">
          <p>${renderInstruction(instructions)}
          </p>
        </div>
  
      <button class="modal-button-favorite  add"
        data-_id="${_id}"
        data-title="${title}"
        data-description="${description}"
        data-thumb="${thumb}"
        data-rating="${rating}"
        data-category="${category}" type="button">Add to favorite</button>`;
}

// let obj = {
//   "_id": "6462a8f74c3d0ddd28897fc1",
//   "title": "Chocolate Gateau",
//   "category": "Dessert",
//   "area": "French",
//   "instructions": "Preheat the oven to 180°C/350°F/Gas Mark 4. Grease and line the base of an 8 in round spring form cake tin with baking parchment\r\nBreak the chocolate into a heatproof bowl and place over a saucepan of gently simmering water and stir until it melts. (or melt in the microwave for 2-3 mins stirring occasionally)\r\nPlace the butter and sugar in a mixing bowl and cream together with a wooden spoon until light and fluffy. Gradually beat in the eggs, adding a little flour if the mixture begins to curdle. Fold in the remaining flour with the cooled, melted chocolate and milk. Mix until smooth.\r\nSpread the mixture into the cake tin and bake for 50-55 mins or until firm in the centre and a skewer comes out cleanly. Cool for 10 minutes, then turn out and cool completely.",
//   "description": "A French dessert consisting of layers of chocolate sponge cake and chocolate ganache, typically topped with chocolate glaze and chocolate decorations.",
//   "thumb": "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg",
//   "preview": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560403/zyahxajhkglf8sisiqlh.jpg",
//   "time": "75",
//   "youtube": "https://www.youtube.com/watch?v=dsJtgmAhFF4",
//   "tags": [
//       "Cake",
//       "Chocolate",
//       "Desert",
//       "Pudding"
//   ],
//   "ingredients": [
//       {
//           "id": "640c2dd963a319ea671e3742",
//           "measure": "250g",
//           "name": "Plain Chocolate",
//           "desc": "Plain chocolate, also known as dark chocolate, is made from cocoa solids, sugar, and cocoa butter. It has a higher percentage of cocoa solids than milk chocolate, and has a bittersweet taste. It is often used in baking, or enjoyed on its own as a treat.",
//           "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/qmuma4viupigb574izg6.png"
//       },
//       {
//           "id": "640c2dd963a319ea671e367e",
//           "measure": "175g",
//           "name": "Butter",
//           "desc": "A dairy product made from churning cream or milk, with a high fat content and a creamy, rich flavor that is often used in cooking and baking.",
//           "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564674/ovea5weymaecrnbwxuq9.png"
//       },
//       {
//           "id": "640c2dd963a319ea671e371f",
//           "measure": "2 tablespoons",
//           "name": "Milk",
//           "desc": "A white liquid produced by mammals as food for their young, commonly used as a drink or ingredient in cooking and baking.",
//           "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/ly0kwisb5ripennlkqma.png"
//       },
//       {
//           "id": "640c2dd963a319ea671e36ca",
//           "measure": "5",
//           "name": "Eggs",
//           "desc": "A reproductive cell laid by female animals, often used in baking and cooking as a binding agent or to add texture and flavor",
//           "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564742/iaphxkd4vqyfn7xixnqw.png"
//       },
//       {
//           "id": "640c2dd963a319ea671e36ee",
//           "measure": "175g",
//           "name": "Granulated Sugar",
//           "desc": "A common sweetener made from sugar cane or sugar beet that has been refined and granulated.",
//           "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564797/gywjatzz1ourjbtpjjtw.png"
//       },
//       {
//           "id": "640c2dd963a319ea671e36d7",
//           "measure": "125g",
//           "name": "Flour",
//           "desc": "A fine powder made from grinding grains, nuts, seeds, or roots. Used as a main ingredient in baking, cooking, and thickening sauces and soups.",
//           "img": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564797/hwex2zzwxbv7a5gi9iuh.png"
//       }
//   ],
//   "rating": 4.18,
//   "whoRated": 195
// };
// console.log(renderModalRecipe(obj));
