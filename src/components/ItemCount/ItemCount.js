import React from "react";
import "./ItemCount.scss";

const ItemCount = () => {
  return (
    <>
      <div className="count pt-4 pb-4">
        <div className="count__actions mb-2">
          <button className="count__btnStyle">-</button>
          <p>1</p>
          <button className="count__btnStyle">+</button>
        </div>
        <button className="count__btnStyle">Agregar al carrito</button>
      </div>
    </>
  );
};

export default ItemCount;
