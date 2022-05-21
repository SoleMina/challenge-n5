import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";
//Import context
import { useItemsContext } from "../../CartContext";

const ItemContainer = ({ id, image, name, price, amount, item }) => {
  const [cart, setCart] = useState(0);
  const { addToCart, removeItem } = useItemsContext();

  //On Add
  const onAdd = (quantityToAdd) => {
    setCart(quantityToAdd);
    addToCart(item, quantityToAdd);
  };

  return (
    <Card className="text-center item" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} alt="" className="item__image" />
      <Card.Body>
        <Card.Title className="item__title font-weight-bold">
          {" "}
          {name}
        </Card.Title>
        <Card.Text className="item__id">{id}</Card.Text>
        <Card.Text className="item__price m-0">Price: ${price}</Card.Text>
        <Card.Text className="item__amount">Amount: {amount}</Card.Text>
      </Card.Body>
      <ItemCount amount={amount} onAdd={onAdd} />
    </Card>
  );
};

export default ItemContainer;
