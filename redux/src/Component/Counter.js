import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementAction, incrementAction } from "../action";

const Counter = () => {
  const data = useSelector((state) => state.CounterReducer);
  const dispatch = useDispatch();

  // const [state, dispatch] = useContext();

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        increase
      </button>
      <p>{data}</p>
      <button
        onClick={() => {
          dispatch(decrementAction());
        }}
      >
        decrease
      </button>
    </div>
  );
};

export default Counter;
