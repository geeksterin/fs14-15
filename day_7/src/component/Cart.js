import React, { useState } from "react";

const Cart = ({ products, setProducts, setQuantity, quantity }) => {
  const [total, setTotal] = useState(0);

  // increase quantity
  function Increase(id) {
    // let tempProduct = products; // we are storing reference of products in tempProduct
    products.map((product) => {
      // check if product id is equal to the id
      if (product.id === id) {
        // then increase the quantity by 1
        product.quantity += 1;
        setTotal(total + product.price);
        setQuantity(quantity + 1);
      }
      return product;
    });
    // let temp = [...tempProduct];
    setProducts(products);
  }

  // decrease quantity
  function Decrease(id) {
    let tempProducts = [...products]; // here we are using taking value from products array and storing in temoProducts using spred operation

    tempProducts.map((product) => {
      // check if product id is equal to the id
      if (product.id === id && product.quantity >= 1) {
        // then decrease the quantity by 1
        product.quantity -= 1;
        setTotal(total - product.price);
        setQuantity(quantity - 1);
      }
      return product;
    });

    // store the tempProducts
    setProducts(tempProducts);
  }

  function removeProduct(id) {
    let tempProducts = [...products]; // here we are using taking value from products array and storing in temoProducts using spred operation
    let arr = tempProducts.filter((product) => {
      if (product.id === id) {
        setTotal(total - product.quantity * product.price);
        setQuantity(quantity - product.quantity);
      }
      return product.id !== id;
    });
    setProducts(arr);
  }

  return (
    <div>
      {products.length <= 0 && <p>is currently empty</p>}
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h4>{product.name}</h4>
            <p>price: {product.price}</p>
            <button
              onClick={() => {
                removeProduct(product.id);
              }}
            >
              remove
            </button>
            <div>
              <button
                onClick={() => {
                  Increase(product.id);
                }}
              >
                +
              </button>
              <p>{product.quantity}</p>
              <button
                onClick={() => {
                  Decrease(product.id);
                }}
              >
                -
              </button>
            </div>
          </div>
        );
      })}
      <div>
        <div>
          <p>Total : {total}</p>
        </div>
        <button
          onClick={() => {
            setProducts([]);
            setTotal(0);
            setQuantity(0);
          }}
        >
          clear cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
