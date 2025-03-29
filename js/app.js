// constantes con las que voy a trabajar por ahora
const categories = [
    {
        id: 1,
        name: 'merch'
    },
    {
        id: 2,
        name: 'vinilos'
    },
    {
        id: 3,
        name: 'cds'
    }
];

const products = [
    // Merch
    {
        id: 1,
        name: 'Remera',
        price: 5000,
        stock: 3,
        categoryId: 1
    },
    {
        id: 2,
        name: 'Pantalon',
        price: 1000,
        stock: 3,
        categoryId: 1
    },
    {
        id: 3,
        name: 'Gorra',
        price: 2500,
        stock: 5,
        categoryId: 1
    },
    {
        id: 4,
        name: 'Buzo',
        price: 7000,
        stock: 2,
        categoryId: 1
    },
    
    // Vinilos
    {
        id: 5,
        name: 'Born to Die',
        price: 15000,
        stock: 4,
        categoryId: 2
    },
    {
        id: 6,
        name: 'Ultraviolence',
        price: 14000,
        stock: 3,
        categoryId: 2
    },
    {
        id: 7,
        name: 'Honeymoon',
        price: 16000,
        stock: 2,
        categoryId: 2
    },
    {
        id: 8,
        name: 'Lust for Life',
        price: 15500,
        stock: 5,
        categoryId: 2
    },
    
    // CDs
    {
        id: 9,
        name: 'Norman Fucking Rockwell!',
        price: 5000,
        stock: 6,
        categoryId: 3
    },
    {
        id: 10,
        name: 'Chemtrails over the Country Club',
        price: 5200,
        stock: 4,
        categoryId: 3
    },
    {
        id: 11,
        name: 'Blue Banisters',
        price: 5300,
        stock: 3,
        categoryId: 3
    },
    {
        id: 12,
        name: 'Did you know that there\'s a tunnel under Ocean Blvd',
        price: 5100,
        stock: 5,
        categoryId: 3
    }
];

// funciones

function getCategoryById (id) {
    return categories.find(category => id === category.id);
}

// logica
function selectCategory() {
    const categorySelectedId = prompt(`Vea la consola para conocer nuestras categorias.\n Ingrese el ID de categoria de producto que desea comprar`);
    const categorySelected = getCategoryById(parseInt(categorySelectedId));
//hacer un if para chequear que el prompt no sea null        
    if (categorySelected) {
        console.log('categorySelected', categorySelected);
    }else {
        alert('La categoria no existe');
        selectCategory ()
    } 
}

function listCategories() {
    console.log ('Lista de categorias:', categories); 
}

// inicio

listCategories();
selectCategory();



//alert('Inspeccione la consola para ver los productos disponibles para la categoria elegida');

//console.log('Productos para la categoria elegida:' )