import { useEffect, useState } from "react";

function Card({ card }) {
  return (
    <div>
      <p>
        name : {card?.name?.first} {card?.name?.last}
      </p>
      <img
        style={{
          width: "5rem",
        }}
        src="https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg"
        alt="Geekster Logo"
      />
      <p>Geekster</p>
      <p>class</p>
      <p>react</p>
    </div>
  );
}

export default Card;
