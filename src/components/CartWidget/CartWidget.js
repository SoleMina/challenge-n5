import React from "react";
//Import context
import { useItemsContext } from "../../CartContext";
//Font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Importar estilos
import styles from "./CartWidget.module.scss";

const CartWidget = (props) => {
  const { cartItems, totalProducts } = useItemsContext();
  return (
    <div>
      <FontAwesomeIcon icon={props.icon} data-count="0" />
      <span className={styles.cart__counter}>
        {cartItems.length > 0 ? totalProducts : 0}
      </span>
    </div>
  );
};

export default CartWidget;
