document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
  
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let order = orders.find(o => o.id == id);
  
    const container = document.getElementById("order-detail");
  
    if (!order) {
      container.innerHTML = "<p>Không tìm thấy đơn hàng.</p>";
      return;
    }
  
    let details = order.cart.map(item => 
      `<li>${item.name} x ${item.quantity} = ${(item.price * item.quantity).toLocaleString()}đ</li>`
    ).join("");
  
    container.innerHTML = `
      <h2>Đơn hàng #${order.id}</h2>
      <p><strong>Khách hàng:</strong> ${order.name}</p>
      <p><strong>Email:</strong> ${order.email}</p>
      <p><strong>SĐT:</strong> ${order.phone}</p>
      <p><strong>Địa chỉ:</strong> ${order.address}</p>
      <p><strong>Ngày đặt:</strong> ${order.date}</p>
      <h3>Sản phẩm:</h3>
      <ul>${details}</ul>
      <h3>Tổng cộng: ${order.total.toLocaleString()}đ</h3>
    `;
  });
  