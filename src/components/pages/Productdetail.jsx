import React from "react";
import { useParams } from "react-router-dom";

const Productdetail = () => {
  let { id } = useParams();

  console.log(id, "product detail,");

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

  let result = products.filter((val) => val.id == id);
  console.log(result);

  return (
    <div>
      <h1>{result[0].id}</h1>
      <h1>{result[0].productName}</h1>
      <h1>{result[0].price}</h1>
      <h1>{result[0].desc}</h1>
    </div>
  );
};

export default Productdetail;
