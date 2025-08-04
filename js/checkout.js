const orderItemsDiv = document.getElementById('order-items');
const orderTotalEl = document.getElementById('order-total');
const form = document.getElementById('checkout-form');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderOrder() {
    orderItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `<p>${item.name} - ${item.quantity} x ${item.price}</p>`;
        orderItemsDiv.appendChild(div);

        let giaSo = parseInt(item.price.replace(/\D/g, ''));
        total += giaSo * item.quantity;
    });

    orderTotalEl.innerText = `Tổng tiền: ${total.toLocaleString()}đ`;
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!name || !address || !phone) {
        alert('Vui lòng nhập đầy đủ thông tin');
        return;
    }
    if (!/^[0-9]{9,11}$/.test(phone)) {
        alert('Số điện thoại không hợp lệ');
        return;
    }

    let total = 0;
    cart.forEach(item => {
        let giaSo = parseInt(item.price.replace(/\D/g, ''));
        total += giaSo * item.quantity;
    });

    const order = {
        id: Date.now(),
        name,
        address,
        phone,
        items: cart,
        total,
        date: new Date().toLocaleString()
    };

    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    localStorage.removeItem('cart');

    alert('Đặt hàng thành công!');
    window.location.href = 'orders.html';
});

renderOrder();

