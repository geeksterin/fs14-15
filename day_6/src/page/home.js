import React from "react";

const Home = (props) => {
  const { name, id, num } = props;
  return <div>{name}</div>;
};

export const List = () => {
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
};

export default Home;
