const cartCounters = document.getElementsByClassName("airship-nav-cart-counter"),
  hiddenClass = "airship-nav-cart-counter-hidden";
let cartCount = getCartCount();
if (cartCounters) {
  Array.prototype.slice.call(cartCounters).forEach(el => render(el));
  // let addToCartButton = document.querySelectorAll("button[data-aerostat-id]");
  // Array.prototype.slice
  //   .call(addToCartButton)
  //   .forEach(button => (button.onclick = updateCartCount));
}

function render(cartCounter) {
  let cartLink = document.createElement("a"),
    cartNotification = document.createElement("div"),
    cartNotificationText = document.createElement("span"),
    cartLinkText = document.createElement("span"),
    cartLinkCount = document.createElement("span");

  cartLink.className = "airship-nav-cart-counter-count";
  cartLink.href = "/cart";
  cartCounter.appendChild(cartLink);
  cartLinkText.className = "airship-nav-cart-text";
  cartLinkText.innerHTML = "Cart";
  cartLinkCount.className = "airship-nav-cart-count";
  cartLinkCount.innerHTML = cartCount;
  cartLink.appendChild(cartLinkText);
  cartLink.appendChild(cartLinkCount);

  cartNotification.className = `airship-nav-cart-counter-notification ${hiddenClass}`;
  cartCounter.appendChild(cartNotification);

  cartNotificationText.className = "airship-nav-cart-counter-notification-text";
  cartNotification.appendChild(cartNotificationText);
}

function notify(dataset, i) {
  let variationTitle = dataset.productVariationTitle;
  if(dataset.type === 'plan') {
    variationTitle = dataset.name;
  }
  let cartNotification = document.getElementsByClassName("airship-nav-cart-counter-notification")[i];
  let cartNotificationText = cartNotification.lastChild;
  cartNotificationText.innerHTML = `${dataset.productTitle} - ${variationTitle} added to cart.`;
  cartNotification.classList.toggle(hiddenClass);
  setTimeout(() => {
    cartNotification.classList.toggle(hiddenClass);
    cartNotificationText.innerHTML = "";
  }, 3000);
}

window.updateCartCount =function updateCartCount(e) {
  let cartLinksCount = document.getElementsByClassName("airship-nav-cart-count");
  cartCount++;
  Array.prototype.slice
    .call(cartLinksCount)
    .forEach((el, i) => {
      el.innerHTML = cartCount;
      notify(e, i);
    });
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
