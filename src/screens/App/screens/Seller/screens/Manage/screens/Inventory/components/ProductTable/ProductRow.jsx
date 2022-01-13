import React from "react";

function ProductHead() {
  const theme = "uppercase font-semibold text-sm text-gray-400";
  return (
    <div
      className="w-full flex flex-row items-center px-2 py-1
    border-b border-gray-200"
    >
      <td className={`w-ten text-center`}>
        <input type="checkbox" className="w-4 h-4" />
      </td>

      <td className={`w-1/5 ${theme} text-center`}>Image</td>
      <td className={`w-2/5 ${theme}`}>Item</td>
      <td className={`w-fifteen ${theme}`}>Onhand</td>
      <td className={`w-fifteen ${theme}`}>Inventory</td>
    </div>
  );
}

function ProductData({ data: { imageAddress, item, onHand, inventory } }) {
  const theme = "";

  return (
    <div className="py-1 w-full flex flex-row items-center">
      <td className={`w-ten text-center`}>
        <input type="checkbox" />
      </td>

      <td
        className={`w-1/5 ${theme} flex items-center justify-center items-center`}
      >
        <img alt="product" src={imageAddress} className="w-14 object-contain" />
      </td>
      <td
        className={`w-2/5 ${theme} break-words font-medium text-md text-black`}
      >
        {item}
      </td>
      <td className={`w-fifteen ${theme} font-medium text-my-accent`}>
        {onHand}
      </td>
      <td className={`w-fifteen ${theme} text-gray-900`}>{inventory}</td>
    </div>
  );
}

export { ProductHead, ProductData };
