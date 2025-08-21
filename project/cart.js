// js/cart.js
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");

let total = 0;
cartContainer.innerHTML = "";

cartItems.forEach((item, index) => {
  total += item.price;

  const div = document.createElement("div");
  div.innerHTML = `
    <h4>${item.name}</h4>
    <p>Price: ₹${item.price}</p>
    <button onclick="removeItem(${index})">Remove</button>
    <hr>
  `;
  cartContainer.appendChild(div);
});

totalDisplay.innerText = `Total: ₹${total}`;

window.removeItem = function(index) {
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  location.reload();
};