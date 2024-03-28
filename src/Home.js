import React, { Suspense, lazy, useEffect, useState } from "react";
// import Card from "./Card";

function Loading() {
  return <div>Loading the data...</div>;
}

const CardPreview = lazy(() => {
  return import("./Card");
});

const Home = () => {
  const [show, setShow] = useState(false);

  const [card, setCard] = useState({});

  const [isLoading, setIsLoading] = useState();

  async function fetchData() {
    setIsLoading(true);
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    setCard(data.results[0]);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {!isLoading && (
        <Suspense fallback={<Loading />}>
          Home
          <button
            onClick={() => {
              setShow(!show);
            }}
          >
            show
          </button>
          <h1>hello</h1>
          <CardPreview card={card} />
        </Suspense>
      )}
      {!isLoading && (
        <Suspense fallback={<Loading />}>
          Home
          <button
            onClick={() => {
              setShow(!show);
            }}
          >
            show
          </button>
          <h1>hello</h1>
          <CardPreview card={card} />
        </Suspense>
      )}
    </div>
  );
};

export default Home;
