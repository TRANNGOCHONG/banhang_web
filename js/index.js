const products = [
    { id: 1, name: "Áo Thun", price: 150000, image: "images/ao1.jpg" },
    { id: 2, name: "Giày Sneaker", price: 450000, image: "images/giay1.jpg" }
  ];
  
  function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = products.find(p => p.id === productId);
    let existing = cart.find(item => item.id === productId);
  
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng!");
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    products.forEach(p => {
      productList.innerHTML += `
        <div class="product-card">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>${p.price.toLocaleString()}đ</p>
          <button onclick="addToCart(${p.id})">Thêm vào giỏ</button>
        </div>
      `;
    });
  });
  