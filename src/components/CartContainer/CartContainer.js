import React from "react";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

import { useItemsContext } from "../../CartContext";
//Import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Import icon
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartContainer = () => {
  const { cartItems, totalPrice, products, setProducts } = useItemsContext();
  console.log(cartItems);

  const finalPurchase = () => {
    setProducts(products);
  };
  return (
    <div className={`h-70 ${cartItems.length > 0 ? "bg-gray" : ""}`}>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
          <div className="cartItem">
            <div className="row">
              <div className="col-md-12 text-center">
                Monto Total:
                <p>$/. {totalPrice}</p>
                <Link
                  to={`/thankyou`}
                  className="btn btn-primary"
                  onClick={finalPurchase}
                >
                  Finalize your purchase
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="text-center">
            <h4 className="m-2">
              Oops you don't have products added to the cart
            </h4>
            <p>Check our products and buy all what you want</p>
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ fontSize: "300px", marginBottom: "5%" }}
            />
            <br />
            <Link to={`/`}>Go back to Homepage</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
