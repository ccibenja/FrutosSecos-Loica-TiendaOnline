// src/components/ItemListContainer/ItemListContainer.jsx
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../mock/asyncMock';
import './ItemListContainer.css';

function ItemListContainer({ greeting }) {
  // Estado para guardar los productos
  const [items, setItems] = useState([]);

  // useEffect con array vacío para que pida los datos solo al montar
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts(); // Esperamos 2 segundos
      setItems(data); // Guardamos los datos en el estado
    };

    fetchData();
  }, []);

  return (
    <div className="contenedor-saludo">
      <h1 className="titulo-saludo">{greeting}</h1>
      
      {/* Si items está vacío muestro "Cargando", si no, muestro la lista */}
      {items.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Cargando productos...</p>
      ) : (
        <ItemList products={items} />
      )}
    </div>
  );
}

export default ItemListContainer;