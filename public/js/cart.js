document.addEventListener("DOMContentLoaded", () => {
  renderCart();
});

function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.getElementById("cart-items-container");
  const cartSubtotal = document.getElementById("cart-subtotal");
  cartItemsContainer.innerHTML = "";
  let subtotal = 0;

  cart.forEach((item, index) => {
    const quantity = item.quantity || 1;
    const total = item.price * quantity;
    subtotal += total;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="product">
        <img src="${item.image}" alt="${item.name}" style="object-fit: cover;">
        <div class="product-info">
          <p>${item.name}</p>
        </div>
      </td>
      <td class="price">$${item.price.toFixed(2)}</td>
      <td class="quantity">
        <span>${quantity}</span>
      </td>
      <td class="total">$${total.toFixed(2)}</td>
      <td class="action">
        <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
      </td>
    `;
    cartItemsContainer.appendChild(row);
  });

  cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
}

function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1); // Remove the product at the specified index
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart(); // Re-render the cart after removal
}

function continueShopping() {
  window.location.href = "../index.html";
}

function checkout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Proceeding to checkout...");
}
