import React from "react";
import { StyledHeadliner } from "../styled-components/Headliner.styled";
import { Link } from "react-router-dom";
import { useItemsContext } from "../CartContext";
//Import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Import icon
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Thankyou = () => {
  const { cartItems } = useItemsContext();

  return (
    <div className="thankyou text-center">
      {cartItems.length > 0 ? (
        <>
          <StyledHeadliner color="black">Thank You</StyledHeadliner>
          <img
            src="https://media.istockphoto.com/vectors/shopartbanner-copy-vector-id862205352?k=20&m=862205352&s=612x612&w=0&h=A8d92h4n8YouiQwaiKM3w2z-BuD_IwRfXgBYquhFfo4="
            alt="Logo"
          />
          <p className="p-4">Your purchase was successful</p>
          <div className="pb-5">
            <Link to={`/`}>Go back to Homepage</Link>
          </div>
        </>
      ) : (
        <div className="container">
          <div className="hv-85 text-center">
            <h4 className="p-5">
              Oops you don't have products added to the cart
            </h4>
            <p className="p-2">Check our products and buy all what you want</p>
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ fontSize: "300px", marginBottom: "5%" }}
            />
            <br />
            <div className="p-5">
              <Link to={`/`}>Go back to Homepage</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Thankyou;
