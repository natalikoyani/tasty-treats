let loaderMarkup = `
     <div class="backdrop-loader visually-hidden">
          <div class="spinnerContainer">
          <div class="spinner"></div>
          <div class="loader">
               <p>loading</p>
               <div class="words">
               <span class="word">breakfast</span>
               <span class="word">lunch</span>
               <span class="word">dinner</span>
               <span class="word">supper</span>
               <span class="word">food</span>
               </div>
          </div>
          </div>
     </div>
`

document.body.insertAdjacentHTML('beforeend', loaderMarkup)