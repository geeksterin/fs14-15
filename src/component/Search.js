import axios from "axios";
import React, { useState } from "react";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState();

  async function searchProducts() {
    const result = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    );
    setProducts(result.data.meals);
  }

  return (
    <div>
      <p>Search</p>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={searchProducts}>Search</button>

      {products.map((product) => {
        return (
          <div
            key={product.idMeal}
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
            <h6>{product.strMeal}</h6>
            <img
              style={{ width: "5rem" }}
              src={product.strMealThumb}
              alt={product.strMeal}
            />
            <p>{product.strInstructions}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
