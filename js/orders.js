const ordersListDiv = document.getElementById('orders-list');
let orders = JSON.parse(localStorage.getItem('orders')) || [];

function renderOrders() {
    if (orders.length === 0) {
        ordersListDiv.innerHTML = '<p>Chưa có đơn hàng nào.</p>';
        return;
    }

    ordersListDiv.innerHTML = '';

    orders.forEach(order => {
        const div = document.createElement('div');
        div.classList.add('order');

        div.innerHTML = `
            <h3>Đơn hàng #${order.id}</h3>
            <p><strong>Ngày đặt:</strong> ${order.date}</p>
            <p><strong>Tổng tiền:</strong> ${order.total.toLocaleString()}đ</p>
            <button onclick="viewDetail(${order.id})">Xem chi tiết</button>
            <button onclick="deleteOrder(${order.id})">Xóa</button>
        `;

        ordersListDiv.appendChild(div);
    });
}

function viewDetail(id) {
    window.location.href = `order-detail.html?id=${id}`;
}

function deleteOrder(id) {
    if (confirm('Bạn có chắc muốn xóa đơn hàng này?')) {
        orders = orders.filter(o => o.id !== id);
        localStorage.setItem('orders', JSON.stringify(orders));
        renderOrders();
    }
}

renderOrders();
