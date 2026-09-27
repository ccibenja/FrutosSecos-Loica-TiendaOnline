import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail({ producto }) {
  const [cantidadAgregada, setCantidadAgregada] = useState(0);
  
  // Traemos la función addItem desde nuestro contexto
  const { addItem } = useContext(CartContext);

  const handleAgregar = (cantidad) => {
    setCantidadAgregada(cantidad);
    addItem(producto, cantidad); // Enviamos el producto completo y el número al contexto
  };

  return (
    <div className="detalle-producto">
      <img src={producto.img} alt={producto.name} />
      
      <div className="info-producto">
        <h2>{producto.name}</h2>
        <p className="categoria">Categoría: {producto.category}</p>
        <p className="descripcion">{producto.description}</p>
        <h3 className="precio">Precio: ${producto.price}</h3>
        <p className="stock">Stock disponible: {producto.stock}</p>
        
        
        {cantidadAgregada > 0 ? (
          <Link to="/cart" className="btn-terminar">Terminar mi compra</Link>
        ) : (
          <ItemCount stock={producto.stock} onAdd={handleAgregar} />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;