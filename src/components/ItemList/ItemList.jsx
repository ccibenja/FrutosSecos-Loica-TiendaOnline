// src/components/ItemList/ItemList.jsx
import Item from '../Item/Item';
import styles from './ItemList.module.css';

function ItemList({ products }) {
  return (
    <div className={styles['contenedor-lista']}>
      {products.map((p) => (
        <Item key={p.id} producto={p} /> 
      ))}
    </div>
  );
}

export default ItemList;