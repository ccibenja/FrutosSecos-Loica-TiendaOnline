import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Importamos useParams
import { getProductById } from "../../mock/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Capturamos el id de la URL
  const { idProducto } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(false);
    
    // Convertimos idProducto a Número porque las URL siempre devuelven texto (String)
    getProductById(Number(idProducto))
      .then((respuesta) => {
        setProducto(respuesta);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idProducto]); // idProducto en el array de dependencias

  if (loading) return <h3 style={{ textAlign: "center", marginTop: "40px" }}>⏳ Buscando producto...</h3>;
  if (error) return <h3 style={{ textAlign: "center", marginTop: "40px", color: "brown" }}>❌ Producto no encontrado</h3>;

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
}

export default ItemDetailContainer;