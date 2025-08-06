function displayOrderDetail() {
    const orderId = localStorage.getItem("orderDetailId");
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    const order = orders.find(o => o.id == orderId);

    const container = document.getElementById("order-detail");

    if (!order) {
        container.innerHTML = "<p>Không tìm thấy đơn hàng.</p>";
        return;
    }

    container.innerHTML = `
        <h3>Đơn hàng #${order.id}</h3>
        <p>Khách hàng: ${order.name}</p>
        <p>Địa chỉ: ${order.address}</p>
        <p>Ngày đặt: ${order.date}</p>
        <h4>Sản phẩm:</h4>
        <ul>
            ${order.items.map(item => `<li>${item.name} - ${item.quantity} x ${item.price.toLocaleString()}đ</li>`).join("")}
        </ul>
    `;
}

displayOrderDetail();
