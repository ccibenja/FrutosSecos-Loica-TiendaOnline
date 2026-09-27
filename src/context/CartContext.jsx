import { createContext, useState } from "react";

// 1. Creamos el contexto
export const CartContext = createContext();

// 2. Creamos el Provider que envolverá la app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar al carrito (evitando duplicados y sumando cantidades)
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart((prev) =>
        prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p
        )
      );
    } else {
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };

  // Eliminar un solo producto
  const removeItem = (itemId) => {
    setCart((prev) => prev.filter((p) => p.id !== itemId));
  };

  // Vaciar todo el carrito
  const clear = () => setCart([]);

  // Verificar si existe
  const isInCart = (id) => cart.some((p) => p.id === id);

  // Calcular la cantidad total de "bolsitas" para el ícono
  const totalQuantity = cart.reduce((acc, p) => acc + p.quantity, 0);

  // Calcular el precio total de la compra
  const totalPrice = cart.reduce((acc, p) => acc + (p.price * p.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};