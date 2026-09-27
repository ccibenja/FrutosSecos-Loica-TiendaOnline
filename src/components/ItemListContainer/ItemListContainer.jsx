import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { db } from '../../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import './ItemListContainer.css';

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
    <div className="contenedor-saludo">
      <h1 className="titulo-saludo">{idCategoria ? `Categoría: ${idCategoria}` : greeting}</h1>
      {loading ? <p style={{ textAlign: 'center' }}>⏳ Cargando catálogo...</p> : <ItemList products={items} />}
    </div>
  );
}

export default ItemListContainer;