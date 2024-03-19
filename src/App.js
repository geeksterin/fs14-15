import { useContext } from "react";
import "./App.css";
import { UserContext } from "./UserProvider";
import { Home } from "./Home";
import Contact from "./Contact";

function App() {
  const user = useContext(UserContext);
  return (
    <div
      className="App"
      style={{
        background: user.theme,
        color:
          user.theme === "black" || user.theme === "green" ? "white" : "black",
      }}
    >
      <h1>Context Api</h1>
      <p>name {user.user.name}</p>
      <Home />
      <Contact />
    </div>
  );
}

export default App;
