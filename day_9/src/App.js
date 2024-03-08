import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    console.log(count);
    if (count < 9) {
      setCount(count + 1);
    }
  }, [count]);

  return (
    <div className="App">
      <h1>UseEffect</h1>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>

      <p>{count1}</p>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        click
      </button>
      {isShow && <p>count is 5</p>}
    </div>
  );
}

export default App;
