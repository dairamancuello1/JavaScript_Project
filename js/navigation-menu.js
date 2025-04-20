const menuItems = [
    {
        name: 'Home',
        url: '/index.html'
    },
    {
        name: 'About Us',
        url: '/about.html'
    },
    {
        name: 'Shop All',
        url: '/shop.html'
    }
];

function initializeMenu() {
    const navigationMenu = document.getElementById('navigationMenu');
    
    if (navigationMenu) {
        navigationMenu.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light');

        createMenuContent(navigationMenu);
    } else { 
        console.log('No se encontro un elemento con el ID navigationMenu');
    }
}

function createMenuContent(hostElement) {
    hostElement.innerHTML = `
        <div class="container px-4 px-lg-5">
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon">
                </span>
            </button>

            <div
                class="collapse navbar-collapse" 
                id="navbarSupportedContent"
            >
                <ul 
                    class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4"
                    id="navigationMenuItems"
                >
                </ul>

                <a href="/cart.html">
                    <button class="btn btn-outline-dark" 
                    href="/cart.html"
                    id="cartButton">
                        <i class="bi-cart-fill me-1"></i>
                            Cart
                        <span class="badge bg-dark text-white ms-1 rounded-pill" id="badge"><span>0</span></span>
                    </button>
                </a>
            </div>
        </div>
    `;

    createMenuItems();
}

function createMenuItems() {
    const navigationMenuItems = document.getElementById('navigationMenuItems');

    menuItems.forEach((menuItem) => {
        const liElement = document.createElement('li');
        const isActive = window.location.pathname === menuItem.url;

        liElement.classList.add('nav-item');
        liElement.innerHTML = `
            <a 
                class="nav-link ${isActive ? 'active' : ''}"
                href="${menuItem.url}"
            >
                ${menuItem.name}
            </a>
        `;

        navigationMenuItems.appendChild(liElement);
    });
}

initializeMenu();
