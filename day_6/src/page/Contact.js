import React from "react";

const Contact = (props) => {
  console.log("contact", props.show);

  return (
    <div>
      <div>
        <h6>{props.name}</h6>
        {props.show === "contact" ? <p>{props.content}</p> : ""}
        <button
          onClick={() => {
            props.setShow("contact");
          }}
        >
          show
        </button>
      </div>
    </div>
  );
};

export default Contact;
