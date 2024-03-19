import React, { useContext } from "react";
import { UserContext } from "./UserProvider";

export const Home = () => {
  const user = useContext(UserContext);
  console.log("Home", user);
  return (
    <div>
      Home
      <p>name {user.user.name}</p>
      <input
        onChange={(e) => {
          user.setUser({
            name: e.target.value,
            age: 28,
          });
        }}
      />
      <br />
      <button
        onClick={(e) => {
          user.setTheme("black");
        }}
      >
        theme
      </button>
    </div>
  );
};
