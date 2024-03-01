import Card from "./Card";
import Header from "./Header";

export const Home = () => {
  const card = [
    { id: 1, name: "Apple", type: "mobile", price: 40000 },
    { id: 2, name: "Lava", type: "mobile", price: 20000 },
    { id: 3, name: "Samsung", type: "mobile", price: 10000 },
  ];
  return (
    <div>
      {/* {card.map((item, index) => {
        return (
          <Card
            key={item.id + index}
            name={item.name}
            type={item.type}
            price={item.price}
          />
        );
      })} */}
      <Header name="home" />
    </div>
  );
};
