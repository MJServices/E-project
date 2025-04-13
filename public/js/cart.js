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
    <tr>
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
</tr>
<style>
/* Cart Items Row */
.cart-items tr {
  transition: all 0.3s ease;
}

.cart-items tr:hover {
  background: rgba(255, 107, 0, 0.08);
}

/* Product Column */
.product {
  display: flex;
  align-items: center;
  padding: 20px;
}

.product img {
  width: 100px; /* Increased size */
  height: 100px; /* Increased size */
  object-fit: cover;
  border-radius: 12px;
  margin-right: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #eee; /* Subtle border for definition */
}

.cart-items tr:hover .product img {
  transform: scale(1.08);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.product-info {
  flex-grow: 1;
}

.product-info p {
  margin: 0;
  font-size: 18px; /* Increased size */
  font-weight: 600;
  color: #1a1a1a;
  letter-spacing: 0.3px;
  transition: color 0.2s ease;
}

.cart-items tr:hover .product-info p {
  color: #ff6b00;
}

/* Price Column */
.price {
  text-align: center;
  font-size: 16px; /* Increased size */
  font-weight: 600;
  color: #333;
}

/* Quantity Column */
.quantity {
  text-align: center;
}

.quantity span {
  font-size: 16px; /* Increased size */
  font-weight: 500;
  color: #333;
  display: inline-block;
  padding: 8px 14px; /* Larger padding */
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #ddd; /* Subtle border */
  transition: background 0.2s ease, transform 0.2s ease;
}

.cart-items tr:hover .quantity span {
  background: #ffe5d0;
  transform: scale(1.05);
}

/* Total Column */
.total {
  text-align: center;
  font-size: 16px; /* Increased size */
  font-weight: 700;
  color: #ff6b00;
}

/* Action Column */
.action {
  text-align: center;
}

.remove-btn {
  background: #fff;
  color: #ff3b30;
  border: 2px solid #ff3b30; /* Thicker border */
  border-radius: 8px;
  padding: 10px 16px; /* Larger padding */
  font-size: 14px; /* Increased size */
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.remove-btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.4s ease, height 0.4s ease;
}

.remove-btn:hover::after {
  width: 200%;
  height: 200%;
}

.remove-btn:hover {
  background: #ff3b30;
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(255, 59, 48, 0.3);
}

.remove-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 5px rgba(255, 59, 48, 0.2);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .product {
    padding: 15px;
  }

  .product img {
    width: 80px;
    height: 80px;
  }

  .product-info p {
    font-size: 16px;
  }

  .price,
  .quantity span,
  .total {
    font-size: 14px;
  }

  .quantity span {
    padding: 6px 12px;
  }

  .remove-btn {
    padding: 8px 12px;
    font-size: 13px;
  }
}

@media (max-width: 576px) {
  .product {
    flex-direction: column;
    text-align: center;
    padding: 10px;
  }

  .product img {
    width: 70px;
    height: 70px;
    margin-right: 0;
    margin-bottom: 12px;
  }

  .product-info p {
    font-size: 14px;
  }

  .price,
  .quantity span,
  .total {
    font-size: 13px;
  }

  .quantity span {
    padding: 5px 10px;
  }

  .remove-btn {
    padding: 6px 10px;
    font-size: 12px;
  }
}</style>
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
