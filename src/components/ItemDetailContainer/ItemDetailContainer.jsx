import { useState, useEffect } from "react";
import { getProductById } from "../../mock/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    // Por ahora le pasamos el id "1" a mano como pide la consigna. 
    // Más adelante este id vendrá de la URL.
    getProductById(1)
      .then((respuesta) => {
        setProducto(respuesta);
      })
      .catch((error) => {
        console.log("Error al obtener el producto:", error);
      });
  }, []);

  return (
    <div>
      {/* Si el producto es null, muestro cargando. Si ya llegó, muestro el componente */}
      {producto ? <ItemDetail producto={producto} /> : <p style={{textAlign: "center"}}>Cargando detalle...</p>}
    </div>
  );
}

export default ItemDetailContainer;