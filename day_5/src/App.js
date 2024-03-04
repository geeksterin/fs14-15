import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentValue, setCurrentValue] = useState(10);

  function increase() {
    setCurrentValue(currentValue + 1);
    console.log("just after", currentValue);
  }

  console.log("after function", currentValue);

  const [content, setContent] = useState("");

  const [isView, setIsView] = useState(false);

  return (
    <div className="App">
      <p>{currentValue}</p>
      <button
        type="button"
        onClick={() => {
          setCurrentValue(currentValue + 1);
        }}
      >
        increase
      </button>
      <p>{content}</p>
      <br />
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setContent(e.target.value);
        }}
      />
      <div>{currentValue > 20 && currentValue}</div>

      <p>{isView ? "Hello" : ""}</p>
      <button
        type="button"
        onClick={() => {
          setIsView(!isView);
        }}
      >
        {isView ? "Hide" : "View"}
      </button>
    </div>
  );
}

export default App;
