import logo from "./logo.svg";
import "./App.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import Home from "./Home";

function isPrime(state) {
  if (state === 1) {
    return false;
  } else if (state === 2) {
    return true;
  } else {
    for (let i = 2; i < state; i++) {
      if (state % i === 0) {
        return false;
      }
    }
    return true;
  }
}

function App() {
  // const [state, setState] = useState(0);
  // const [time, setTime] = useState(new Date());
  // const [click1, setClick1] = useState(false);
  // const [click2, setClick2] = useState(false);

  // const clock = useTime();

  // const newData = useMemo(() => {
  //   let CountArray = [];
  //   if (state <= 200) {
  //     for (let i = 1; i <= state; i++) {
  //       if (isPrime(i)) {
  //         CountArray.push(i);
  //         console.log("Prime Number: ", i);
  //       }
  //     }
  //     return CountArray;
  //   }
  // }, [state]);

  // const newCallback = useCallback(() => {
  //   console.log("useCallback");
  //   return "hello";
  // }, [click1]);

  // console.log(newCallback);

  // console.log("useMemo", newData);

  // let newData = [];

  // if (state <= 200) {
  //   for (let i = 1; i <= state; i++) {
  //     if (isPrime(i)) {
  //       newData.push(i);
  //       console.log("Prime Number: ", i);
  //     }
  //   }
  // }

  // console.log(newData);

  // // console.log(newData);

  // function useTime() {
  //   useEffect(() => {
  //     const intervalId = window.setInterval(() => {
  //       setTime(new Date());
  //     }, 1000);

  //     // clean up
  //     return () => {
  //       window.clearInterval(intervalId);
  //     };
  //   }, []);

  //   return time;
  // }

  // function format(date, format) {
  //   const map = {
  //     mm: date.getMinutes(),
  //     hh: date.getHours(),
  //     ss: date.getSeconds(),
  //     a: date.getHours() >= 12 ? "PM" : "AM",
  //   };

  //   return format.replace(/mm|hh|ss|a/gi, (matched) => {
  //     return String(map[matched]).padStart(2, "0");
  //   });
  // }

  // function showData() {
  //   console.log("showData");
  //   return click1 ? "clicked" : "not clicked";
  // }

  // const showData = useMemo(() => {
  //   console.log("showData");
  //   return click1 ? "clicked" : "not clicked";
  // }, [click1]);

  return (
    <div className="App">
      {/* <p className="clock">{format(clock, "hh:mm:ss a")}</p>
      <input
        type="number"
        value={state}
        onChange={(e) => {
          let num = Math.min(100_000, Number(e.target.value));
          setState(num);
        }}
      />
      {newData.map((item, index) => {
        return (
          <div key={index}>
            <p>{item}</p>
          </div>
        );
      })} */}

      {/* <button
        onClick={() => {
          if (click1) {
            setClick1(false);
          } else {
            setClick1(true);
          }
        }}
      >
        click1
      </button>
      <br />
      {showData}
      <br />
      <button
        onClick={() => {
          if (click2) {
            setClick2(false);
          } else {
            setClick2(true);
          }
        }}
      >
        click2
      </button> */}
      <Home />
    </div>
  );
}

export default App;
