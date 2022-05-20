import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";

const ItemContainer = ({ id, img, name, price, amount, description }) => {
  return (
    <Card className="text-center item" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} alt="" className="item__image" />
      <Card.Body>
        <Card.Title className="item__title"> {name}</Card.Title>
        <Card.Text className="item__id">{id}</Card.Text>
        <Card.Text className="item__price">{price}</Card.Text>
        <Card.Text className="item__amount">{amount}</Card.Text>
      </Card.Body>
      <ItemCount />
    </Card>
  );
};

export default ItemContainer;
