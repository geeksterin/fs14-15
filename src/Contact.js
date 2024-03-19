import React, { useContext } from "react";
import { UserContext } from "./UserProvider";

const Contact = () => {
  const data = useContext(UserContext);
  console.log("data", data);
  return (
    <div>
      Contact
      <p>{data.user.name}</p>
      <input
        onChange={(e) => {
          data.setUser({
            name: e.target.value,
            age: 22,
          });
        }}
      />
      <br />
      <button
        onClick={() => {
          data.setTheme("green");
        }}
      >
        theme
      </button>
    </div>
  );
};

export default Contact;
