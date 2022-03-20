import React from "react";

function ProductHeadings() {
  const theme =
    "px-3 pb-6 xs:pb-10 font-medium text-gray-400 text-sm text-center";

  return (
    <thead className="w-full">
      <tr>
        <th className={`${theme}`}>ID</th>

        <th className={`${theme}`}>Image</th>

        <th className={`${theme}`}>Product</th>

        <th className={`${theme}`}>Retail</th>

        <th className={`${theme}`}>Wholesale</th>

        <th className={`${theme}`}>Onhand</th>

        <th className={`${theme}`}>Actions</th>
      </tr>
    </thead>
  );
}
export default ProductHeadings;
