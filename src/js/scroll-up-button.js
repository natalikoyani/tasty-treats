let markup = `
<button type="button" class="scroll-up-btn visually-hidden">
     <svg class="scroll-up-svg" width="30" height="30">
          <use href="${svgIcons}#arrow-up"></use>
     </svg>
</button>
`

document.body.insertAdjacentHTML("beforeend", markup);