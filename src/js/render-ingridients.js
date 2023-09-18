export function renderIngridients(arr) {
  return arr.map((ing) => {
    return `
    <li class="name-ingredients">
      <p>${ing.name}</p>
      <p>${ing.measure}</p>
    </li>`;
  }).join('');
}
