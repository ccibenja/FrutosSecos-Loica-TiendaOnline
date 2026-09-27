import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";

function Checkout() {
  const { cart, totalPrice, clear } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const [orderId, setOrderId] = useState("");
  const [buyer, setBuyer] = useState({
    nombre: "",
    telefono: "",
    direccion: ""
  });

  if (!user) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>Debes iniciar sesión para finalizar la compra</h2>
        <Link to="/login">Ir a Login</Link>
      </div>
    );
  }

  if (cart.length === 0 && !orderId) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver a la tienda</Link>
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
      .catch((err) => console.error(err));
  };

  if (orderId) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>¡Compra exitosa!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input 
          type="text" 
          name="nombre" 
          placeholder="Nombre completo" 
          onChange={handleInputChange} 
          required 
        />
        <input 
          type="text" 
          name="telefono" 
          placeholder="Teléfono" 
          onChange={handleInputChange} 
          required 
        />
        <input 
          type="text" 
          name="direccion" 
          placeholder="Dirección" 
          onChange={handleInputChange} 
          required 
        />
        <button type="submit" style={{ background: "lightgreen", padding: "10px", cursor: "pointer" }}>
          Confirmar Compra
        </button>
      </form>
    </div>
  );
}

export default Checkout;