import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { AuthContext } from "../../context/AuthContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.brand}>
        <img src="/loica.jpg" alt="Logo Loica" className={styles.logo} />
        <span className={styles.brandText}>Frutos Secos Loica</span>
      </Link>
      
      <ul className={styles.navLinks}>
        <li>
          <NavLink 
            to="/category/frutos-secos" 
            className={({ isActive }) => isActive ? styles.active : ""}
          >
            Frutos Secos
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/category/semillas" 
            className={({ isActive }) => isActive ? styles.active : ""}
          >
            Semillas
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/category/mixes" 
            className={({ isActive }) => isActive ? styles.active : ""}
          >
            Mixes
          </NavLink>
        </li>
      </ul>

      <div className={styles.userSection}>
        {user ? (
          <div className={styles.userInfo}>
            <span className={styles.userEmail}>{user.email}</span>
            <button onClick={logout} className={styles.authBtn}>Salir</button>
          </div>
        ) : (
          <Link to="/login" className={styles.authBtn}>Ingresar</Link>
        )}
        
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;