const products = [
    { id: 1, name: "Áo sơ mi", price: 200000, image: "images/ao1.jpg" },
    { id: 2, name: "Giày sneaker", price: 500000, image: "images/giay1.jpg" }
];

function displayProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price.toLocaleString()}đ</p>
            <button onclick="addToCart(${product.id})">Thêm vào giỏ</button>
        `;
        productList.appendChild(div);
    });
}

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng!");
}

displayProducts();
