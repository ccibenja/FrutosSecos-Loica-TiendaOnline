# Frutos Secos Loica - E-commerce

Este es el proyecto inicial de mi tienda online para el curso de React en Coderhouse.

## Descripción del Proyecto
Frutos Secos Loica es una plataforma de e-commerce dedicada a la venta de frutos secos, semillas y mixes premium. El objetivo es ofrecer una experiencia de usuario fluida e intuitiva para la compra de productos naturales.

## Tecnologías Utilizadas
* React 19
* Vite
* JavaScript

## Instrucciones para ejecutar el proyecto localmente

1. Clonar el repositorio en tu máquina local.
2. Abrir la terminal en la carpeta del proyecto.
3. Ejecutar el comando `npm install` para instalar las dependencias. 
   *(Nota: Al utilizar React 19, si experimentas errores de "peer dependencies" con ESLint u otras librerías, ejecuta `npm install --legacy-peer-deps`).*
4. Ejecutar el comando `npm run dev` para iniciar el servidor de desarrollo.
5. Abrir el enlace local en el navegador.
## Componentes de la aplicación

* **Navbar**: Barra de navegación superior que contiene el nombre/logo de la tienda y los enlaces a las distintas categorías de productos reales.
* **CartWidget**: Componente visual ubicado dentro de la Navbar que muestra un ícono de carrito de compras y un contador con la cantidad de productos seleccionados.
* **ItemListContainer**: Contenedor principal de la página que recibe información dinámicamente a través de *props* (como el mensaje de bienvenida) y la renderiza en pantalla.

## Simulación de carga de datos
Para este checkpoint, se creó un archivo `asyncMock.js` que contiene un array de productos. Usando una Promesa (`Promise`) y `setTimeout`, se simula un retraso de 2 segundos (2000ms) al solicitar los datos, imitando el comportamiento asíncrono de una API real. Los datos son solicitados y guardados en el estado del componente `ItemListContainer`.