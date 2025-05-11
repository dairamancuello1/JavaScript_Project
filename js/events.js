function addToCartButtonsEvents() {
    const addToCartButtons = document.getElementsByClassName('addToCart');

    Array.from(addToCartButtons).forEach(button => {
        button.addEventListener('click', () => {
            const productId = parseInt(button.getAttribute('data-product-id'));
            const quantity = 1;

            addToCart(productId,quantity);
        });
    });
}

function removeFromCartCartButtonsEvents() {
    const removeFromCartButtons = document.getElementsByClassName('removeFromCart');

    Array.from(removeFromCartButtons).forEach(button => {
        button.addEventListener('click', () => {
            const productId = parseInt(button.getAttribute('data-product-id'));

            removeFromCart(productId);
        });
    });
}
