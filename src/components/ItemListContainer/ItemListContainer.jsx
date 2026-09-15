import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
  return (
    <div className="contenedor-saludo">
      {/* Reemplazamos el style={{}} por una className */}
      <h1 className="titulo-saludo">{greeting}</h1>
    </div>
  );
}

export default ItemListContainer;