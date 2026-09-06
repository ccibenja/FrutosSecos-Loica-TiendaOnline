// src/components/Navbar.jsx
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <nav className="mi-navbar">
      <div>
        <h2>Frutos Secos Loica</h2>
      </div>
      
      {/* Lista de categorías reales de productos */}
      <ul className="menu-navegacion">
        <li><a href="#">Almendras</a></li>
        <li><a href="#">Nueces</a></li>
        <li><a href="#">Mixes</a></li>
      </ul>

      {/* Aca llamo al componente del carrito */}
      <CartWidget />
    </nav>
  );
}

export default Navbar;