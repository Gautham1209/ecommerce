import React from "react";
import ProductItem from "./ProductItem";
import banana from "./Images/banana.png";
import Strawberries from "./Images/Strawberries.png";
import Yogurt from "./Images/Yogurt.png";
import Blackberries from "./Images/Blackberries.png";
import Mango from "./Images/Mango.jpg";
import Apple from "./Images/Apple.jpg";

const ProductItemData = () => {
  const productData = [
    {
      imageUrl: banana,
      productName: "Banana 1ct",
      price: "$0.69",
      unit: "18 oz",
    },
    {
      imageUrl: Strawberries,
      productName: "Strawberries",
      price: "$0.69",
      unit: "1 lb",
    },
    {
      imageUrl: Yogurt,
      productName: "Yogurt",
      price: "$0.69",
      unit: "1 lb",
    },
    {
      imageUrl: Blackberries,
      productName: "Blackberries",
      price: "$0.69",
      unit: "1 lb",
    },
    {
      imageUrl: Mango,
      productName: "Mango",
      price: "$0.69",
      unit: "1 lb",
    },
    {
      imageUrl: Apple,
      productName: "Apple",
      price: "$0.69",
      unit: "1 lb",
    },
  ];

  return (
    <div className="flex md:flex-wrap flex-none">
      {productData.map((card, index) => (
        <ProductItem key={index} {...card} />
      ))}
    </div>
  );
};

export default ProductItemData;
