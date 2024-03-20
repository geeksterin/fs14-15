import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState({});

  const params = useParams();

  async function fetchProduct() {
    const result = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.productid}`
    );
    setProduct(result.data.meals[0]);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "10px",
        margin: "10px",
        border: "1px solid black",
        borderRadius: "10px",
      }}
    >
      <h6>Category : {product.strCategory}</h6>
      <div>
        <h6>{product.strMeal}</h6>
        <img
          src={product.strMealThumb}
          alt={product.strMeal}
          style={{ width: "5rem" }}
        />
        <p>{product.strInstructions}</p>
      </div>
    </div>
  );
};

export default Product;
