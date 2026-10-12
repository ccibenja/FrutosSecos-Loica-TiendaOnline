import { Link } from 'react-router-dom';
import styles from './Item.module.css';

function Item({ product }) {
  return (
    <div className={styles['card-producto']}>
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      
      <Link to={`/item/${product.id}`} className={styles['btn-detalle']}>
        Ver Detalle
      </Link>
    </div>
  );
}

export default Item;