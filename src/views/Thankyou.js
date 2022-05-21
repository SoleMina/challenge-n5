import React from "react";
import { StyledHeadliner } from "../styled-components/Headliner.styled";

const Thankyou = () => {
  return (
    <div className="thankyou text-center">
      <StyledHeadliner color="black">Thank You</StyledHeadliner>
      <p>Your purchase was successful</p>
    </div>
  );
};

export default Thankyou;
