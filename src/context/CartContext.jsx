import { createContext, useState } from "react";

// 1. Creamos el contexto
export const CartContext = createContext();

// 2. Creamos el Provider que envolverá la app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Verificar si existe un producto por ID
  const isInCart = (id) => cart.some((p) => p.id === id);

  // Agregar al carrito (calculando todo dentro del updater funcional 'prev')
  const addItem = (item, quantity) => {
    setCart((prev) => {
      const exists = prev.some((p) => p.id === item.id);

      if (exists) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p
        );
      } else {
        return [...prev, { ...item, quantity }];
      }
    });
  };

  // Eliminar un solo producto
  const removeItem = (itemId) => {
    setCart((prev) => prev.filter((p) => p.id !== itemId));
  };

  // Vaciar todo el carrito
  const clear = () => setCart([]);

  // Calcular la cantidad total de "bolsitas" para el ícono
  const totalQuantity = cart.reduce((acc, p) => acc + p.quantity, 0);

  // Calcular el precio total de la compra
  const totalPrice = cart.reduce((acc, p) => acc + (p.price * p.quantity), 0);

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addItem, 
        removeItem, 
        clear, 
        isInCart, 
        totalQuantity, 
        totalPrice 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};