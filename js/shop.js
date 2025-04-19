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
                <img 
                class="card-img-top" 
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" 
                alt="..." 
                />

                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">
                            ${product.name}
                        </h5>
                        ${product.price}
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
                            class="btn btn-dark mt-auto">
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



