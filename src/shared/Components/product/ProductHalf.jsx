import React from "react";
import {
  ProductDescription,
  ProductName,
  ProductPrice,
  ProductPurchase,
  ProductRating,
} from "./Product.Components";

function ProductHalf() {
  return (
    <div className="rounded-lg shadow-lg w-2/6 flex flex-col ">
      {/* top: image and product details */}
      <div className="flex gap-x-4">
        {/* image */}
        <div className="w-1/5 flex-grow">
          <img
            src="https://cdn.opstatics.com/store/20170907/assets/images/events/2021/03/watches/en/us/1920/kv/kv-1.png"
            alt="smart-watch"
            className="w-full"
          />
        </div>

        {/* details */}
        <div className="flex-grow flex flex-col justify-around px-6">
          <div>
            <ProductName name="Smart Watch" />
            <ProductPrice price="13,999.99" />
          </div>

          <div>
            <ProductRating />
          </div>

          <div>
            <ProductPurchase />
          </div>
        </div>
      </div>

      {/* product desc */}
      <div className="py-8 px-16">
        <ProductDescription desc="lorem ipsum et al" />
      </div>
    </div>
  );
}
export default ProductHalf;
