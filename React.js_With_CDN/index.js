function Navbar() {
  const obj = {
    name: "Lily",
    age: 20,
  };
  return (
    <div className="main_container">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>contact</li>
        <li>
          <button>click</button>
        </li>
      </ul>
    </div>
  );
}

function Home() {
  const names = ["A", "B", "C"];
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
    </div>
  );
}

function About() {
  const names = ["A", "B", "C"];
  return (
    <div>
      <Navbar />
      <h1>About</h1>
    </div>
  );
}

function Dashboard() {
  const names = ["A", "B", "C"];
  return (
    <div>
      <h1>Hello Dashboard</h1>
      {names.map((element, index) => {
        return <p key={index}>{element}</p>;
      })}
    </div>
  );
}

ReactDOM.render(<Dashboard />, document.querySelector("#root"));
ReactDOM.render(<About />, document.querySelector("#geek"));
