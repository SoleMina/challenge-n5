import React, { useState, useEffect } from "react";
import { ItemContainer } from "../ItemContainer";
import Spinner from "../SpinnerContainer/SpinnerContainer";
import "./ListContainer.scss";

const ListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch("./data.json");
    const result = await response.json();
    result && setProducts(result.products);
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 600);
  }, []);

  console.log(products);
  //
  return (
    <div className="container">
      {loading ? (
        <Spinner text="Loading products" />
      ) : (
        <div className="list__products">
          {products &&
            products.map((product) => (
              <ItemContainer
                item={product}
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                amount={product.amount}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default ListContainer;
