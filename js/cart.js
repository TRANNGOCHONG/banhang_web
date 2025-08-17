function renderCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const tbody = document.querySelector("#cart-table tbody");
    tbody.innerHTML = "";
  
    let total = 0;
    cart.forEach((item, index) => {
      let itemTotal = item.price * item.quantity;
      total += itemTotal;
      tbody.innerHTML += `
        <tr>
          <td>${item.name}</td>
          <td>${item.price.toLocaleString()}đ</td>
          <td>
            <button onclick="updateQuantity(${index}, -1)">-</button>
            ${item.quantity}
            <button onclick="updateQuantity(${index}, 1)">+</button>
          </td>
          <td>${itemTotal.toLocaleString()}đ</td>
          <td><button onclick="removeItem(${index})">Xóa</button></td>
        </tr>
      `;
    });
  
    document.getElementById("cart-total").innerText = "Tổng cộng: " + total.toLocaleString() + "đ";
  }
  
  function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
  
  function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
  
  document.addEventListener("DOMContentLoaded", renderCart);
  