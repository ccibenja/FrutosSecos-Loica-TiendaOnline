import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail({ producto }) {
  return (
    <div className="detalle-producto">
      <img src={producto.img} alt={producto.name} />
      
      <div className="info-producto">
        <h2>{producto.name}</h2>
        <p className="categoria">Categoría: {producto.category}</p>
        <p className="descripcion">{producto.description}</p>
        <h3 className="precio">Precio: ${producto.price}</h3>
        <p className="stock">Stock disponible: {producto.stock} unidades</p>
        
        {/* Aquí reutilizamos el contador pasándole el stock del producto */}
        <ItemCount stock={producto.stock} />
      </div>
    </div>
  );
}

export default ItemDetail;