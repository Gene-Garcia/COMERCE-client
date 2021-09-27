import React from "react";

function OrderedProducts() {
  return (
    <div className="flex flex-row gap-x-6 overflow-x-auto pb-5">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
export default OrderedProducts;

function ProductCard() {
  return (
    <div className="border border-gray-100 rounded-md">
      <div className="w-44 bg-gray-100 rounded-md mb-1">
        <img
          src="https://cdn.opstatics.com/store/20170907/assets/images/events/2021/03/watches/en/us/1920/kv/kv-1.png"
          alt="smart-watch"
          className="w-full object-contain p-2"
        />
      </div>

      <div className="px-3 py-2 flex flex-col gap-y-2">
        <p className="text-gray-600 font-medium">Samsung Fold</p>

        <p className="flex flex-row justify-between items-center">
          <span className="text-my-accent font-medium text-lg">P3,999.00</span>
          <span>x5</span>
        </p>
      </div>
    </div>
  );
}
