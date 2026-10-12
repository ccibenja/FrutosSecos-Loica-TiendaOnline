import { useContext } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { AuthContext } from "../../context/AuthContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <h1>Frutos Secos Loica</h1>
      </Link>
      
      <ul className={styles.navLinks}>
        <li><Link to="/category/frutos-secos">Frutos Secos</Link></li>
        <li><Link to="/category/semillas">Semillas</Link></li>
        <li><Link to="/category/mixes">Mixes</Link></li>
      </ul>

      <div className={styles.userSection}>
        {user ? (
          <div className={styles.userSection}>
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