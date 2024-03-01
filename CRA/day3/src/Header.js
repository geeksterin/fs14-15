import React from "react";
import List from "./List";

const Header = ({ isAbout, nums, name = "h" }) => {
  //   const { isAbout, nums } = props;
  console.log("Header", name);
  return (
    <div>
      {name}
      {isAbout ? <p>About</p> : ""}
      {nums && nums.map((ele, index) => <p key={index}>{ele}</p>)}
    </div>
  );
};

export default Header;
