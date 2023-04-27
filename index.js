function login(params) {
  console.log((location.href = "./login.html"));
}

function Menu(){
  var element = document.getElementById('popup_menu');
  element.classList.toggle('active');
}

const addToCartButton = document.getElementById('add-to-cart');
addToCartButton.addEventListener('click', addToCart);
function addToCart() {
  // Get the item details (e.g. name, price, quantity) from the page
  const itemName = document.getElementById('item-name').textContent;
  const itemPrice = parseFloat(document.getElementById('item-price').textContent);
  const itemQuantity = parseInt(document.getElementById('item-quantity').value);

  // Add the item to the cart or update the quantity if it already exists
  const cart = JSON.parse(localStorage.getItem('cart')) || {};
  if (cart[itemName]) {
    cart[itemName].quantity += itemQuantity;
  } else {
    cart[itemName] = { price: itemPrice, quantity: itemQuantity };
  }
  localStorage.setItem('cart', JSON.stringify(cart));

  // Update the cart icon or summary to reflect the new contents
  updateCartIcon();
  updateCartSummary();
}
