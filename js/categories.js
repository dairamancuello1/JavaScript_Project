async function initializeCategories (){
    try {
        const totalCategories = await getCategories();
        const categoriesList = document.getElementById('categories');
    
        createCategoryCard (categoriesList, totalCategories);
    }
    catch(error) {
        utilities.toast.show(
            'Error',
            'Error al cargar las categorías'
        );
    }
} 

function createCategoryCard(categoriesList, categories) {
    categories.forEach(category => {
        const categoriesDiv = document.createElement('div');
       
        categoriesDiv.classList.add('col', 'mb-5');
        categoriesDiv.innerHTML = `
            <div class="card h-100">
                <!-- Product image-->
                <img class="card-img-top" src="${category.img}" alt="${category.description}" />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Category name-->
                        <h5 class="fw-bolder">${category.name}</h5>
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <a class="btn btn-outline-dark mt-auto" href="/shop.html?categoryId=${category.id}">
                            Ver más
                        </a>
                    </div>
                </div>
            </div>
        `;

        categoriesList.appendChild(categoriesDiv);
    });
}


initializeCategories ();