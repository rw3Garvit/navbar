import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  let products = [
    {
      id: 1,
      productName: "samsung",
      price: 20,
      desc: "this is first product",
    },
    {
      id: 2,
      productName: "lg",
      price: 20,
      desc: "this is first product",
    },
    {
      id: 3,
      productName: "ring",
      price: 20,
      desc: "this is first product",
    },
  ];

  return (
    <div>
      {products.map((val, index) => {
        return (
          <>
            <h1>{val.id}</h1>
            <h1>{val.productName}</h1>
            <Link to={`/${val.id}`}>view</Link>
          </>
        );
      })}
    </div>
  );
};

export default Home;
