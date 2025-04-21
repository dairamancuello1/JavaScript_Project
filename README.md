# Javascript_Project

## Simulador de e-commerce

Este proyecto es un simulador básico de un e-commerce que permite a los usuarios seleccionar categorías de productos, elegir productos dentro de esas categorías y agregar cantidades específicas al carrito de compras. Todo esto se gestiona a través de prompts en el navegador.

### Instrucciones

#### Pasos para ejecutar el proyecto
**1. Clonar el repositorio**  

Abre tu terminal y ejecuta:  
`git clone https://github.com/dairamancuello1/JavaScript_Project.git`  
Luego, navega al directorio del proyecto:  
`cd JavaScript_Project`

**2. Abrir el archivo `index.html` en el navegador**  

Dado que este proyecto es estático y no requiere un servidor backend, se puede abrir directamente el archivo `index.html` en tu navegador web o desde el editor de código usando Live Server.

**3. Interacción con la aplicación**  

Una vez que la página esté abierta en el navegador, la aplicación te guiará a través de una serie de prompts para:
	- Seleccionar una categoría de productos.
	- Elegir un producto dentro de la categoría seleccionada.
	- Especificar la cantidad deseada del producto.

### Segunda entrega

- Se incluyen los documentos HTML necesarios para el funcionamiento de la página, interacción con el DOM y uso del localStorage.
- Los estilos y maquetado fueron extraídos de un template de Boostrap y modificados a necesidad.
- Parte del HTML se generará de manera dinámica desde los archivos .js correspondientes.
- Se trabajarán sobre tres constantes y cada una de ellas contiene lo siguiente:
	- Products: id, name, price, stock, categoryId --> Cada producto formará parte de una categoría;
	- Categories: id, name --> En referencia a las categorías que puede tener un producto;
	- Cart: productId, quantity --> Contendrá el id del producto y la cantidad del mismo.
- El usuario será dirigido primeramente al index.html, que contiene la landing page de la página.
- En la landing page, se muestran las categorías de productos junto a un botón que mostrará sólo los productos bajo esa categoría.
- El botón "Shop All" en la barra de navegación muestra todos los productos de todas las categorías.
- En ambos casos, el botón "Ver", redirigirá a una página específica de producto (item.html).
- Los botones "Agregar" y "Agregar al carrito" agregarán al carrito una unidad del producto. Pueden agregarse más de una unidad si se clickea más de una vez el botón de agregar al carrito desde cualquiera de sus páginas.
- Los ítems del carrito se guardarán en localStorage.
- La cantidad total de ítems en el carrito se muestra en el ícono de "Cart" en la barra de navegación y se actualizará a medida que se sumen o quiten productos del carrito.
- Clickeando en el botón de "Cart", el usuario será redirigido a la página de carrito, cart.html.
- En cart.html se mostrarán todos los ítems agregados de la siguiente manera: imagen, nombre, cantidad, precio unitario.
- Se podrá eliminar la totalidad de un item clickeando el ícono de basurero correspondiente.
- En cart.html se mostrará el total de la compra de manera dinámica. Si se eliminan o suman productos, ésta se actualizará.


### Primer entrega
- Se incluye un documento básico de HTML, sin estilos ni maquetado;
- Se trabajarán sobre tres constantes y cada una de ellas contiene lo siguiente:
	- Products: id, name, price, stock, categoryId --> Cada producto formará parte de una categoría;
	- Categories: id, name --> En referencia a las categorías que puede tener un producto;
	- Cart --> Array que contendrá los precios de los productos por la cantidad elegida
- El usuario puede elegir una categoría desde un prompt, lo que mostrará los productos bajo esa categoría. Si el ID de categoría no es válido, se muestra una alerta y se vuelve a mostrar el prompt de categorías;
- El usuario puede elegir un producto de los disponibles para su categoría mediante un prompt. Si el ID de producto no es válido, se muestra una alerta y se vuelve a mostrar el prompt de productos;
- El usuario ingresa la cantidad de productos mediante un prompt. Debe ser un valor válido (distinto de 0, no caracter alfabético ni especial, e igual o menor al stock disponible);
- A medida que el usuario agregue productos al carrito, se disminuirá el stock disponible;
- Después de agregar un producto, un prompt de confimación permite agregar otros productos. 
- Si el usuario acepta, se lo redirige al prompt de categorías;
- Si el usuario no acepta, se muestra en una alerta el total del carrito y finaliza el flujo.
