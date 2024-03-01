import React from "react";
import Header from "./Header";

const About = () => {
  const nums = [1, 2, 3];
  return (
    <div>
      <Header isAbout={true} nums={nums} />
    </div>
  );
};

export default About;
