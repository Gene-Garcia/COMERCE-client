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
        <div className="flex gap-2.5 flex-col">
          {/* render only products that are not rated or rated === false */}
          {products.map(
            (e, i) => e.rated === false && <ProductCardLink key={i} data={e} />
          )}
        </div>
      )}
    </>
  );
}
export default ProductLinks;
