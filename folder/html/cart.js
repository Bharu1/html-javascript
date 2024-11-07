let quantity = 0;

function decreaseQuantity() {
    if (quantity > 0) {
        quantity--;
        updateQuantities();
    }
}

function increaseQuantity() {
    quantity++;
    updateQuantities();
}

function updateQuantities() {
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('cartCount').textContent = quantity;
}

function addToCart() {
    alert('Added ' + quantity + ' items to the cart');
}

