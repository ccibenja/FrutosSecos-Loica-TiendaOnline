import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css"; 

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Hola! Bienvenidos a mi tienda de Frutos Secos" />
    </div>
  );
}

export default App;