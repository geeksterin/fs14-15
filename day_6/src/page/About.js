import React from "react";

const About = (props) => {
  console.log("About", props.show);

  return (
    <div>
      <div>
        <h6>{props.name}</h6>
        {props.show === "about" ? <p>{props.content}</p> : ""}
        <button
          onClick={() => {
            props.setShow("about");
          }}
        >
          show
        </button>
      </div>
    </div>
  );
};

export default About;
