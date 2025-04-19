function getCategoryId () {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('categoryId'));
} 
// retorna el numero de categoria --> tengo el numero de categoria

function getCategory() {
    const categoryId = getCategoryId();
    return products.find(product => product.categoryId === categoryId);
} 
//retorna un array de productos que coincidan con la categoria 
// ---> tengo los productos de esa categoria

// me falta listarlos

function createShopByCategory(products, productList) {
    const categoryNumber = getCategoryId();
    // Removed redundant declaration of products
    products.forEach(product => {
        if (product.categoryId === categoryNumber) {

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
        }
    });

}

function initializeShopbyCategory (){
    const productList = document.getElementById('productListByCategory');
    if (productList) {
        createShopByCategory(products, productList);
    } else {
        console.error('Error: productListbyCategory element not found in the DOM.');
    }
} 

initializeShopbyCategory();