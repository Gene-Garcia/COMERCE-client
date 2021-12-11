import React from "react";

function ProductHeadings() {
  const theme = "font-medium text-gray-400 text-base";
  return (
    <tr className="px-20 w-full flex flex-row justify-between items-center">
      <td className="w-five flex justify-center">
        <button className="h-4 w-4 bg-gray-400"></button>
      </td>

      <td className={`w-fifteen flex justify-center ${theme}`}>
        Product Image
      </td>

      <td className={`w-ten flex justify-center ${theme}`}>ID</td>

      <td className={`w-1/4 flex justify-center ${theme}`}>Product Name</td>

      <td className={`w-fifteen flex justify-center ${theme}`}>Price</td>

      <td className={`w-ten flex justify-center ${theme}`}>Total Stock</td>

      <td className={`w-1/5 flex justify-center ${theme}`}>Actions</td>
    </tr>
  );
}
export default ProductHeadings;
