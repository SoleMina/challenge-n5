import React, { useState, useEffect } from "react";
import { ItemContainer } from "../ItemContainer";
import "./ListContainer.scss";

const ListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/SoleMina/challenge-n5/main/src/assets/data.json"
    )
      .then((response) => response.json())
      .then((res) => setProducts(res.products));
  }, []);

  console.log(products);
  //
  return (
    <div className="container">
      <div className="list__products">
        {products &&
          products.map((product) => (
            <ItemContainer name={product.id} price={product.price} />
          ))}
      </div>
    </div>
  );
};

export default ListContainer;
