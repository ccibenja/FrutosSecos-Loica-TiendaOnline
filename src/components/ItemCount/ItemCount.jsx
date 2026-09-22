import { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock }) {
  const [contador, setContador] = useState(1); // Arranca en 1

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) { // No permitimos bajar de 1
      setContador(contador - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="controles">
        <button onClick={restar}>-</button>
        <span>{contador}</span>
        <button onClick={sumar}>+</button>
      </div>
      <button className="btn-agregar">Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;