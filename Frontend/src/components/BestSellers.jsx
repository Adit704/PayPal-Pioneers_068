import { useState } from "react";
import "../styles/combinationCards.css";
import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";

export const BestSellers = () => {
  const product = useSelector((state) => state.products);
  const [index, setIndex] = useState(0);

  if (product.status === "success") {
    console.log(product.data);
  }

  

  console.log(product);
  return (
    <>
      <div id="landing_page_combination_card_titles">
        <div onClick={() => setIndex(4)}>Best Sellers</div>
        <div onClick={() => setIndex(8)}>Great Deals</div>
        <div onClick={() => setIndex(12)}>Highly Rated</div>
      </div>

      {product.status === "success" && (
        <div id="landing_page_combination_cards">
          {" "}
          <ProductCard item={product.data[index ]} key={product.data[index].id} />
          <ProductCard item={product.data[index + 1]} key={product.data[index + 1].id} />
          <ProductCard item={product.data[index + 2]} key={product.data[index + 2].id} />
          <ProductCard item={product.data[index + 3]} key={product.data[index + 3].id} />{" "}
        </div>
      )}
    </>
  );
};
