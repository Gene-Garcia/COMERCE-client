import React from "react";

function ProductHeadings() {
  const theme =
    "font-medium text-gray-400 text-sm text-center flex justify-center items-center";
  return (
    <div
      className="md:px-0 lg:px-8 xl:px-12 2xl:px-20
    flex flex-row justify-between items-center
    w-rr50 md:w-full"
    >
      <div className="w-8 md:w-five flex justify-center">
        <button className="h-4 w-4 bg-gray-300"></button>
      </div>

      <div className={`w-20 md:w-fifteen ${theme}`}>Image</div>

      <div className={`w-20 md:w-ten ${theme}`}>ID</div>

      <div className={`w-32 md:w-1/4 ${theme}`}>Product Name</div>

      <div className={`w-20 md:w-fifteen ${theme}`}>Price (PHP)</div>

      <div className={`w-16 md:w-ten ${theme}`}>Onhand</div>

      <div className={`w-28 md:w-1/5 ${theme}`}>Actions</div>
    </div>
  );
}
export default ProductHeadings;
