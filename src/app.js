const cartCounter = document.getElementById("nav-cart-counter"),
  hiddenClass = "nav-cart-counter-hidden";
let cartCount = getCartCount(),
    cartLink = document.createElement("a"),
    cartNotification = document.createElement("div"),
    cartNotificationText = document.createElement("span"),
    cartLinkText = document.createElement("span"),
    cartLinkCount = document.createElement("span");
if (cartCounter) {
  let addToCartButton = document.querySelectorAll("button[data-aerostat-id]");

  // Array.prototype.slice
  //   .call(addToCartButton)
  //   .forEach(button => (button.onclick = updateCartCount));

  cartLink.className = "nav-cart-counter-count";
  cartLink.href = "/cart";
  cartCounter.appendChild(cartLink);
  cartLinkText.className = "nav-cart-text";
  cartLinkText.innerHTML = "Cart";
  cartLinkCount.className = "nav-cart-count";
  cartLinkCount.innerHTML = cartCount;
  cartLink.appendChild(cartLinkText);
  cartLink.appendChild(cartLinkCount);

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
  cartLinkCount.innerHTML = cartCount;
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
