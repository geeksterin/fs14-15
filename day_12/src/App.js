import logo from "./logo.svg";
import "./App.css";
import { useCallback, useEffect, useRef, useState } from "react";
import Home from "./Home";
import Contact from "./Contact";

function App() {
  const [count, setCount] = useState(0);

  // const countObj = useRef();
  // // useRef give you the obj
  // // in obj you will have current property

  // function handleChange() {
  // it will not render the component again wheneve there is new changes
  // countObj.current = countObj.current + 1;
  // console.log(countObj);
  // setCount(count + 1);

  // countObj.current.focus();
  // countObj.current.className = "new_input";
  // countObj.current.style.backgroundColor = "green";
  // // countObj.current.value = "new ";
  // if (countObj.current.style.backgroundColor == "black") {
  //   countObj.current.style.backgroundColor = "white";
  // } else {
  //   countObj.current.style.backgroundColor = "black";
  // }
  // }

  // useEffect(() => {
  //   console.log("called");
  //   // countObj.current.focus();
  // });

  const [theme, setTheme] = useState("");

  function handleUpdate() {
    setCount(count + 1);
  }

  const getArr = () => {
    return [count, count + 1, count + 2];
  };

  return (
    <div
      className="App"
      style={{
        background: theme,
        color: theme === "black" ? "white" : "black",
      }}
    >
      <Home getArr={getArr} />
      {/* <Contact /> */}
      <p>count : {count}</p>
      {/* <input
        ref={countObj}
        placeholder="enter your name"
        className="input_main"
      /> */}
      <button
        onClick={() => {
          handleUpdate();
        }}
      >
        click
      </button>
      <button
        onClick={() => {
          if (theme === "black") {
            setTheme("white");
          } else {
            setTheme("black");
          }
        }}
      >
        Theme
      </button>
    </div>
  );
}

export default App;
