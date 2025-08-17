document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("checkout-form").addEventListener("submit", function(event) {
      event.preventDefault();
  
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (cart.length === 0) {
        alert("Giỏ hàng trống!");
        return;
      }
  
      let name = document.getElementById("name").value;
      let address = document.getElementById("address").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;
  
      let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      let orderDetails = cart.map(item => 
        `${item.name} x ${item.quantity} = ${(item.price * item.quantity).toLocaleString()}đ`
      ).join("\n");
  
      let orderDate = new Date().toLocaleString();
  
      let emailParams = {
        customer_name: name,
        customer_email: email,
        customer_phone: phone,
        customer_address: address,
        order_summary: orderDetails,
        total_price: total.toLocaleString() + "đ",
        date: orderDate
      };
  
      emailjs.send("conmemay3231", "template_2jr6sz3", emailParams, "a3vWPSgpFhjRHox-G")
        .then(function(response) {
          alert("✅ Đơn hàng đã được gửi! Bạn sẽ nhận email thông báo.");
  
          let orders = JSON.parse(localStorage.getItem("orders")) || [];
          orders.push({
            id: Date.now(),
            name,
            address,
            email,
            phone,
            cart,
            total,
            date: orderDate
          });
          localStorage.setItem("orders", JSON.stringify(orders));
  
          localStorage.removeItem("cart");
          window.location.href = "orders.html";
        }, function(error) {
          alert("❌ Gửi email thất bại!");
          console.error("EmailJS Error:", error);
        });
    });
  });
  