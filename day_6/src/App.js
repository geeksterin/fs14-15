import logo from "./logo.svg";
import "./App.css";
import Home, { List } from "./page/home";

function App() {
  let num = 9;
  console.log("num", num);
  return (
    <div className="App">
      <Home name="name" id="1" address="india" num={num} />
      <List />
    </div>
  );
}

export default App;
