import React, { useState } from "react";
import { data } from "../Data.js";

const Home = () => {
  const [food, setFood] = useState(data);

  function filterData(name) {
    let filterData = data.filter((item) => {
      if (item.name.toLowerCase().includes(name.trim())) {
        return true;
      }
      return false;
    });
    setFood(filterData);
  }

  // this will update the raitng of items
  function updateRating(e) {
    let obj = [...food];

    obj[0].rating = e.target.value;

    setFood(obj);
  }

  // solid principle and clean code

  return (
    <div>
      <div>
        <input
          type="text"
          name="search"
          placeholder="search food"
          onChange={(e) => {
            filterData(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="number"
          name="rating"
          placeholder="Enter Rating"
          onChange={updateRating}
        />
      </div>
      {food.map((item) => {
        return (
          <div
            key={item._id.$oid}
            style={{
              border: "1px solid black",
              padding: "0.5rem",
              borderRadius: "1rem",
              width: "10rem",
              margin: "0.5rem",
            }}
          >
            <h5>{item.name}</h5>
            <p>{item.address}</p>
            <p>Food : {item.type_of_food}</p>
            <p>Rating : {item.rating}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
