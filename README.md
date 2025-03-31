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