import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Home } from "./Home";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();

  function handleIncrease() {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  }

  async function handleGetData() {
    try {
      const result = await fetch("https://randomuser.me/api/");
      const res = await result.json();
      setData(res.results[0]);
    } catch (error) {
      console.log("error", error);
    }
  }

  // it will when our component render
  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div className="App">
      <Home count={count} setCount={setCount} />
      <div>
        <p> {data?.id?.name}</p>
      </div>
    </div>
  );
}

export default App;
