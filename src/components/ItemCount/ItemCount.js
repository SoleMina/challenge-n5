import React, { useState } from "react";
import Swal from "sweetalert2";

import "./ItemCount.scss";

const ItemCount = ({ amount, onAdd }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    count < amount && setCount(count + 1);
  };
  const decrement = () => {
    count > 0 && setCount(count - 1);
  };

  const AddProduct = () => {
    if (count) {
      onAdd(count);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your product has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You didn't add products to the cart"
      });
    }
  };

  return (
    <>
      <div className="count pb-4">
        <div className="count__actions mb-2">
          <button className="count__btnStyle" onClick={() => decrement()}>
            -
          </button>
          <p className="m-0">{count}</p>
          <button className="count__btnStyle" onClick={() => increment()}>
            +
          </button>
        </div>
        <button className="count__btnStyle" onClick={AddProduct}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
