function placeOrder() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    if (!name || !address) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Giỏ hàng trống");
        return;
    }

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrder = {
        id: Date.now(),
        name,
        address,
        items: cart,
        date: new Date().toLocaleString()
    };

    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem("cart");

    alert("Đặt hàng thành công!");
    window.location.href = "orders.html";
}
