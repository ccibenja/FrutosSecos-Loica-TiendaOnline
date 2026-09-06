// src/components/ItemListContainer.jsx

function ItemListContainer({ greeting }) {
  // Recibo el saludo por props y lo muestro en un h1
  return (
    <div className="contenedor-saludo">
      <h1 style={{ textAlign: "center" }}>{greeting}</h1>
    </div>
  );
}

export default ItemListContainer;