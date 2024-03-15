import React, { useEffect, useState } from "react";

const Home = ({ getArr }) => {
  const [list, setList] = useState([]);

  const getData = useEffect(() => {
    const data = getArr();
    console.log(data);
    setList(data);
    console.log("home useEffect");
  }, [getArr]);

  console.log(getData);

  return (
    <div>
      {list.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

export default Home;
