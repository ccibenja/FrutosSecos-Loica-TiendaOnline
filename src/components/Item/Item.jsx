import { Link } from 'react-router-dom';
import './Item.css';

function Item({ product }) {
  return (
    <div className="card-producto">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      
      {/* Botón que navega a la URL del producto usando su ID */}
      <Link to={`/item/${product.id}`} className="btn-detalle">
        Ver Detalle
      </Link>
    </div>
  );
}

export default Item;