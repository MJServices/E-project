// Product pagination and filtering functionality
const itemsPerPage = 5;
let currentPage = 1;
let filteredProducts = [];

// Get all products
const productGrid = document.querySelector(".product-grid");
const products = document.querySelectorAll(".product-card");
const pagination = document.querySelector(".pagination");
const sortSelect = document.getElementById("sort");
const cardWidth = 300; // card width + gap

// Initialize
function init() {
  filteredProducts = Array.from(products);
  updatePagination();
  displayProducts();
  setupEventListeners();
}

// Initialize pagination
function initPagination() {
  const totalScroll = productGrid.scrollWidth || 1; // Ensure valid value
  const visibleWidth = productGrid.offsetWidth || 1; // Avoid division by 0
  const pageCount = Math.ceil(totalScroll / visibleWidth);

  // Create pagination buttons
  let paginationHTML = `<li><a href="#" data-page="prev">❮</a></li>`;
  for (let i = 1; i <= pageCount; i++) {
    paginationHTML += `<li><a href="#" data-page="${i}">${i}</a></li>`;
  }
  paginationHTML += `<li><a href="#" data-page="next">❯</a></li>`;
  pagination.innerHTML = paginationHTML;

  // Add click handlers
  pagination.addEventListener("click", (e) => {
    e.preventDefault();
    const page = e.target.dataset.page;
    if (!page) return;

    const currentScroll = productGrid.scrollLeft;
    const maxScroll = productGrid.scrollWidth - productGrid.offsetWidth;

    if (page === "prev") {
      productGrid.scrollTo({
        left: currentScroll - visibleWidth,
        behavior: "smooth",
      });
    } else if (page === "next") {
      productGrid.scrollTo({
        left: currentScroll + visibleWidth,
        behavior: "smooth",
      });
    } else {
      productGrid.scrollTo({
        left: (parseInt(page) - 1) * visibleWidth,
        behavior: "smooth",
      });
    }
  });

  // Update active page on scroll
  productGrid.addEventListener("scroll", () => {
    const currentPage =
      Math.round(productGrid.scrollLeft / (visibleWidth || 1)) + 1;
    updateActivePage(currentPage);
  });
}

// Update active page
function updateActivePage(page) {
  const visibleWidth = productGrid.offsetWidth || 1; // Avoid division by 0
  const currentPage = Math.round(productGrid.scrollLeft / visibleWidth) + 1;
  console.log("Current Page:", currentPage); // Debugging log
  const buttons = pagination.querySelectorAll("li");
  buttons.forEach((btn) => btn.classList.remove("active"));
  const activeBtn = pagination.querySelector(`li a[data-page="${page}"]`);
  if (activeBtn) activeBtn.parentElement.classList.add("active");
}

// Display products for current page
function displayProducts() {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  // Hide all products
  products.forEach((product) => {
    product.style.display = "none";
    product.classList.remove("visible");
  });

  // Show only the products for current page
  filteredProducts.slice(start, end).forEach((product, index) => {
    product.style.display = "flex";
    // Add a small delay for a fade-in effect
    setTimeout(() => {
      product.classList.add("visible");
    }, index * 100);
  });
}

// Sort products
function sortProducts(criteria) {
  switch (criteria) {
    case "price-low":
      filteredProducts.sort((a, b) => {
        const priceA = parseFloat(
          a
            .querySelector(".current-price")
            .textContent.replace("$", "")
            .replace(",", "")
        );
        const priceB = parseFloat(
          b
            .querySelector(".current-price")
            .textContent.replace("$", "")
            .replace(",", "")
        );
        return priceA - priceB;
      });
      break;
    case "price-high":
      filteredProducts.sort((a, b) => {
        const priceA = parseFloat(
          a
            .querySelector(".current-price")
            .textContent.replace("$", "")
            .replace(",", "")
        );
        const priceB = parseFloat(
          b
            .querySelector(".current-price")
            .textContent.replace("$", "")
            .replace(",", "")
        );
        return priceB - priceA;
      });
      break;
    case "newest":
      // Assuming first items are newest
      filteredProducts.reverse();
      break;
    default:
      // Reset to original order
      filteredProducts = Array.from(products);
  }
  currentPage = 1;
  updatePagination();
  displayProducts();
}

// Add smooth scroll when changing pages
function scrollToTop() {
  const productSection = document.querySelector(".product-grid");
  productSection.scrollIntoView({ behavior: "smooth" });
}

// Setup event listeners
function setupEventListeners() {
  // Pagination clicks
  pagination.addEventListener("click", (e) => {
    e.preventDefault();
    const page = e.target.dataset.page;

    if (!page) return;

    if (page === "prev" && currentPage > 1) {
      currentPage--;
      scrollToTop();
    } else if (
      page === "next" &&
      currentPage < Math.ceil(filteredProducts.length / itemsPerPage)
    ) {
      currentPage++;
      scrollToTop();
    } else if (page !== "prev" && page !== "next") {
      currentPage = parseInt(page);
      scrollToTop();
    }

    updatePagination();
    displayProducts();
  });

  // Sort change
  sortSelect.addEventListener("change", (e) => {
    sortProducts(e.target.value);
  });

  // Add hover effect for product cards
  products.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
      card.style.transition = "transform 0.3s ease";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });
}

// Sort products (simplified)
document.getElementById("sort").addEventListener("change", (e) => {
  const products = Array.from(document.querySelectorAll(".product-card"));
  const sorted = products.sort((a, b) => {
    const priceA = parseFloat(
      a.querySelector(".current-price").textContent.replace(/[^0-9.-]+/g, "")
    );
    const priceB = parseFloat(
      b.querySelector(".current-price").textContent.replace(/[^0-9.-]+/g, "")
    );
    return e.target.value === "price-low" ? priceA - priceB : priceB - priceA;
  });

  productGrid.innerHTML = "";
  sorted.forEach((card) => productGrid.appendChild(card));
  productGrid.scrollTo({ left: 0, behavior: "smooth" });
  updateActivePage(1);
});

// Add to cart functionality using localStorage
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProduct = cart.find((item) => item.id === product.id);

  if (!existingProduct) {
    cart.push(product); // Add new product to cart
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

// Setup add-to-cart buttons
document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const product = {
        id: button.dataset.id,
        name: button.dataset.name,
        price: parseFloat(button.dataset.price),
        image: button.dataset.image,
      };
      addToCart(product);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Document loaded. Initializing..."); // Debugging log
  initPagination();
  setupAddToCartButtons(); // Initialize add-to-cart buttons
  updateCartCount(); // Initialize cart count
});
