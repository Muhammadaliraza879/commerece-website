function login(params) {
  console.log((location.href = "./login.html"));
}

function Menu(){
  var element = document.getElementById('popup_menu');
  element.classList.toggle('active');
}

// Select all "Add To Cart" buttons
const addToCartButtons = document.querySelectorAll(".cart-btn");

// Add event listener to each button
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCartClicked);
});

// Function to handle click event
function addToCartClicked(event) {
  // Get the button that was clicked
  const button = event.target;

  // Get the product that was clicked
  const product = button.parentElement;

  // Get the product information (name and price)
  const productName = product.querySelector("h3").innerText;
  const productPrice = product.querySelector("h6").innerText;

  // Create a new cart item
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.innerHTML = `
    <span class="cart-item-name">${productName}</span>
    <span class="cart-item-price">${productPrice}</span>
    <button class="remove-btn">Remove</button>
  `;

  // Add the cart item to the cart
  const cartItems = document.querySelector(".cart-items");
  cartItems.appendChild(cartItem);

  // Update the cart total
  updateCartTotal();
}
