async function initializeItem(){
    try {
        const itemId = getItemId();
        const item = await getProductsByID(itemId);
        const itemSection = document.getElementById('itemSection')

        createItem(item, itemSection);
    }
    catch(error) {
        utilities.toast.show(
            'Error',
            'Error al cargar el producto',
        );
    }
} 

function getItemId () {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('productId'));
}

function createItem(item, itemSection) {
    itemSection.classList.add('col', 'mb-5')
    itemSection.innerHTML = `
        <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="${item.img}" alt="${item.description}" /></div>
        <div class="col-md-6">
            <h1 class="display-5 fw-bolder">${item.name}</h1>
            <div class="fs-5 mb-5">
                <span>${utilities.numbers.getCurrencyFormat(item.price)}</span>
            </div>
            <p class="lead">${item.description}</p>
            <div class="d-flex">
                <!-- a implementar en siguientes entregas   
                <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem" />
                -->
                <button class="btn btn-outline-dark flex-shrink-0 addToCart" data-product-id="${item.id}" type="button">
                    <i class="bi-cart-fill me-1"></i>
                    Agregar al carrito
                </button>
            </div>
        </div>
    `;

    addToCartButtonsEvents();
}

initializeItem();

