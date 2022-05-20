import React, { useState, useEffect } from "react";
import { ItemContainer } from "../ItemContainer";
import "./ListContainer.scss";

const ListContainer = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch("./data.json");
    const result = await response.json();
    result && setProducts(result.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products);
  //
  return (
    <div className="container">
      <div className="list__products">
        {products &&
          products.map((product) => (
            <ItemContainer
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              amount={product.amount}
            />
          ))}
      </div>
    </div>
  );
};

export default ListContainer;
