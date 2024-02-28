import React from "react";
import "./App.css";

function sum(a, b) {
  return a + b;
}

const Navbar = () => {
  console.log(sum(45, 788));
  const data = "data";
  return (
    <div className="main_home">
      <ul>
        <li>Home</li>
        <li className="text-3xl font-bold underline">About</li>
        <li className="font-normal text-xl text-[#fff]">Contact</li>
        <li>{`here is data ${data}`}</li>
      </ul>
      <p></p>
    </div>
  );
};

export default Navbar;
