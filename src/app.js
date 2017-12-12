const cartCounter = document.getElementById("nav-cart-counter"),
  hiddenClass = "nav-cart-counter-hidden";
let cartCount = getCartCount();
let cartLink = document.createElement("a");
let cartNotification = document.createElement("span");
let cartNotificationText = document.createElement("span");
if (cartCounter) {
  let addToCartButton = document.querySelectorAll("button[data-aerostat-id]");

  // Array.prototype.slice
  //   .call(addToCartButton)
  //   .forEach(button => (button.onclick = updateCartCount));

  cartLink.className = "nav-cart-counter-count";
  cartLink.href = "/cart";
  cartCounter.appendChild(cartLink);
  cartLink.innerHTML = `Cart ${cartCount}`;

  cartNotification.className = `nav-cart-counter-notification ${hiddenClass}`;
  cartCounter.appendChild(cartNotification);

  cartNotificationText.className = "nav-cart-counter-notification-text";
  cartNotification.appendChild(cartNotificationText);
}

function notify(dataset) {
  let variationTitle = dataset.productVariationTitle;
  if(dataset.type === 'plan') {
    variationTitle = dataset.name;
  }
  cartNotificationText.innerHTML = `${dataset.productTitle} - ${variationTitle} added to cart.`;
  cartNotification.classList.toggle(hiddenClass);
  setTimeout(() => {
    cartNotification.classList.toggle(hiddenClass);
    cartNotificationText.innerHTML = "";
  }, 3000);
}

window.updateCartCount = function updateCartCount(dataset) {
  cartCount++;
  cartLink.innerHTML = `Cart ${cartCount}`;
  notify(dataset);
}

function getCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let count = 0;
  if(cart) {
    cart.items.forEach((item) => {
      count += parseInt(item.quantity);
    });
  }
  return count;
}
