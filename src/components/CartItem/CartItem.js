import React from "react";

//Import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Import icon
import { faTrash } from "@fortawesome/free-solid-svg-icons";

//Import context
import { useItemsContext } from "../../CartContext";

//Import estilos
import "./CartItem.scss";

const CartItem = ({ item }) => {
  const { removeItem } = useItemsContext();

  return (
    <>
      <div className="cart-item text-center">
        <div className="row">
          <div className="col-md-2 justify-content-center">
            <img src={item.image} alt="Producto" width="80" />
          </div>
          <div className="col-md-2">
            <h5>{item.name}</h5>
          </div>
          <div className="col-md-2">
            <p>{item.amount}</p>
          </div>
          <div className="col-md-2">
            <p> S/. {item.price}</p>
          </div>
          <div className="col-md-2">
            <p> S/. {item.price * item.amount}</p>
          </div>
          <div className="col-md-2">
            <FontAwesomeIcon
              icon={faTrash}
              className="icon-awesome"
              onClick={() => removeItem(item.id)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default CartItem;
