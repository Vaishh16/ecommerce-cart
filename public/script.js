let products = [];
let cart = [];

fetch("/api/products")
    .then(response => response.json())
    .then(data => {
        products = data;
        displayProducts();
    });

function displayProducts() {
    const container = document.getElementById("products");

    products.forEach(product => {
        container.innerHTML += `
            <div class="product">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);

    cart.push(product);

    displayCart();
}

function displayCart() {
    const container = document.getElementById("cart");

    container.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        container.innerHTML += `
            <p>
                ${item.name} - ₹${item.price}
                <button onclick="removeItem(${index})">Remove</button>
            </p>
        `;
    });

    document.getElementById("total").innerText = total;
}

function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Order placed successfully!");
    cart = [];
    displayCart();
}