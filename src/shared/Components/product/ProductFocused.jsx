import React from "react";
import {
  ProductDescription,
  ProductName,
  ProductPrice,
  ProductPurchase,
  ProductRating,
} from "./ProductComponents";

function ProductFocused() {
  return (
    <div className="flex shadow-xl rounded-xl">
      {/* image */}
      <div className="w-2/5">
        <img
          src="https://cdn.opstatics.com/store/20170907/assets/images/events/2021/03/watches/en/us/1920/kv/kv-1.png"
          alt="smart-watch"
          className="w-full"
        />
      </div>

      {/* content */}
      <div className="px-12 flex justify-around flex-col">
        <div>
          <ProductName name="Smart Watch" />
          <ProductPrice price="13,999.99" />
        </div>

        <ProductDescription desc="Lorem ipsum dolor et al es c" />

        <ProductRating />

        <ProductPurchase />
      </div>
    </div>
  );
}
export default ProductFocused;
