# 🥑 Frutos Secos Loica - E-Commerce en React + Firebase

Proyecto desarrollado para el curso de React JS en Coderhouse. La aplicación es una tienda en línea funcional dedicada a la venta de frutos secos, semillas y mixes, integrada con **Cloud Firestore** para la gestión de productos y órdenes, y **Firebase Authentication** para la gestión de usuarios.

---

## 🚀 Funcionalidades Principales

- **Catálogo Dinámico:** Carga de productos en tiempo real desde Cloud Firestore.
- **Navegación por Categorías:** Filtrado por Frutos Secos, Semillas y Mixes mediante `react-router-dom`.
- **Detalle de Producto:** Vista individual cargada desde Firestore con control de stock y agregado al carrito.
- **Carrito de Compras:** Gestión de items, cálculo de totales y eliminación de productos mediante `CartContext`.
- **Autenticación de Usuarios:** Registro e inicio de sesión con correo y contraseña gestionados por Firebase Auth (`AuthContext`).
- **Checkout:** Finalización de compra para usuarios autenticados con generación e ID de seguimiento de la orden.
- **Estilos Modulares:** Diseño 100% migrado a **CSS Modules** respetando la identidad visual de la marca.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React JS (Vite)
- **Rutado:** React Router DOM v6
- **Estado Global:** React Context API (`CartContext` y `AuthContext`)
- **Backend & Database:** Firebase (Cloud Firestore & Firebase Authentication)
- **Estilos:** CSS Modules

---

## ⚙️ Instalación y Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/ccibenja/FrutosSecos-Loica-TiendaOnline.git](https://github.com/ccibenja/FrutosSecos-Loica-TiendaOnline.git)
   cd FrutosSecos-Loica-TiendaOnline