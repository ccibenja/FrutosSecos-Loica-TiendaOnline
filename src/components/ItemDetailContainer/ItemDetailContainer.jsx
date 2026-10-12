import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import styles from "./ItemDetailContainer.module.css";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Capturamos el id de la URL (en Firestore los IDs son strings)
  const { idProducto } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    // Referencia al documento dentro de la colección 'items'
    const docRef = doc(db, "items", idProducto);

    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data() });
        } else {
          setError("El producto solicitado no existe.");
        }
      })
      .catch((err) => {
        console.error("Error al obtener el producto:", err);
        setError("Ocurrió un error al cargar el detalle del producto.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idProducto]);

  if (loading) return <h3 className={styles.mensajeEstado}>⏳ Cargando detalle del producto...</h3>;
  if (error) return <h3 className={styles.mensajeError}>❌ {error}</h3>;

  return (
    <div className={styles['contenedor-detalle']}>
      {producto && <ItemDetail producto={producto} />}
    </div>
  );
}

export default ItemDetailContainer;