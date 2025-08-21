document.addEventListener("DOMContentLoaded", () => {
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

  const productList = document.getElementById("product-list");

  products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <a href="product.html?id=${product.id}">
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <div class="button-group">
        <button onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
        <button onclick='buyNow(${JSON.stringify(product)})'>Buy Now</button>
      </div>
    `;
    productList.appendChild(div);
  });
});

// Function to add product to cart (you can extend this to real cart logic later)
window.addToCart = function(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart`);
};

// Buy now logic
window.buyNow = function(product) {
  localStorage.setItem("buyNowProduct", JSON.stringify(product));
  window.location.href = "checkout.html";
};