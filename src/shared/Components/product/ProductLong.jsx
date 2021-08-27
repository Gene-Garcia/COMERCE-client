import React from "react";
import {
  ProductDescription,
  ProductName,
  ProductPrice,
  ProductPurchase,
  ProductRating,
} from "./ProductComponents";

function ProductLong() {
  return (
    <div className="flex shadow-lg rounded-lg w-4/5">
      {/* Image */}
      <div className="w-1/5">
        <img
          src="https://cdn.opstatics.com/store/20170907/assets/images/events/2021/03/watches/en/us/1920/kv/kv-1.png"
          alt="smart-watch"
          className="w-full"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-around flex-grow px-10 py-2">
        {/* top: name, price, and rate */}
        <div className="flex justify-between">
          <div>
            <ProductName name="Smart Watch" />
            <ProductPrice price="13,999.99" />
          </div>

          <div>
            <ProductRating />
          </div>
        </div>

        {/* middle */}
        <div>
          <ProductDescription desc="lorem ipsum et al" />
        </div>

        {/* bottom */}
        <div>
          <ProductPurchase />
        </div>
      </div>
    </div>
  );
}
export default ProductLong;
