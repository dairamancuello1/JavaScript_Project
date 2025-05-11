async function initializeShop (){
    try {
        const categoryId = getCategoryId();        
        const products = categoryId 
            ? await getProductsByCategory(categoryId)
            : await getProducts();
        const productList = document.getElementById('productList');

        createShopItems(productList, products);
    }
    catch(error) {
        utilities.toast.show(
            'Error',
            'Error al cargar los productos',
        );
    }
} 

function getCategoryId () {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = parseInt(urlParams.get('categoryId'));

    return !isNaN(categoryId) ? categoryId : undefined;
} 

function createShopItems(productList, products) {
    products.forEach(product => {
        const productDiv = document.createElement('div');

        productDiv.classList.add('col', 'mb-5')
        productDiv.innerHTML = `
        <div class="card h-100">
            <div class="ratio ratio-1x1 overflow-hidden">
                <img 
                class="card-img-top object-fit-cover w-100 h-100" 
                src="${product.img}" 
                alt="${product.description}"
                style="aspect-ratio: 1 / 1; object-fit: cover;"
                />
            </div>
            <div class="card-body p-4">
                <div class="text-center">
                <h5 class="fw-bolder">${product.name}</h5>
                <p class="text-muted mb-0">${utilities.numbers.getCurrencyFormat(product.price)}</p>
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                <a 
                    class="btn btn-outline-dark mt-auto" 
                    href="/item.html?productId=${product.id}"
                >
                    Ver
                </a>
                <button 
                    class="btn btn-dark mt-auto addToCart"
                    data-product-id="${product.id}"
                >
                    Agregar
                </button>
                </div>
            </div>
        </div>
        `;

        productList.appendChild(productDiv);
    });

    addToCartButtonsEvents();
}

initializeShop();
