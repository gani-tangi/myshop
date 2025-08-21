// js/checkout.js

// Get the product from localStorage
const product = JSON.parse(localStorage.getItem("buyNowProduct"));
const productDiv = document.getElementById("product-checkout");

if (!product) {
  productDiv.innerHTML = "<p>No product selected for checkout.</p>";
} else {
  productDiv.innerHTML = `
    <h2>${product.name}</h2>
    <img src="${product.image}" alt="${product.name}" style="max-width: 250px;" />
    <p>${product.description}</p>
    <p><strong>Price: ₹${product.price}</strong></p>
  `;
}

// Handle form submit
document.getElementById("checkout-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const name = formData.get("name");
  const address = formData.get("address");
  const phone = formData.get("phone");

  alert(`Thank you ${name}! Your order for ${product.name} has been placed.`);

  // Clear product from localStorage after "order"
  localStorage.removeItem("buyNowProduct");

  // Redirect back to home or orders page
  window.location.href = "index.html";
});