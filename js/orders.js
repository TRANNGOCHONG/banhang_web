document.addEventListener("DOMContentLoaded", () => {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    const ordersList = document.getElementById("orders-list");
    ordersList.innerHTML = "";
  
    if (orders.length === 0) {
      ordersList.innerHTML = "<p>Bạn chưa có đơn hàng nào.</p>";
      return;
    }
  
    orders.forEach(order => {
      ordersList.innerHTML += `
        <li>
          <a href="order-detail.html?id=${order.id}">
            Đơn hàng #${order.id} - ${order.total.toLocaleString()}đ - ${order.date}
          </a>
        </li>
      `;
    });
  });
  