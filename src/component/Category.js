import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([]);

  const params = useParams();
  console.log("params", params);
  async function fetchCategory() {
    const result = await axios(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    setCategory(result.data.categories);
  }

  useEffect(() => {
    fetchCategory();
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
      <h6>Category</h6>
      {category.map((subCategory) => {
        return (
          <div key={subCategory.idCategory}>
            <NavLink to={`/subcategory/${subCategory.strCategory}`}>
              <h6>{subCategory.strCategory}</h6>
              <p>{subCategory.strCategoryDescription}</p>
              <img
                src={subCategory.strCategoryThumb}
                alt={subCategory.strCategory}
              />
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
