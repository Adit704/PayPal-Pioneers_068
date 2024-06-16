import {} from "react";
import "../styles/combinationCards.css";
import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";

export const BestSellers = () => {
  const product = useSelector((state) => state.products);

  if (product.status === "success") {
    console.log(product.data);
  }

  console.log(product);
  return (
    <>
      <div id="landing_page_combination_card_titles">
        <div>Best Sellers</div>
        <div>Great Deals</div>
        <div>Highly Rated</div>
      </div>

      {product.status === "success" && (
        <div id="landing_page_combination_cards">
          {" "}
          <ProductCard item={product.data[0]} key={product.data[0].id} />
          <ProductCard item={product.data[1]} key={product.data[1].id} />
          <ProductCard item={product.data[2]} key={product.data[2].id} />
          <ProductCard item={product.data[3]} key={product.data[3].id} />{" "}
        </div>
      )}
    </>
  );
};
