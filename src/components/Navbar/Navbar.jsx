import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="mi-navbar">
      <div>
        {/* Link envuelve el título para volver al inicio */}
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h2>Frutos Secos Loica</h2>
        </Link>
      </div>
      
      <ul className="menu-navegacion">
        <li><NavLink to="/category/frutos-secos">Frutos Secos</NavLink></li>
        <li><NavLink to="/category/semillas">Semillas</NavLink></li>
        <li><NavLink to="/category/mixes">Mixes</NavLink></li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default Navbar;