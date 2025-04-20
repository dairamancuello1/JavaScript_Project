// funciones

// function getCategoryById (id) {
//     return categories.find(category => id === category.id);
// }

// function promptIsNotNull(promptInput) {
//     if (promptInput) {
//         return true
//     }
//     else return false
// }

// function getProductById(id) {
//     return products.find(product => id === product.id);
// }

// function listCategoriesConsole() {
//     console.log ('Lista de categorias:');
//     for (let i = 0; i < categories.length; i++) {
//         const categoriesArray = categories[i];
//         console.log (`ID Categoria: ${categoriesArray.id} - Nombre: ${categoriesArray.name}`)
//     } 
// }

// function listCategoriesPrompt() {
//     let categoryList = '';
//     for (let i = 0; i < categories.length; i++) {
//         const categoriesArray = categories[i];
//         categoryList += `ID: ${categoriesArray.id} - Nombre: ${categoriesArray.name}\n`;
//     }
//     return categoryList 
// }

// function listProductsByCategoryConsole(categoryId) {
//     for (let i = 0; i < products.length; i++) {
//         const productsArray = products[i];
//         if (productsArray.categoryId === categoryId){
//             console.log (`ID Producto: ${productsArray.id} - Nombre: ${productsArray.name} - Precio: ${productsArray.price} - Stock: ${productsArray.stock}`);
//         }
//     } 
// }

// function listProductbyCategoryPrompt(categoryId) {
//     let productList = '';
//     for (let i = 0; i < products.length; i++) {
//         const productsArray = products[i];
//         if (productsArray.categoryId === categoryId) {
//             productList += `ID: ${productsArray.id} - Nombre: ${productsArray.name} - Precio: ${productsArray.price} - Stock: ${productsArray.stock}\n`;
//         }
//     }
//     return productList 
// }


// logica
// function selectCategory() {
//     const categorySelectedId = prompt(`Ingrese el ID de categoria de producto que desea comprar\n` + listCategoriesPrompt());
//     if (promptIsNotNull(categorySelectedId))
//         {const categorySelected = getCategoryById(parseInt(categorySelectedId));
//         if (categorySelected) {
//             console.log('Categoria Seleccionada: ', categorySelected);
//             listProductsByCategoryConsole(categorySelected.id);
//             selectProduct(categorySelected.id);
//             }else {
//             alert('La categoria no existe');
//             selectCategory ()
//         }
//     }
// }

// function selectProduct(categoryId) {
//     const productSelectedId = prompt(`Ingrese el ID del producto que desee comprar\n` + listProductbyCategoryPrompt(categoryId)); 
//     if (promptIsNotNull(productSelectedId)) {
//         const productSelected = getProductById(parseInt(productSelectedId));
//         if (productSelected && categoryId === productSelected.categoryId) {
//             console.log('Producto Seleccionado: ', productSelected);
//             verifyStockProduct(productSelected);
//         } else {
//             alert('El producto no existe');
//             selectProduct(categoryId);
//         }
//     }

// }

// function verifyStockProduct (productSelected) {
//     const value = parseInt(prompt('Ingrese la cantidad del producto'));
//     if (productSelected.stock >= value && value !== 0) {
//         cart.push(value * productSelected.price);
//         console.log(cart);
//         modifyStock(productSelected, value)
//         if (confirm('Desea agregar otro producto?')) {
//             selectCategory();
//         }
//         else {
//             console.log(`Total del Carrito ${totalCart()}`);
//             alert(`Total del Carrito ${totalCart()}`);
//         }
//     } 
//     else {
//         alert (`No hay stock o no es válido. Stock disponible: ${productSelected.stock}`)
//         selectCategory();
//     }
// }

// function modifyStock (productSelected, value) {
//     productSelected.stock = (productSelected.stock - value);
// }

// function totalCart () {
//     let total = 0;
//     for (let i = 0; i < cart.length; i++) {
//         total = total + cart[i];    
//     }
//     return total
// }

// inicio

// listCategoriesConsole();
// selectCategory();

