function displayOrders() {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    const orderList = document.getElementById("order-list");

    if (orders.length === 0) {
        orderList.innerHTML = "<p>Chưa có đơn hàng nào.</p>";
        return;
    }

    orders.forEach(order => {
        const div = document.createElement("div");
        div.classList.add("order-item");
        div.innerHTML = `
            <h3>Đơn hàng #${order.id}</h3>
            <p>${order.date}</p>
            <p>${order.items.length} sản phẩm</p>
            <button onclick="viewDetail(${order.id})">Xem chi tiết</button>
        `;
        orderList.appendChild(div);
    });
}

function viewDetail(id) {
    localStorage.setItem("orderDetailId", id);
    window.location.href = "order-detail.html";
}

displayOrders();
