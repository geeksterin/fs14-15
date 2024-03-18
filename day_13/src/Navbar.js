import React from "react";
import { NavLink } from "react-router-dom";
import { Data } from "./Data";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">App</NavLink>
          </li>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact</NavLink>
          </li>
          {Data.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={`/product/${item.id}`}>{item.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
