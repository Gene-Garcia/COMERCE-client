import React from "react";
import { useRate } from "../../../../../../../../../hooks/useRate";
import { ProductCardLink } from "./utils/ProductCard";

function ProductLinks() {
  const { products, loading } = useRate();

  return (
    <>
      {loading || products.length < 1 ? (
        <></>
      ) : (
        <div className="flex gap-6 flex-col">
          {products.map((e, i) => (
            <ProductCardLink key={i} data={e} />
          ))}
        </div>
      )}
    </>
  );
}
export default ProductLinks;
