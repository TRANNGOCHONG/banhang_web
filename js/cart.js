const cartItemsDiv = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `
            <p>${item.name} - ${item.quantity} x ${item.price}</p>
        `;
        cartItemsDiv.appendChild(div);

        let giaSo = parseInt(item.price.replace(/\D/g, ''));
        total += giaSo * item.quantity;
    });

    cartTotalEl.innerText = `Tổng tiền: ${total.toLocaleString()}đ`;
}

function clearCart() {
    localStorage.removeItem('cart');
    cart = [];
    renderCart();
}

renderCart();

