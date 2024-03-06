import "./App.css";
import Navbar from "./component/Navbar";
import Cart from "./component/Cart";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Samsung S21",
      quantity: 0,
      price: 20000,
    },
    {
      id: 2,
      name: "BlackBarry",
      quantity: 0,
      price: 30000,
    },
    {
      id: 3,
      name: "Iphone 14",
      quantity: 0,
      price: 50000,
    },
  ]);

  const [quantity, setQuantity] = useState(0);

  return (
    <div className="App">
      <Navbar quantity={quantity} />
      <Cart
        products={products}
        setProducts={setProducts}
        setQuantity={setQuantity}
        quantity={quantity}
      />
    </div>
  );
}

export default App;
