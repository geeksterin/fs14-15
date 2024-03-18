import logo from "./logo.svg";
import "./App.css";
import { useState, useReducer } from "react";

// function reducer(state, action) {
//   if (action.type === "increase") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   } else if (action.type === "decrease") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   } else if (action.type === "changeName") {
//     return {
//       ...state,
//       name: action.payload,
//       address: "",
//     };
//   }

//   return state;
// }

const Product = [
  {
    id: 1,
    name: "phone 1",
    quantity: 0,
    price: 2000,
  },
  {
    id: 2,
    name: "phone 2",
    quantity: 0,
    price: 1000,
  },
  {
    id: 3,
    name: "phone 3",
    quantity: 0,
    price: 4000,
  },
  {
    id: 4,
    name: "phone 4",
    quantity: 0,
    price: 8000,
  },
];

function reducer(state, action) {
  console.log(action);
  if (action.type === "add") {
    let arr = [...state.Product]; // copy of product
    let total = state.total;
    arr.map((item) => {
      if (item.id === action.payload) {
        item.quantity++;
        total += item.price;
      }
    });

    return {
      Product: arr,
      total: total,
      quantity: state.quantity + 1,
    };
  } else if (action.type === "remove") {
    let arr = [...state.Product];
    let total = state.total;
    arr.map((item) => {
      if (item.id === action.payload) {
        item.quantity--;
        total -= item.price;
      }
    });

    return {
      Product: arr,
      total: total,
      quantity: state.quantity - 1,
    };
  }
  return state;
}

function App() {
  // const [counter, setCounter] = useState(0); // 123
  const [state, dispatch] = useReducer(reducer, {
    Product: Product,
    total: 0,
    quantity: 0,
  });

  return (
    <div className="App">
      {/* <p>{state.name}</p>
      <p>{state.counter}</p>
      <input
        value={state.name}
        onChange={(e) => {
          dispatch({ type: "changeName", payload: e.target.value });
        }}
      />

      <button
        onClick={() => {
          dispatch({ type: "increase" });
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrease" });
        }}
      >
        decrease
      </button> */}
      <p>total : {state.total}</p>
      <p>quantity : {state.quantity}</p>
      {state.Product.map((item, index) => {
        return (
          <div key={index}>
            <p>id : {item.id}</p>
            <p>name : {item.name}</p>
            <p>quantity : {item.quantity}</p>
            <p>price : {item.price}</p>
            <button
              onClick={() => {
                dispatch({ type: "add", payload: item.id });
              }}
            >
              Add to cart
            </button>
            <button
              onClick={() => {
                dispatch({ type: "remove", payload: item.id });
              }}
            >
              remove from cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
