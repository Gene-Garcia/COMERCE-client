import React from "react";
import {
  ProductDescription,
  ProductName,
  ProductPrice,
  ProductPurchase,
  ProductRating,
} from "./Product.Components";

function ProductSmall({ data }) {
  const {
    _id: productId,
    item: productName,
    imageAddress,
    retailPrice,
    description,
  } = data;

  return (
    <div className="flex flex-col w-full max-w-xs h-full rounded-md shadow-md">
      {/* image */}
      <div className="w-full">
        <img
          src={imageAddress}
          alt="smart-watch"
          className="w-full h-56 object-cover"
        />
      </div>

      {/* details and desc */}
      <div className="p-4 flex flex-col justify-evenly gap-y-7">
        <div className="flex flex-wrap justify-between">
          <ProductName name={productName} />
          <ProductPrice price={`${retailPrice}`} />
        </div>

        <div>
          <ProductRating />
        </div>

        <div>
          <ProductDescription desc={description} />
        </div>

        <div>
          <ProductPurchase />
        </div>
      </div>
    </div>
  );
}
export default ProductSmall;
