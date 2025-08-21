// js/product.js

// Dummy products list (should match main.js)
const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 14999,
    image: "images/phone.jpg",
    description: "64MP camera, AMOLED display, 5000mAh battery"
  },
  {
    id: 2,
    name: "Headphones",
    price: 2999,
    image: "images/headphones.jpg",
    description: "Wireless, Noise Cancelling, 30hr battery"
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 3499,
    image: "images/watch.jpg",
    description: "Heart rate, waterproof, 7-day battery"
  },
  {
    id: 4,
    name: "Laptop",
    price: 52999,
    image: "images/laptop.jpg",
    description: "16GB RAM, 512GB SSD, i5 12th Gen"
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 1299,
    image: "images/bluetooth speaker.jpg",
    description: "Deep bass, portable, Bluetooth 5.0"
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: 799,
    image: "images/mouse.jpg",
    description: "RGB, ergonomic, 6 buttons"
  }
];

// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

const product = products.find(p => p.id === productId);
const detailsDiv = document.getElementById("product-details");

if (!product) {
  detailsDiv.innerHTML = "<p>Product not found.</p>";
} else {
  detailsDiv.innerHTML = `
    <div id="product-details">
      <img src="${product.image}" alt="${product.name}" style="max-width: 300px;" />
      <h2>${product.name}</h2>
      <p><strong>Price:</strong> ₹${product.price}</p>
      <p><strong>Description:</strong> ${product.description}</p>
      <div class="button-group">
        <button onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
        <button onclick='buyNow(${JSON.stringify(product)})'>Buy Now</button>
      </div>
    </div>
  `;
}

// Recommended products (all others except current)
const recommendedDiv = document.getElementById("recommended-products");
products
  .filter(p => p.id !== productId)
  .forEach(p => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <a href="product.html?id=${p.id}">
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
      </a>
      <p>₹${p.price}</p>
      <div class="button-group">
        <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
        <button onclick='buyNow(${JSON.stringify(p)})'>Buy Now</button>
      </div>
    `;
    recommendedDiv.appendChild(div);
  });

// Same functions from main.js
window.addToCart = function(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart`);
};

window.buyNow = function(product) {
  localStorage.setItem("buyNowProduct", JSON.stringify(product));
  window.location.href = "checkout.html";
};