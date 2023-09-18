export function renderIngridients(arr) {
  return arr
    .map(ing => {
      return `
    <li class="ingredient" >
      <p>${ing.name}</p>
      <p class="measure-ingredients">${ing.measure}</p>
    </li>`;
    })
    .join('');
}
