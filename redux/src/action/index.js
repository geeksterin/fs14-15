function incrementAction() {
  return {
    type: "INCREMENT",
  };
}

function decrementAction() {
  return {
    type: "DECREMENT",
  };
}

export { incrementAction, decrementAction };
