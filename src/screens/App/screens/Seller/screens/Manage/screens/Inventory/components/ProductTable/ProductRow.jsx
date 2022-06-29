import React from "react";
import {
  Data,
  Row,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";

function ProductHead() {
  const theme = " uppercase font-semibold text-sm text-gray-400 text-left";
  return (
    <tr className="border-b border-gray-200">
      <th className={`${theme}`}>Image</th>
      <th className={`${theme}`}>Item</th>
      <th className={`${theme}`}>Onhand</th>
      <th className={`${theme}`}>Inventory</th>
    </tr>
  );
}

function ProductData({
  onClick,
  data: { imageAddress, item, onHand, inventory },
}) {
  const theme = "p-2 first:rounded-l-md last:rounded-r-md";

  return (
    <Row grid="grid-cols-5" onClick={onClick}>
      <Data className="col-span-1">
        <img
          alt="product"
          src={imageAddress}
          className="w-14 object-contain m-auto"
        />
      </Data>

      <Data className="col-span-2 break-words font-medium">{item}</Data>

      <Data className="col-span-1 text-my-accent">{onHand}</Data>

      <Data className="col-span-1 text-gray-700">{inventory}</Data>
    </Row>
  );

  return (
    <tr
      onClick={onClick}
      className={`h-20 w-full odd:bg-gray-100
      cursor-pointer
      transition duration-150 ease-linear
      hover:bg-gray-200`}
    >
      <td className={`${theme}`}>
        <img
          alt="product"
          src={imageAddress}
          className="w-14 object-contain m-auto"
        />
      </td>

      <td className={`${theme} break-words font-medium text-md text-black`}>
        {item}
      </td>

      <td className={`${theme} font-medium text-my-accent`}>{onHand}</td>

      <td className={`${theme} text-gray-900`}>{inventory}</td>
    </tr>
  );
}

export { ProductHead, ProductData };
