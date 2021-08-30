import React from "react";
import {
  ProductDescription,
  ProductPrice,
  ProductPurchase,
  ProductRating,
} from "../../../../../../../shared/Components/product/ProductComponents";

function Showcase(props) {
  console.log(props);
  return (
    <>
      <div className="h-3/5 bg-gradient-to-b from-my-accent">
        <h1 className="text-4xl font-semibold text-my-contrast text-center font-sans pt-12">
          Smart Watch
        </h1>
      </div>

      <div className="flex container mx-auto gap-x-12 -mt-106 mb-16 ">
        {/* image */}
        <div className="w-3/5">
          <img
            src="https://img.endgamegear.com/products/xm1-rgb/2"
            alt="smart-watch"
            className=""
          />
        </div>

        {/* content */}
        <div className="w-2/5 bg-white rounded-lg shadow-lg p-16 flex flex-col gap-y-20">
          {/* buy now */}
          <div>
            <p className="text-gray-500 font-medium text-xl">
              Buy now for only
            </p>
            <ProductPrice price="13,999.99" size="extralarge" />
            <br />
            <ProductPurchase size="extralarge" />
          </div>

          {/* rating */}
          <div>
            <ProductRating size="extralarge" />
          </div>

          {/* desc */}
          <div>
            <ProductDescription desc="lorem upsum" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Showcase;
