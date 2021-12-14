import React from "react";
import { formatPrice } from "../../../../../../../../../../../shared/utils/price";
import ProductAction from "./ProductActions";

function ProductRow({ data }) {
  console.log(data);
  const {
    imageAddress,
    inventory,
    item,
    retailPrice,
    wholesalePrice,
    _id: productId,
  } = data;

  const theme = "flex justify-center items-center";

  return (
    <tr className="px-20 py-4 bg-my-white-tint rounded-2xl flex flex-row justify-between">
      <td className={`w-five ${theme}`}>
        <input
          type="checkbox"
          name=""
          className="h-4 w-4 border-4 border-my-accent "
        />
      </td>

      <td className={`w-fifteen ${theme}`}>
        <img
          src={imageAddress}
          alt="product"
          className="w-16 filter drop-shadow-md"
        />
      </td>

      <td className={`w-ten ${theme} text-xs text-black break-all`}>
        {productId}
      </td>

      <td className={`w-1/4 ${theme} font-medium text-md break-words`}>
        {item}
      </td>

      <td className={`w-fifteen ${theme} text-my-accent font-medium text-md`}>
        {formatPrice(retailPrice)}
      </td>

      <td className={`w-ten ${theme} text-red-600 font-medium text-md`}>
        {inventory}
      </td>

      <td className={`w-1/5 ${theme} flex-col gap-y-2`}>
        <ProductAction
          title="INFO"
          svgD="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          color="text-black bg-my-white-tone"
          effect="hover:bg-gray-200 active:ring-2 active:ring-gray-200 active:ring-offset-2"
        />
        <ProductAction
          title="EDIT"
          svgD="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          color="text-black bg-my-white-tone"
          effect="hover:bg-gray-200 active:ring-2 active:ring-gray-200 active:ring-offset-2"
        />
      </td>
    </tr>
  );
}
export default ProductRow;
