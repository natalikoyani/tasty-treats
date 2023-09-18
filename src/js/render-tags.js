export function renderTags(data) {
  return data
    .map(tag => {
      return `<p class="tag-modal">#${tag}</p>`;
    })
    .join(' ');
}
