import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "./App.css"; 

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Hola! Bienvenidos a mi tienda de Frutos Secos - Loica" />
      
      <hr style={{margin: "40px 0"}} /> {/* Una línea separadora */}
      
      {/* Agregamos el contenedor del detalle abajo */}
      <h2 style={{textAlign: "center"}}>Vista de Detalle de Producto</h2>
      <ItemDetailContainer />
    </div>
  );
}

export default App;