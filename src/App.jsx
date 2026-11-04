import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import OrderHistory from "./components/OrderHistory/OrderHistory"; // <-- 1. Importamos el historial
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import "./App.css"; 

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="¡Hola! Bienvenidos a Frutos Secos Loica" />} />
            <Route path="/category/:idCategoria" element={<ItemListContainer greeting="Filtrando categoría..." />} />
            <Route path="/item/:idProducto" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/mis-ordenes" element={<OrderHistory />} /> {/* <-- 2. Agregamos la ruta */}
            <Route path="*" element={<h2 style={{textAlign: "center"}}>❌ Error 404</h2>} />
          </Routes>
          
          {/* <-- 3. Contenedor global de Toasts */}
          <ToastContainer 
            position="bottom-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;