function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h3>${item.name}</h3>
                <p>${item.price.toLocaleString()}đ x ${item.quantity}</p>
            </div>
            <button onclick="removeItem(${item.id})">Xóa</button>
        `;
        cartItems.appendChild(div);
    });

    cartTotal.innerText = "Tổng: " + total.toLocaleString() + "đ";
}

function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function checkout() {
    window.location.href = "checkout.html";
}

displayCart();
