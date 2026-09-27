import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-widget" style={{ textDecoration: "none", color: "black", fontSize: "1.2rem", fontWeight: "bold" }}>
      🛒 
      
      {totalQuantity > 0 && <span style={{ marginLeft: "5px" }}>{totalQuantity}</span>}
    </Link>
  );
}

export default CartWidget;