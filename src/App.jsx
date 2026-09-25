import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<ItemListContainer greeting="¡Hola! Bienvenidos a Frutos Secos Loica" />} />


        <Route path="/category/:idCategoria" element={<ItemListContainer greeting="Filtrando categoría..." />} />


        <Route path="/item/:idProducto" element={<ItemDetailContainer />} />


        <Route path="*" element={<h2 style={{ textAlign: "center", marginTop: "50px" }}>❌ Error 404: Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;