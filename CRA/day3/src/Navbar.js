import React from "react";
import "./App.css";

const Navbar = () => {
  return (
    <div className="main_home">
      <ul>
        <li>Home</li>
        <li className="text-3xl font-bold underline">About</li>
        <li className="font-normal text-xl text-[#fff]">Contact</li>
      </ul>
      <p></p>
    </div>
  );
};

export default Navbar;
