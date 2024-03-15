import React from "react";
import { Navbar } from "./Navbar";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  console.log(location);

  return (
    <div>
      <Navbar />
      <p>Home</p>
    </div>
  );
};

export default Home;
