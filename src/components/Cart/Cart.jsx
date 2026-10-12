import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

function Cart() {
  const { cart, clear, removeItem, totalPrice } = useContext(CartContext);

  // Renderizado condicional: si no hay productos
  if (cart.length === 0) {
    return (
      <div className={styles.cartVacio}>
        <h2>Tu carrito está vacío 😔</h2>
        <p>¡Agrega algunos frutos secos deliciosos!</p>
        <Link to="/" className={styles.btnTienda}>
          Volver a la tienda
        </Link>
      </div>
    );
  }

  // Si hay productos
  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.titulo}>Tu Carrito</h2>
      
      <div className={styles.listaProductos}>
        {cart.map((producto) => (
          <div key={producto.id} className={styles.itemCarrito}>
            <div className={styles.infoItem}>
              <h3>{producto.name}</h3>
              <p>Cantidad: {producto.quantity}</p>
              <p>Precio unitario: ${producto.price}</p>
              <p>Subtotal: ${producto.price * producto.quantity}</p>
            </div>
            <button onClick={() => removeItem(producto.id)} className={styles.btnEliminar}>
              ❌ Eliminar
            </button>
          </div>
        ))}
      </div>

      <h3 className={styles.total}>Total a pagar: ${totalPrice}</h3>

      <div className={styles.acciones}>
        <button onClick={clear} className={styles.btnVaciar}>
          Vaciar carrito
        </button>
        <Link to="/checkout" className={styles.btnFinalizar}>
          Finalizar Compra
        </Link>
      </div>
    </div>
  );
}

export default Cart;