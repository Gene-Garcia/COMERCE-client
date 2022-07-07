import React, { useCallback } from "react";
import { batch, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../../../../redux/Alert/AlertAction";
import { formatPrice } from "../../../../../../../../../../../shared/utils/price";
import axios from "../../../../../../../../../../../shared/caller";
import {
  toggleProductModal,
  updateInformationModalProduct,
} from "../../../../../../../../../../../redux/Seller/ManageProduct/ManageProductAction";
import {
  Data,
  Row,
} from "../../../../../../../../../../../shared/Components/table/SpaciousTable";
import {
  Action,
  ActionGroup,
} from "../../../../../../../../../../../shared/Components/table/TableActions";

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

  return (
    <Row grid="grid-cols-14">
      <Data className="col-span-1 font-light text-xs break-all">
        {productId}
      </Data>
      <Data className="col-span-2">
        <img
          src={imageAddress}
          alt="product"
          className="w-12 lg:w-16 filter drop-shadow-md m-auto"
        />
      </Data>
      <Data className="col-span-3 font-medium text-black">{item}</Data>
      <Data className="col-span-2 text-my-accent font-semibold">
        ₱{formatPrice(retailPrice)}
      </Data>
      <Data className="col-span-2 text-my-accent">
        ₱{formatPrice(wholesalePrice)}
      </Data>
      <Data className="col-span-2 text-red-600">
        {inventory} <span className="text-sm">item(s)</span>
      </Data>
      <Data className="col-span-2">
        <ActionGroup>
          <Action
            type="BUTTON"
            text="Info"
            onClick={referenceToInformationModal}
          />
          <Action type="BUTTON" text="Edit" />
        </ActionGroup>
      </Data>
    </Row>
  );
}
export default ProductRow;
