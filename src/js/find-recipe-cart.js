export function findRecipeCart(gallery, id) {
     let cart = Array(...gallery.childNodes).find(cart => cart.dataset._id === id);
     return cart
}