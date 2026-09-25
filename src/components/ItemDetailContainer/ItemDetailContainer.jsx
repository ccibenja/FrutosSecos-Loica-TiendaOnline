import { useState, useEffect } from "react";
import { getProductById } from "../../mock/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true); // Arranca cargando
  const [error, setError] = useState(false); // Arranca sin errores

  useEffect(() => {
    // Si llegara a cambiar el id en el futuro, reseteamos los estados al pedir datos nuevos
    setLoading(true);
    setError(false);
    
    getProductById(1)
      .then((respuesta) => {
        setProducto(respuesta);
      })
      .catch((error) => {
        console.error(error);
        setError(true); // Si la promesa falla, activamos el error
      })
      .finally(() => {
        setLoading(false); // Apagamos el "cargando" al final de todo
      });
  }, []);

  // Interfaz de Carga (UI)
  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h3>⏳ Cargando detalle del producto...</h3>
      </div>
    );
  }

  // Interfaz de Error (UI)
  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "40px", color: "brown" }}>
        <h3>❌ Uy, hubo un problema al cargar el producto.</h3>
        <p>Por favor, recarga la página o intenta nuevamente más tarde.</p>
      </div>
    );
  }

  // Si no está cargando y no hay error, mostramos el producto
  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
}

export default ItemDetailContainer;