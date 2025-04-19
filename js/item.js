function initializeItem (){
    const item = getItem();
    const itemSection = document.getElementById ('itemSection')
    createItem(item, itemSection);
} 

function getItemId () {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('productId'));
}

function getItem() {
    const itemId = getItemId();
    return products.find(product => product.id === itemId);
}

function createItem(item, itemSection) {

        itemSection.classList.add('col', 'mb-5')
        itemSection.innerHTML = `
                    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." /></div>
                    <div class="col-md-6">
                        <h1 class="display-5 fw-bolder">${item.name}</h1>
                        <div class="fs-5 mb-5">
                            <span>${item.price}</span>
                        </div>
                        <p class="lead">${item.description}</p>
                        <div class="d-flex">
                            <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem" />
                            <button class="btn btn-outline-dark flex-shrink-0" type="button">
                                <i class="bi-cart-fill me-1"></i>
                                Agregar al carrito
                            </button>
                        </div>
                    </div>`;
};

initializeItem();

