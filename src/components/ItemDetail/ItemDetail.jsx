import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.css";

function ItemDetail({ producto }) {
  const [cantidadAgregada, setCantidadAgregada] = useState(0);
  
  // Traemos la función addItem desde nuestro contexto
  const { addItem } = useContext(CartContext);

  const handleAgregar = (cantidad) => {
    setCantidadAgregada(cantidad);
    addItem(producto, cantidad); // Enviamos el producto completo y el número al contexto
  };

  return (
    <div className={styles['detalle-producto']}>
      <img src={producto.img} alt={producto.name} />
      
      <div className={styles['info-producto']}>
        <h2>{producto.name}</h2>
        <p className={styles.categoria}>Categoría: {producto.category}</p>
        <p className={styles.descripcion}>{producto.description}</p>
        <h3 className={styles.precio}>Precio: ${producto.price}</h3>
        <p className={styles.stock}>Stock disponible: {producto.stock}</p>
        
        {cantidadAgregada > 0 ? (
          <Link to="/cart" className={styles['btn-terminar']}>Terminar mi compra</Link>
        ) : (
          <ItemCount stock={producto.stock} onAdd={handleAgregar} />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;