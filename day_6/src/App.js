import { useState } from "react";
import "./App.css";
import Contact from "./page/Contact";
import Home from "./page/home";
import About from "./page/About";

function App() {
  const arr = [
    {
      name: "Home",
      content:
        "With a population of about 2 million, Almaty is Kazakhstan's largestcity. From 1929 to 1997, it was its capital city.",
    },
    {
      name: "Contact",
      content:
        "The name comes from алма, the Kazakh word for apple and is oftentranslated as ",
    },
    {
      name: "About",
      content:
        "The name comes from алма, the Kazakh word for apple and is oftentranslated as ",
    },
  ];

  const [show, setShow] = useState(1);

  return (
    <div className="App">
      <Home
        name={arr[0].name}
        content={arr[0].content}
        show={show}
        setShow={setShow}
      />
      <Contact
        name={arr[1].name}
        content={arr[1].content}
        show={show}
        setShow={setShow}
      />
      <About
        name={arr[2].name}
        content={arr[2].content}
        show={show}
        setShow={setShow}
      />
    </div>
  );
}

export default App;
