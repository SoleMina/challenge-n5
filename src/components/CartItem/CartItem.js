import React from "react";

//Import context
import { useItemsContext } from "../../CartContext";

//Import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Import icon
import { faTrash } from "@fortawesome/free-solid-svg-icons";

//Import estilos
import "./CartItem.scss";

const CartItem = ({ item }) => {
  const { removeItem } = useItemsContext();

  return (
    <>
      <div className="cartItem">
        <div className="row">
          <div className="col-md-2 justify-content-center">
            <img src={item.image} alt="Producto" width="80" />
          </div>
          <div className="col-md-2">
            <span>Product:</span>
            <h6>{item.name}</h6>
          </div>
          <div className="col-md-2">
            <span>Amount: </span>
            <p> {item.amount}</p>
          </div>
          <div className="col-md-2">
            <span>Price:</span>
            <p> S/. {item.price}</p>
          </div>
          <div className="col-md-2">
            <span>Total:</span>
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
