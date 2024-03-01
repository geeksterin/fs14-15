import React from "react";

const Card = (props) => {
  console.log("Card", props);
  return (
    <div>
      <ul>
        <li>name {props.name}</li>
        <li>type {props.type}</li>
        <li>price {props.price}</li>
      </ul>
    </div>
  );
};

export default Card;
