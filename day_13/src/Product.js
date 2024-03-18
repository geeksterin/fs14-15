import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Data } from "./Data";

export const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const newData = Data.find((item) => item.id === Number(params.id));
    console.log(newData, params.id);
    setProduct(newData);
  }, []);

  return (
    <div>
      product
      <p>id : {product.id}</p>
      <p>name : {product.name}</p>
      <p>Price : {product.price}</p>
    </div>
  );
};
