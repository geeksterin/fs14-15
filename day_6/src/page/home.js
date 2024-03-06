import React, { useState } from "react";

const Home = (props) => {
  const { name, content, show, setShow } = props;

  console.log("home", show);

  return (
    <div>
      <div>
        <h6>{name}</h6>
        {show === "home" ? <p>{content}</p> : ""}
        <button
          onClick={() => {
            setShow("home");
          }}
        >
          show
        </button>
      </div>
    </div>
  );
};

export default Home;
