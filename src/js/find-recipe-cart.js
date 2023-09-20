export function findRecipeCart(galleryContainer, id) {
     const gallery = document.querySelector(galleryContainer);
     let cart = Array(...gallery.childNodes).find(cart => cart.dataset._id === id);
     return cart
}