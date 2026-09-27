import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, clear, removeItem, totalPrice } = useContext(CartContext);

  // Renderizado condicional: si no hay productos
  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Tu carrito está vacío 😔</h2>
        <p>¡Agrega algunos frutos secos deliciosos!</p>
        <Link to="/" style={{ padding: "10px", background: "bisque", textDecoration: "none", color: "black", borderRadius: "5px" }}>
          Volver a la tienda
        </Link>
      </div>
    );
  }

  // Si hay productos
  return (
    <div style={{ maxWidth: "800px", margin: "20px auto", padding: "20px" }}>
      <h2>Tu Carrito</h2>
      
      {cart.map((producto) => (
        <div key={producto.id} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #ccc", padding: "10px 0" }}>
          <div>
            <h3>{producto.name}</h3>
            <p>Cantidad: {producto.quantity}</p>
            <p>Precio unitario: ${producto.price}</p>
            <p>Subtotal: ${producto.price * producto.quantity}</p>
          </div>
          <button onClick={() => removeItem(producto.id)} style={{ alignSelf: "center", cursor: "pointer" }}>
            ❌ Eliminar
          </button>
        </div>
      ))}

      <h3 style={{ marginTop: "20px", textAlign: "right" }}>Total a pagar: ${totalPrice}</h3>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "30px" }}>
        <button onClick={clear} style={{ padding: "10px", cursor: "pointer", background: "lightcoral", border: "none" }}>
          Vaciar carrito
        </button>
        <button style={{ padding: "10px", cursor: "pointer", background: "lightgreen", border: "none", fontWeight: "bold" }}>
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}

export default Cart;