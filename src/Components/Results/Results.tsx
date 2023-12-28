import React from "react";
import "./Results.scss";
import { Product } from "../../Data/Data";
import Products from "../Products/Products";

interface ProductsUi {
  products: Product[];
}

const Results = ({ products }: ProductsUi) => {
  return (
    <>
      {products.length <= 0 ? (
        <div className="not_found">Not Found!</div>
      ) : (
        <div className="result_container">
          {products.map((product, i) => {
            return <Products key={i} product={product} />;
          })}
        </div>
      )}
    </>
  );
};

export default Results;
