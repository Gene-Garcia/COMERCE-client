import React, { useCallback } from "react";
import { batch, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../../../../redux/Alert/AlertAction";
import { formatPrice } from "../../../../../../../../../../../shared/utils/price";
import ProductAction from "./ProductActions";
import axios from "../../../../../../../../../../../shared/caller";
import {
  toggleProductModal,
  updateInformationModalProduct,
} from "../../../../../../../../../../../redux/Seller/ManageProduct/ManageProductAction";

function ProductRow({ data }) {
  const {
    imageAddress,
    inventory,
    item,
    retailPrice,
    wholesalePrice,
    _id: productId,
  } = data;

  // history
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  const referenceToInformationModal = useCallback(() => {
    // make API call
    async function getProductForModal() {
      await axios
        .get(`/api/seller/product/${productId}`)
        .then((res) => {
          if (res.status === 200) {
            // dispatch to redux
            batch(() => {
              dispatch(updateInformationModalProduct(res.data.product));
              dispatch(toggleProductModal(true));
            });
          }
        })
        .catch((err) => {
          if (!err.response)
            batch(() => {
              dispatch(setSeverity("error"));
              dispatch(
                setMessage(
                  "Something went wrong. Please refresh your browser and try again."
                )
              );
            });
          else if (err.response.status === 403) history.push("/forbidden");
          else if (err.response.status === 401) history.push("/unauthorized");
          else
            batch(() => {
              dispatch(setSeverity("error"));
              dispatch(setMessage(err.response.data.error));
            });
        });
    }
    getProductForModal();
  }, [productId]);

  const theme = "p-3 first:rounded-l-xl last:rounded-r-xl";

  return (
    <tr className="bg-my-white-tint">
      <td className={`${theme} break-all font-light text-xs`}>{productId}</td>

      <td className={`${theme}`}>
        <img
          src={imageAddress}
          alt="product"
          className="w-12 lg:w-16 filter drop-shadow-md m-auto"
        />
      </td>

      <td className={`${theme} break-words font-medium text-gray-600`}>
        {item}
      </td>

      <td className={`${theme} text-my-accent font-semibold`}>
        ₱{formatPrice(retailPrice)}
      </td>

      <td className={`${theme} text-my-accent`}>
        ₱{formatPrice(wholesalePrice)}
      </td>

      <td className={`${theme} text-red-600 text-md`}>
        {inventory} <span className="text-sm">item(s)</span>
      </td>

      <td className={`${theme}`}>
        <div className=" flex flex-row flex-wrap gap-2 items-center justify-center">
          <ProductAction
            onClick={referenceToInformationModal}
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
        </div>
      </td>
    </tr>
  );

  return (
    <div
      className="md:px-0.5 lg:px-8 xl:px-12 2xl:px-20 py-2.5 md:py-4 
    bg-my-white-tint rounded-2xl flex flex-row justify-between
    "
    >
      <div className={`w-8 md:w-five ${theme}`}>
        <input
          type="checkbox"
          name=""
          className="h-4 w-4 border-4 border-my-accent "
        />
      </div>

      <div className={`w-20 md:w-fifteen ${theme}`}>
        <img
          src={imageAddress}
          alt="product"
          className="w-12 lg:w-16 filter drop-shadow-md"
        />
      </div>

      <div className={`w-20 md:w-ten ${theme} text-xs text-black break-all`}>
        {productId}
      </div>

      <div
        className={`w-32 md:w-1/4 ${theme} font-medium text-base lg:text-md break-words`}
      >
        {item}
      </div>

      <div
        className={`w-20 md:w-fifteen ${theme} text-my-accent font-medium text-sm lg:text-md`}
      >
        {formatPrice(retailPrice)}
      </div>

      <div
        className={`w-16 md:w-ten ${theme} text-red-600 font-medium text-sm lg:text-md`}
      >
        {inventory}
      </div>

      <div className={`w-28 md:w-1/5 ${theme} flex-col gap-y-1 lg:gap-y-2`}>
        <ProductAction
          onClick={referenceToInformationModal}
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
      </div>
    </div>
  );
}
export default ProductRow;
