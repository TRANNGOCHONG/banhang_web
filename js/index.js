const products = [
    { id: 1, name: 'Sản phẩm 1', price: '100000đ' },
    { id: 2, name: 'Sản phẩm 2', price: '200000đ' },
    { id: 3, name: 'Sản phẩm 3', price: '300000đ' }
];

const productList = document.getElementById('product-list');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderProducts() {
    products.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="addToCart(${product.id})">Thêm vào giỏ</button>
        `;
        productList.appendChild(div);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Đã thêm vào giỏ hàng!');
}

renderProducts();

