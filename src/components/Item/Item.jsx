import { Link } from "react-router-dom";
import styles from "./Item.module.css";

function Item({ producto }) {
  return (
    <div className={styles.card}>
      <div className={styles.imagenContainer}>
        <img src={producto.img} alt={producto.name} className={styles.imagen} />
        {producto.stock > 0 && <span className={styles.badgeStock}>En Stock</span>}
      </div>

      <div className={styles.contenido}>
        <h3 className={styles.nombre}>{producto.name}</h3>
        <p className={styles.precio}>Precio: ${producto.price.toLocaleString("es-CL")}</p>
        
        <Link to={`/item/${producto.id}`} className={styles.botonDetalle}>
          Ver Detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;