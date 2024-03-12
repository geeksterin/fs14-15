import React, { useEffect, useState } from "react";

export const Home = ({ count, setCount }) => {
  const [num, setnum] = useState(0);

  useEffect(() => {
    console.log("called")
    setCount(num);
  }, [num]);

  return (
    <div>
      <p>num : {num}</p>
      <button onClick={() => setnum(num + 1)}>Increase</button>
      <p>count : {count}</p>
    </div>
  );
};
