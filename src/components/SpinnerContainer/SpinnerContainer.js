import React from "react";

//Import Spinner from bootstrap
import Spinner from "react-bootstrap/Spinner";

import styles from "./SpinnerContainer.module.scss";

const SpinnerContainer = ({ text }) => {
  return (
    <div
      className={`spinner d-flex justify-content-center align-content-center h-70 align-items-center`}
    >
      <Spinner animation="border" role="status"></Spinner>
      <span className={`spinner__text mr-auto m-2 ${styles.size}`} size="lg">
        {text}
      </span>
    </div>
  );
};

export default SpinnerContainer;
