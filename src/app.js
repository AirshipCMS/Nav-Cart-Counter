const cartCounter = document.getElementById("nav-cart-counter");

if(cartCounter) {
  let addToCartButtons = document.querySelectorAll('button[data-aerostat-id]');
  Array.prototype.slice.call(addToCartButtons).forEach((button) => button.onclick = updateCartCount);
}

function updateCartCount() {
  console.log('click')
}