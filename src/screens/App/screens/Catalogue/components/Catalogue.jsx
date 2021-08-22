import React from "react";
import ProductSmall from "../../../../../shared/Components/product/Product.Small";

function Button({ name }) {
  return (
    <button className="w-36 text-left px-2 py-1 font-medium text-gray-700 rounded-md hover:bg-gray-200    ">
      {name}
    </button>
  );
}

function Catalogue() {
  return (
    <>
      <div className="h-20 shadow-md bg-gradient-to-t from-my-accent to-my-accent-mono flex items-center justify-center">
        <span className="font-sans font-semibold text-my-contrast text-xl">
          Product Catalogue
        </span>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap my-12 mx-3 lg:mx-10 xl:mx-16 2xl:mx-28 gap-y-5 sm:gap-y-0">
        <div className="w-full sm:w-52 flex flex-wrap flex-row sm:flex-col gap-y-10 justify-center sm:justify-start">
          <div className="flex flex-col gap-y-1">
            <span className="text-sm font-semibold text-gray-400">
              Product View
            </span>
            <Button name="Grid View" />
            <Button name="Board View" />
          </div>

          <div className="flex flex-col gap-y-1">
            <span className="text-sm font-semibold text-gray-400">Sort By</span>
            <Button name="All-time Sales" />
            <Button name="Product Rating" />
          </div>

          <div className="flex flex-col gap-y-1">
            <span className="text-sm font-semibold text-gray-400">
              Order by
            </span>
            <Button name="Highest Price" />
            <Button name="Lowest Price" />
          </div>

          <div className="flex flex-col gap-y-1">
            <span className="text-sm font-semibold text-gray-400">
              Price Range
            </span>
            <Button name="Coming Soon..." />
          </div>

          <div className="flex flex-col gap-y-1">
            <span className="text-sm font-semibold text-gray-400">
              Product Category
            </span>
            <Button name="Coming Soon..." />
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex flex-col items-center  sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-14">
            <ProductSmall />
            <ProductSmall />
            <ProductSmall />
            <ProductSmall />
            <ProductSmall />
            <ProductSmall />
            <ProductSmall />
            <ProductSmall />
            <ProductSmall />
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalogue;