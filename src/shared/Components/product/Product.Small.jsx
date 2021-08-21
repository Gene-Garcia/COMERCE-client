import React from "react";
import {
  ProductDescription,
  ProductName,
  ProductPrice,
  ProductPurchase,
  ProductRating,
} from "./Product.Components";

function ProductSmall() {
  return (
    <div className="flex flex-col min-w-1/5 rounded-md shadow-md">
      {/* image */}
      <div className="">
        <img
          src="https://cdn.opstatics.com/store/20170907/assets/images/events/2021/03/watches/en/us/1920/kv/kv-1.png"
          alt="smart-watch"
          className="w-full h-56 object-cover"
        />
      </div>

      {/* details and desc */}
      <div className="p-4 flex flex-col justify-evenly gap-y-7">
        <div className="flex justify-between">
          <ProductName name="smartwatch" />
          <ProductPrice price="13,999.99" />
        </div>

        <div>
          <ProductRating />
        </div>

        <div>
          <ProductDescription desc="Lorem ipsum dolor er ase" />
        </div>

        <div>
          <ProductPurchase />
        </div>
      </div>
    </div>
  );
}
export default ProductSmall;
