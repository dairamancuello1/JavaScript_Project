const cachedResponsesMap = new Map();

async function getJSONContent(url) {
    try {
        if (cachedResponsesMap.has(url)) {
            return cachedResponsesMap.get(url);
        }

        const result = await fetch(url);
        
        if (result.ok) {
            try {
                const response = await result.json();

                cachedResponsesMap.set(url, response);
                return response;
            }
            catch (error) {
                throw new Error('Error parsing JSON');
            }
        } else {
            throw new Error(`HTTP error. Status: ${result.status}. Status text: ${result.statusText}`);
        }
    }
    catch (error) {
        console.error('Error fetching JSON content: ', error.message);
        throw error;
    }
}

async function getCategories() { 
    return getJSONContent('./data/categories.json');
}

async function getProducts() { 
    return getJSONContent('./data/products.json');
}

async function getProductsByCategory(categoryId) {
    try {
        const products = await getProducts();

        return products.filter(product => product.categoryId === categoryId);
    }
    catch {
        console.error('Error fetching products by category content: ', error.message);
        throw error;
    }
}

async function getProductsByID(productId) {
    try {
        const products = await getProducts();

        return products.find(product => product.id === productId);
    }
    catch {
        console.error('Error fetching products by category content: ', error.message);
        throw error;
    }
}
