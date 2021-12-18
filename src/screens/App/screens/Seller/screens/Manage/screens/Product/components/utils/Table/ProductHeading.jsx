import React from "react";

function ProductHeadings() {
  const theme =
    "font-medium text-gray-400 text-sm flex justify-center items-center";
  return (
    <tr className="md:px-0 lg:px-8 xl:px-12 2xl:px-20 w-full flex flex-row justify-between items-center">
      <td className="w-five flex justify-center">
        <button className="h-4 w-4 bg-gray-300"></button>
      </td>

      <td className={`w-fifteen ${theme}`}>Image</td>

      <td className={`w-ten ${theme}`}>ID</td>

      <td className={`w-1/4 ${theme}`}>Product Name</td>

      <td className={`w-fifteen ${theme}`}>Price (PHP)</td>

      <td className={`w-ten ${theme}`}>Onhand</td>

      <td className={`w-1/5 ${theme}`}>Actions</td>
    </tr>
  );
}
export default ProductHeadings;
