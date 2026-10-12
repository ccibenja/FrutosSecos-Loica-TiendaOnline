import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import styles from "./Checkout.module.css";

function Checkout() {
  const { cart, totalPrice, clear } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const [buyer, setBuyer] = useState({
    nombre: "",
    telefono: "",
    direccion: ""
  });

  if (!user) {
    return (
      <div className={styles.checkoutContainer}>
        <h2 className={styles.titulo}>Debes iniciar sesión para finalizar la compra</h2>
        <div style={{ textAlign: "center" }}>
          <Link to="/login" className={styles.botonAccion}>Ir a Login</Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0 && !orderId) {
    return (
      <div className={styles.checkoutContainer}>
        <h2 className={styles.titulo}>Tu carrito está vacío</h2>
        <div style={{ textAlign: "center" }}>
          <Link to="/" className={styles.botonAccion}>Volver a la tienda</Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    const order = {
      buyer,
      userEmail: user.email,
      items: cart,
      total: totalPrice,
      date: serverTimestamp()
    };

    const ordersRef = collection(db, "orders");
    
    addDoc(ordersRef, order)
      .then((res) => {
        setOrderId(res.id);
        clear();
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  if (orderId) {
    return (
      <div className={styles.checkoutContainer}>
        <div className={styles.ordenExito}>
          <h2>🎉 ¡Compra exitosa!</h2>
          <p>Tu número de orden es:</p>
          <span className={styles.codigoOrden}>{orderId}</span>
          <br />
          <Link to="/" className={styles.botonAccion}>Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.checkoutContainer}>
      <h2 className={styles.titulo}>Checkout</h2>
      
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <input 
          type="text" 
          name="nombre" 
          placeholder="Nombre completo" 
          value={buyer.nombre}
          onChange={handleInputChange} 
          className={styles.inputField}
          required 
        />
        <input 
          type="text" 
          name="telefono" 
          placeholder="Teléfono" 
          value={buyer.telefono}
          onChange={handleInputChange} 
          className={styles.inputField}
          required 
        />
        <input 
          type="text" 
          name="direccion" 
          placeholder="Dirección" 
          value={buyer.direccion}
          onChange={handleInputChange} 
          className={styles.inputField}
          required 
        />

        <div className={styles.resumen}>
          <p>Total a pagar: <strong>${totalPrice}</strong></p>
        </div>

        <button type="submit" className={styles.botonSubmit} disabled={loading}>
          {loading ? "Procesando compra..." : "Confirmar Compra"}
        </button>
      </form>
    </div>
  );
}

export default Checkout;