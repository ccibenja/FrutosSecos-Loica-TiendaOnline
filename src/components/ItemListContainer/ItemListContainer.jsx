import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Importamos useParams
import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../mock/asyncMock'; // Importamos ambas funciones
import './ItemListContainer.css';

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Capturamos la categoría desde la URL (debe llamarse igual que en App.jsx)
  const { idCategoria } = useParams(); 

  useEffect(() => {
    setLoading(true);

    // Si hay idCategoria usamos la función de filtro, si no, traemos todos
    const funcionProductos = idCategoria ? getProductsByCategory(idCategoria) : getProducts();

    funcionProductos
      .then((data) => {
        setItems(data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
      
  }, [idCategoria]); // IMPORTANTE: idCategoria en el array de dependencias

  return (
    <div className="contenedor-saludo">
      <h1 className="titulo-saludo">{idCategoria ? `Categoría: ${idCategoria}` : greeting}</h1>
      
      {loading ? (
        <p style={{ textAlign: 'center' }}>⏳ Cargando catálogo...</p>
      ) : (
        <ItemList products={items} />
      )}
    </div>
  );
}

export default ItemListContainer;