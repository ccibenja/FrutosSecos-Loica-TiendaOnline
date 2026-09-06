// src/App.jsx
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css"; // Aca importo mi hoja de estilos

function App() {
  return (
    <div>
      <Navbar />
      {/* Le paso el mensaje al hijo usando la prop greeting */}
      <ItemListContainer greeting="¡Hola! Bienvenidos a mi tienda de Frutos Secos" />
    </div>
  );
}

export default App;