import React from "react";
import { StyledHeadliner } from "../styled-components/Headliner.styled";
import { CartContainer } from "../components";

const Cart = () => {
  return (
    <div className="container p-4">
      <StyledHeadliner color="black">CART</StyledHeadliner>
      <CartContainer />
    </div>
  );
};

export default Cart;
