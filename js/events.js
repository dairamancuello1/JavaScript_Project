function eventButtons() {
    const addToCartButtons = document.getElementsByClassName('addToCart');
    const removeFromCartButtons = document.getElementsByClassName('removeFromCart');

    Array.from(addToCartButtons).forEach(button => {
        button.addEventListener('click', () => {
            const productId = parseInt(button.getAttribute('data-product-id'));
            const quantity = 1;

            addToCart(productId,quantity);
        });
    });

    Array.from(removeFromCartButtons).forEach(button => {
        button.addEventListener('click', () => {
            const productId = parseInt(button.getAttribute('data-product-id'));

            removeFromCart(productId);
        });
    });
}

eventButtons();
