const cartCounter = document.getElementById('nav-cart-counter');
let cartCount = getCartCount();

if(cartCounter) {
  let addToCartButtons = document.querySelectorAll('button[data-aerostat-id]');
  Array.prototype.slice.call(addToCartButtons).forEach((button) => button.onclick = updateCartCount);
  let cartLink = document.createElement('a');
  cartLink.className = 'nav-cart-counter-count';
  cartLink.href = '/cart';
  cartCounter.appendChild(cartLink);
  cartCounter.innerHTML = cartCount;
}

function updateCartCount() {
  cartCount++;
  cartCounter.innerHTML = cartCount;
}

function getCartCount() {
  return JSON.parse(localStorage.getItem('cart')).items.length || 0;
}