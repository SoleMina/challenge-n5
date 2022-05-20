import React, { useState } from "react";
import "./ItemCount.scss";

const ItemCount = ({ amount, onAdd }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    count < amount && setCount(count + 1);
  };
  const decrement = () => {
    count > 0 && setCount(count - 1);
  };

  const addProducts = () => {
    console.log(count);
  };
  return (
    <>
      <div className="count pb-4">
        <div className="count__actions mb-2">
          <button className="count__btnStyle" onClick={() => decrement()}>
            -
          </button>
          <p>{count}</p>
          <button className="count__btnStyle" onClick={() => increment()}>
            +
          </button>
        </div>
        <button className="count__btnStyle" onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
