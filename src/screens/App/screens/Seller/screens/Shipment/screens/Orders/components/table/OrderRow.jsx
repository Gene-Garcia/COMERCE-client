import React, { useState } from "react";
import { batch, useDispatch } from "react-redux";
import {
  checkThisOrder,
  togglePageLoading,
  toggleReload,
} from "../../../../../../../../../../redux/Seller/ShipOrders/ShipOrdersAction";
import { formatPrice } from "../../../../../../../../../../shared/utils/price";
import axios from "../../../../../../../../../../shared/caller";
import { setMessages } from "../../../../../../../../../../redux/Alert/AlertAction";
import { useHistory } from "react-router-dom";
import {
  Data,
  Row,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";
import {
  Action,
  ActionGroup,
} from "../../../../../../../../../../shared/Components/table/TableActions";
import CompactTable, {
  Body as CTBody,
  Data as CTData,
  Head as CTHead,
  Heading as CTHeading,
  Row as CTRow,
} from "../../../../../../../../../../shared/Components/table/CompactTable";
import DesignedPayment from "../../../../../../../../../../shared/Components/payment/DesignedPayment";
import {
  setModalOrderId,
  toggleModalLoading,
  toggleOrderModal,
} from "../../../../../../../../../../redux/OrderModal/OrderModalAction";

const OrderRow = ({ order }) => {
  // history
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  const onCheckboxChange = (e) => {
    dispatch(checkThisOrder(order._id, e.target.checked));
  };

  // toggle order modal
  async function openOrderModal() {
    batch(() => {
      dispatch(toggleModalLoading(true));
      dispatch(toggleOrderModal(true));
      dispatch(setModalOrderId(order._id));
    });
  }

  // API ship this order
  async function shipOrder() {
    // build data
    const data = {
      orderId: order._id,
      productIds: order.orderedProducts.map(
        (orderedProducts) => orderedProducts._product._id
      ),
    };

    await axios
      .patch("/api/seller/logistics/ship", { orders: [data] })
      .then((res) => {
        if (res.status === 201) {
          batch(() => {
            dispatch(setMessages(res.data.messages));
            dispatch(togglePageLoading(true));
            dispatch(toggleReload());
          });
        }
      })
      .catch((err) => {
        if (!err.response)
          dispatch(
            setMessages({
              message:
                "Something went wrong. Please refresh the page and try again.",
              severity: "error",
            })
          );
        else if (err.response.status === 401) history.push("/unauthorized");
        else if (err.response.status === 403) history.push("/forbidden");
        else
          dispatch(
            setMessages({
              message: err.response.data.error,
              severity: "error",
            })
          );
      });
  }

  return (
    <Row grid="grid-cols-12">
      <Data className="col-span-1 text-center">
        <input
          type="checkbox"
          checked={order.checked}
          onChange={onCheckboxChange}
        />
      </Data>
      <Data className="col-span-1 text-xs font-light break-all">
        {order._id}
      </Data>

      <Data className="col-span-4">
        <OrderedProductsTable orderedProducts={order.orderedProducts} />
      </Data>

      <Data className="col-span-2 break-words">
        {order.shipmentDetails.barangay},{" "}
        {order.shipmentDetails.cityMunicipality},{" "}
        {order.shipmentDetails.province}
      </Data>
      <Data className="col-span-2 break-words">
        {/* {methods[order.paymentMethod]} */}
        <DesignedPayment method={order.paymentMethod} />
      </Data>
      <Data className="col-span-2">
        <ActionGroup>
          <Action type="BUTTON" text="Details" onClick={openOrderModal} />
          <Action type="BUTTON" text="Ship" onClick={shipOrder} />
        </ActionGroup>
      </Data>
    </Row>
  );
};
export default OrderRow;

const OrderedProductsTable = ({ orderedProducts }) => {
  // state to collapse ordered product table
  const [collapse, setCollapse] = useState(false);

  return !collapse ? (
    <button
      onClick={() => setCollapse(true)}
      className="font-medium text-sm text-gray-600 bg-gray-300 rounded px-4 py-1
        transition duration-200 ease-linear
        hover:bg-gray-400 hover:text-white
        active:ring-2 active:ring-gray-300 active:ring-offset-2 active:ring-offset-white-tone"
    >
      Show Products
    </button>
  ) : (
    <>
      {/* close button */}
      <div className="text-right">
        <button
          onClick={() => setCollapse(false)}
          className="py-1 px-1.5 bg-white-tone rounded 
            inline-flex gap-1 items-center 
            text-xs font-medium text-black
            transition duration-200 ease-linear
            hover:shadow-md hover:bg-gray-200
            active:bg-red-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          CLOSE
        </button>
      </div>

      <CompactTable elevate="rounded shadow-sm">
        <CTHead grid="grid-cols-4">
          <CTHeading className="col-span-2">Name</CTHeading>
          <CTHeading className="col-span-1">Quantity</CTHeading>
          <CTHeading className="col-span-1">Price At Point</CTHeading>
        </CTHead>

        <CTBody>
          {orderedProducts.map((product) => (
            <CTRow grid="grid-cols-4">
              <CTData className="col-span-2 text-sm break-words">
                {product._product.item}
              </CTData>
              <CTData className="col-span-1 text-sm break-words">
                {product.quantity} pcs
              </CTData>
              <CTData className="col-span-1 text-sm break-words">
                ₱{formatPrice(product.priceAtPoint)}
              </CTData>
            </CTRow>
          ))}
        </CTBody>
      </CompactTable>
    </>
  );
};
