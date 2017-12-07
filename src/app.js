const cartCounter = document.getElementById("nav-cart-counter"),
  hiddenClass = "nav-cart-counter-hidden";
let cartCount = getCartCount();
let cartLink = document.createElement("a");
let cartNotification = document.createElement("span");
let cartNotificationText = document.createElement("span");

if (cartCounter) {
  let addToCartButtons = document.querySelectorAll("button[data-aerostat-id]");
  Array.prototype.slice
    .call(addToCartButtons)
    .forEach(button => (button.onclick = updateCartCount));

  cartLink.className = "nav-cart-counter-count";
  cartLink.href = "/cart";
  cartCounter.appendChild(cartLink);
  cartLink.innerHTML = cartCount;

  cartNotification.className = `nav-cart-counter-notification ${hiddenClass}`;
  cartCounter.appendChild(cartNotification);

  cartNotificationText.className = "nav-cart-counter-notification-text";
  cartNotification.appendChild(cartNotificationText);
}

function notify(dataset) {
  cartNotificationText.innerHTML = `${dataset.productTitle} - ${dataset.productVariationTitle} added to cart.`;
  cartNotification.classList.toggle(hiddenClass);
  setTimeout(() => {
    cartNotification.classList.toggle(hiddenClass);
    cartNotificationText.innerHTML = "";
  }, 3000);
}

function updateCartCount(e) {
  cartCount++;
  cartLink.innerHTML = cartCount;
  notify(e.srcElement.dataset);
}

function getCartCount() {
  return JSON.parse(localStorage.getItem("cart")).items.length || 0;
}
