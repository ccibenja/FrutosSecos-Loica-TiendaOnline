# 🥑 Frutos Secos Loica - E-Commerce en React + Firebase

Proyecto desarrollado para el curso de React JS en Coderhouse. La aplicación es una tienda en línea funcional dedicada a la venta de frutos secos, semillas y mixes, integrada con **Cloud Firestore** para la gestión de productos y órdenes, y **Firebase Authentication** para la gestión de usuarios.

---

## 🚀 Funcionalidades Principales

- **Catálogo Dinámico:** Carga de productos en tiempo real desde Cloud Firestore.
- **Navegación por Categorías:** Filtrado por Frutos Secos, Semillas y Mixes mediante `react-router-dom`.
- **Detalle de Producto:** Vista individual con control de stock y agregado al carrito.
- **Carrito de Compras:** Gestión de items, cálculo de totales y eliminación de productos mediante `CartContext`.
- **Autenticación de Usuarios:** Registro e inicio de sesión con correo y contraseña gestionados por Firebase Auth.
- **Checkout:** Vista de finalización de compra adaptada al estado de sesión del usuario.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React JS (Vite)
- **Rutado:** React Router DOM v6
- **Estado Global:** React Context API (`CartContext` y `AuthContext`)
- **Backend & Database:** Firebase (Cloud Firestore & Firebase Authentication)
- **Estilos:** CSS3 nativo

---

## 📂 Estructura del Proyecto

```text
src/
├── components/
│   ├── Cart/
│   ├── CartWidget/
│   ├── Checkout/
│   ├── Item/
│   ├── ItemDetail/
│   ├── ItemDetailContainer/
│   ├── ItemList/
│   ├── ItemListContainer/
│   ├── Login/
│   ├── Navbar/
│   └── Register/
├── context/
│   ├── AuthContext.jsx
│   └── CartContext.jsx
├── firebase/
│   └── config.js
├── App.jsx
└── main.jsx