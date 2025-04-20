function initializeShop (){
    const products = getProducts();
    const productList = document.getElementById ('productList');

    createShopItems(productList, products);

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
                src="img/${product.name}.jpg" 
                alt="${product.name}" 
                style="aspect-ratio: 1 / 1; object-fit: cover;"
                />
            </div>
            <div class="card-body p-4">
                <div class="text-center">
                <h5 class="fw-bolder">${product.name}</h5>
                <p class="text-muted mb-0">$${product.price.toFixed(2)}</p>
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
}

initializeShop ();



