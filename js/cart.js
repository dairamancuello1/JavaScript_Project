function updateCartBadge() {
    const cart = getCart(); 

    const quantityTotal = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.getElementById('badge');

    if (badge) {
        badge.innerHTML = `
        <span>${quantityTotal}</span>
        `;
    }
}

function getCart() {
    const cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(cart);
    }
    return [];
}

function addToCart(productId, quantity) {
    const cart = getCart(); 
    const productInCart = cart.find(product => productId === product.productId);

    if (productInCart) {
        productInCart.quantity += parseInt(quantity);
    } else {
        cart.push({
            productId: productId,
            quantity: parseInt(quantity)
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart)); 
    
    updateCartBadge();
}

function removeFromCart(productId) {
    const cart = getCart(); 
    const productInCartIndex = cart.findIndex(product => productId === product.productId);
    

    if (productInCartIndex !== -1) {
        cart.splice(productInCartIndex, 1);

        localStorage.setItem('cart', JSON.stringify(cart)); 
        
        updateCartBadge();

        removeFromDOM(productId);

        calculateTotal(cart, getProducts());
    }
}

function removeFromDOM(productId) {
    const cartDiv = document.getElementById(`cartItem${productId}`)

    if (cartDiv) {
        cartDiv.remove();
    }
}

// inicializar el carrito
function initializeCart() {
    const cart = getCart();
    const products = getProducts();

    updateCartBadge();

    const cartItem = document.getElementById('cartItem');
    if (cartItem) {
        createCartItem (cart, cartItem, products);
        calculateTotal(cart, products);
    }
}

// crear un item del carrito y mostrar el total
function createCartItem(cart, cartItem, products) {
    cart.forEach(item => {
        const product = products.find(product => product.id === item.productId);
        if (product) {
            const cartDiv = document.createElement('div');

            cartDiv.classList.add('d-flex', 'flex-row', 'justify-content-between', 'align-items-center', 'p-2', 'bg-white', 'mt-4', 'px-3', 'rounded');
            cartDiv.id = `cartItem${product.id}`;

            cartDiv.innerHTML = `
                <div class="mr-1"><img class="rounded" src="img/${product.name}.jpg" width="70"></div>
                <div class="d-flex flex-column align-items-center product-details">
                    <span class="font-weight-bold">${product.name}</span>
                </div>
                <div class="d-flex flex-row align-items-center qty">
                    <i class="fa fa-minus text-danger"></i>
                    <h5 class="text-grey mt-1 mr-1 ml-1">${item.quantity}</h5>
                    <i class="fa fa-plus text-success"></i>
                </div>
                <div>
                    <h5 class="text-grey">$${product.price.toFixed(2)}</h5>
                </div>
                <div class="d-flex align-items-center">
                    <button
                        class="btn removeFromCart" 
                        type="button"
                        data-product-id="${product.id}"
                    >
                        <i class="bi bi-trash3-fill"></i>
                    </button>
                </div> 
            `;
            cartItem.appendChild(cartDiv);
        }
    });
}

function calculateTotal(cart, products) {
    let total = 0;

    cart.forEach(item => {
        const product = products.find(product => product.id === item.productId);

        if (product) {
            total += product.price * item.quantity
        }
    });

    showTotal(total);
}

function showTotal (total){
    const totalDiv = document.getElementById ('totalCart');
    totalDiv.innerHTML =`
    Total del carrito: $${total}
    `
}

initializeCart();


