import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="mi-navbar">
      <div>
        <h2>Frutos Secos Loica</h2>
      </div>
      
      <ul className="menu-navegacion">
        <li><a href="#">Almendras</a></li>
        <li><a href="#">Nueces</a></li>
        <li><a href="#">Mixes</a></li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default Navbar;