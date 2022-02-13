import React, { memo } from "react";
import { useSelector } from "react-redux";
import { ProductCardLink } from "./utils/ProductCard";

const ProductLinks = memo(() => {
  // redux rate reducer & state
  const loading = useSelector((s) => s.RATE_ORDER.loading);

  return (
    <>
      {loading ? (
        <div className="px-5 xs:px-7 md:px-5 lg:px-7">Loading...</div>
      ) : (
        <div className="flex gap-2.5 flex-col">
          <RenderProductLinks />
        </div>
      )}
    </>
  );
});
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
