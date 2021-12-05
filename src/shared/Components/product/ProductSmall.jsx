import React from "react";
import { Link } from "react-router-dom";
import {
  ProductDescription,
  ProductName,
  ProductPrice,
  ProductPurchase,
  ProductRating,
} from "./ProductComponents";

function ProductSmall({ data }) {
  const {
    _id: productId,
    item: productName,
    imageAddress,
    retailPrice,
    description,
    rating,
  } = data;

  const productLink = `/catalogue/item/${productId}`;

  return (
    <div className="flex flex-col w-72 xl:w-80 max-w-xs h-rr28 rounded-md shadow-lg">
      {/* image */}
      <Link
        to={productLink}
        className="h-52 w-full overflow-hidden bg-gray-100 flex items-center justify-center"
      >
        <img
          src={imageAddress}
          alt="smart-watch"
          className="p-2 w-4/5 h-full object-contain transition duration-300 ease-linear transform hover:scale-110 bg-gray-100"
        />
      </Link>

      {/* details and desc */}
      <div className="p-4 flex flex-col justify-between gap-7">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-x-2 justify-between">
            <ProductName name={productName} />
            <ProductPrice price={`${retailPrice}`} />
          </div>

          <div>
            <ProductRating rating={rating} />
          </div>
        </div>

        <div>
          <ProductDescription desc={description} />
        </div>

        <div>
          <ProductPurchase productId={productId} />
        </div>
      </div>
    </div>
  );
}
export default ProductSmall;
