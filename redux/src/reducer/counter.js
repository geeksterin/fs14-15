const initialState = 0;

function CounterReducer(state = initialState, action) {
  console.log("action", action);
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

export default CounterReducer;
