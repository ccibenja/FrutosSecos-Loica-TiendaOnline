import './Item.css';

function Item({ product }) {
  return (
    <div className="card-producto">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <p className="descripcion">{product.description}</p>
    </div>
  );
}

// ¡Esta es la línea clave que estaba faltando o fallando!
export default Item;