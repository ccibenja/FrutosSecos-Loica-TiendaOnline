import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart"; // Lo crearemos en el Paso 4
import { CartProvider } from "./context/CartContext";
import "./App.css"; 

function App() {
  return (
    // Envolvemos TODO con el proveedor del carrito
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Hola! Bienvenidos a Frutos Secos Loica" />} />
          <Route path="/category/:idCategoria" element={<ItemListContainer greeting="Filtrando categoría..." />} />
          <Route path="/item/:idProducto" element={<ItemDetailContainer />} />
          
         
          <Route path="/cart" element={<Cart />} />
          
          <Route path="*" element={<h2 style={{textAlign: "center"}}>❌ Error 404</h2>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;