import { checkLocalStorage } from "./check-localstorage";

export function changeFavoriteButton(btnClass) {
     let btn = document.querySelector(btnClass);
     let isFavorite = checkLocalStorage(btn.dataset._id);
     if (isFavorite) {
          btn.textContent = 'Remove from favorite';
          btn.classList.add('favorite');
     }
     else {
          btn.textContent = 'Add to favorite';
          btn.classList.remove('favorite');
     }
}