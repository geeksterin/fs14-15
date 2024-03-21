import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import Search from "./component/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <Home />
    </div>
  );
}

export default App;
