import React from "react";
import { useSelector } from "react-redux";
import { ProductCardLink } from "./utils/ProductCard";

function ProductLinks() {
  // redux rate reducer & state
  const loading = useSelector((s) => s.RATE_ORDER.loading);

  return (
    <>
      {loading ? (
        <div className="p-3">Loading...</div>
      ) : (
        <div className="flex gap-2.5 flex-col">
          <RenderProductLinks />
        </div>
      )}
    </>
  );
}
export default ProductLinks;

// single responsibility principle
const RenderProductLinks = () => {
  // redux rate reducer & state
  const products = useSelector((s) => s.RATE_ORDER.products);

  return (
    <>
      {/* render only products that are not rated or rated === false */}
      {products.map(
        (product) =>
          !product.rated && (
            <ProductCardLink key={product.productId} data={product} />
          )
      )}
    </>
  );
};
