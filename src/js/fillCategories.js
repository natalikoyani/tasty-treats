import { getCategories } from './api';

const containerCategories = document.querySelector('.categories-list');
fillCategories();

async function fillCategories() {
  await getCategories().then(
    data => (containerCategories.innerHTML = markupAllCategories(data))
  );
}

//Function "markupAllCategories.js"
function markupAllCategories(arr) {
  return arr
    .map(
      arr =>
        `<li class="category-item">
       <button class="name-category">${arr.name}</button>
      </li>`
    )
    .join('');
}
