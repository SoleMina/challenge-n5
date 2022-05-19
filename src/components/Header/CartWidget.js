import React from "react";

//Font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Importar estilos
import "./CartWidget.scss";

const CartWidget = (props) => {
  return (
    <div>
      <FontAwesomeIcon icon={props.icon} data-count="0" />
      <span className="cart-counter">0</span>
    </div>
  );
};

export default CartWidget;
