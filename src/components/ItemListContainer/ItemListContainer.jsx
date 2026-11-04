import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner'; // <-- 1. Importamos el Spinner
import { db } from '../../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import styles from './ItemListContainer.module.css';

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

  useEffect(() => {
    setLoading(true);
    
    const itemsRef = collection(db, "items");
    const q = idCategoria ? query(itemsRef, where("category", "==", idCategoria)) : itemsRef;

    getDocs(q)
      .then((resp) => {
        setItems(
          resp.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
      
  }, [idCategoria]);

  return (
    <div className={styles['contenedor-saludo']}>
      <h1 className={styles['titulo-saludo']}>
        {idCategoria ? `Categoría: ${idCategoria}` : greeting}
      </h1>
      {loading ? (
        <Spinner /> /* <-- 2. Reemplazamos el texto por el componente animado */
      ) : (
        <ItemList products={items} />
      )}
    </div>
  );
}

export default ItemListContainer;