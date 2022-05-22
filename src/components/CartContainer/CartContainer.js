import React from "react";
import { useItemsContext } from "../../CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

//Import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Import icon
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
//Style
import "./CartContainer.scss";

const CartContainer = () => {
  const { cartItems, totalPrice } = useItemsContext();
  console.log(cartItems);
  return (
    <div className={`h-100 ${cartItems.length > 0 ? "bg-gray" : ""}`}>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => {
            console.log("ITEMMMM", item);
            return <CartItem key={item.id} item={item} />;
          })}
          <div className="cart-item">
            <div className="row">
              <div className="col-md-12 text-center">
                Monto Total:
                <p>S/. {totalPrice}</p>
                <Link to={`/thankyou`} className="btn btn-primary">
                  Finalize your purchase
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="hv-85 text-center">
            <h4 className="mt-5 mb-5">
              Oops you don't have products added to the cart
            </h4>
            <p>Check our products and buy all what you want</p>
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ fontSize: "300px", marginBottom: "5%" }}
            />
            <br />
            <Link to={`/`} className="btn-cart-404">
              Go back to Homepage
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
