const orderDetailDiv = document.getElementById('order-detail');
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

const orders = JSON.parse(localStorage.getItem('orders')) || [];
const order = orders.find(o => o.id === id);

if (!order) {
    orderDetailDiv.innerHTML = '<p>Đơn hàng không tồn tại!</p>';
} else {
    orderDetailDiv.innerHTML = `
        <h2>Đơn hàng #${order.id}</h2>
        <p><strong>Khách hàng:</strong> ${order.name}</p>
        <p><strong>Địa chỉ:</strong> ${order.address}</p>
        <p><strong>Điện thoại:</strong> ${order.phone}</p>
        <p><strong>Ngày đặt:</strong> ${order.date}</p>
        <h3>Sản phẩm:</h3>
        <ul>
            ${order.items.map(item => `<li>${item.name} - ${item.quantity} x ${item.price}</li>`).join('')}
        </ul>
        <p><strong>Tổng tiền:</strong> ${order.total.toLocaleString()}đ</p>
    `;
}
