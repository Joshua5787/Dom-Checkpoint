const cartItems = [
    { id: 1, name: 'Item 1', price: 10, quantity: 1, liked: false },
    { id: 2, name: 'Item 2', price: 20, quantity: 1, liked: false },
];

function renderCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0};

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price}</span>
            <button onclick="changeQuantity(${item.id}, -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity(${item.id}, 1)">+</button>
            <button onclick="deleteItem(${item.id})">Delete</button>
            <span class="heart ${item.liked ? 'liked' : ''}" onclick="toggleLike(${item.id})">❤</span>
        `});

