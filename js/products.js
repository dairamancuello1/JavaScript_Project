const products = [
    // Merch
    {
        id: 1,
        name: 'Remera',
        price: 5000,
        stock: 3,
        categoryId: 1,
        description: 'Remera de alta calidad con diseño exclusivo.'
    },
    {
        id: 2,
        name: 'Pantalon',
        price: 1000,
        stock: 3,
        categoryId: 1,
        description: 'Pantalón cómodo y resistente, ideal para cualquier ocasión.'
    },
    {
        id: 3,
        name: 'Gorra',
        price: 2500,
        stock: 5,
        categoryId: 1,
        description: 'Gorra ajustable con diseño moderno.'
    },
    {
        id: 4,
        name: 'Buzo',
        price: 7000,
        stock: 2,
        categoryId: 1,
        description: 'Buzo abrigado y suave, perfecto para el invierno.'
    },
    
    // Vinilos
    {
        id: 5,
        name: 'Born to Die',
        price: 15000,
        stock: 4,
        categoryId: 2,
        description: 'Vinilo del álbum Born to Die, edición de colección.'
    },
    {
        id: 6,
        name: 'Ultraviolence',
        price: 14000,
        stock: 3,
        categoryId: 2,
        description: 'Vinilo del álbum Ultraviolence, sonido de alta calidad.'
    },
    {
        id: 7,
        name: 'Honeymoon',
        price: 16000,
        stock: 2,
        categoryId: 2,
        description: 'Vinilo del álbum Honeymoon, ideal para los fans.'
    },
    {
        id: 8,
        name: 'Lust for Life',
        price: 15500,
        stock: 5,
        categoryId: 2,
        description: 'Vinilo del álbum Lust for Life, edición especial.'
    },
    
    // CDs
    {
        id: 9,
        name: 'Norman Fucking Rockwell!',
        price: 5000,
        stock: 6,
        categoryId: 3,
        description: 'CD del álbum Norman Fucking Rockwell!, imprescindible.'
    },
    {
        id: 10,
        name: 'Chemtrails over the Country Club',
        price: 5200,
        stock: 4,
        categoryId: 3,
        description: 'CD del álbum Chemtrails over the Country Club, gran calidad.'
    },
    {
        id: 11,
        name: 'Blue Banisters',
        price: 5300,
        stock: 3,
        categoryId: 3,
        description: 'CD del álbum Blue Banisters, para los coleccionistas.'
    },
    {
        id: 12,
        name: 'Did you know that there\'s a tunnel under Ocean Blvd',
        price: 5100,
        stock: 5,
        categoryId: 3,
        description: 'CD del álbum Did you know that there\'s a tunnel under Ocean Blvd, edición única.'
    }
];

// funciones
function getProducts() {
    return products;
}



