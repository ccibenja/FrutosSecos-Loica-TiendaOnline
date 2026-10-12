// src/components/ItemList/ItemList.jsx
import Item from '../Item/Item';
import styles from './ItemList.module.css';

// Recibo la lista de productos y hago el map
function ItemList({ products }) {
  return (
    <div className={styles['contenedor-lista']}>
      {products.map((p) => (
        <Item key={p.id} product={p} /> 
      ))}
    </div>
  );
}

export default ItemList;