import { useContext } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>Frutos Secos Loica</h1>
      </Link>
      
      <ul className="nav-links">
        <li><Link to="/category/frutos-secos">Frutos Secos</Link></li>
        <li><Link to="/category/semillas">Semillas</Link></li>
        <li><Link to="/category/mixes">Mixes</Link></li>
      </ul>

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {user ? (
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <span style={{ fontSize: "14px", color: "#555" }}>{user.email}</span>
            <button onClick={logout} style={{ cursor: "pointer", padding: "5px 10px" }}>Salir</button>
          </div>
        ) : (
          <Link to="/login" style={{ textDecoration: "none", fontWeight: "bold" }}>Ingresar</Link>
        )}
        
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;