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
import {
  dateDifference,
  formatDate,
} from "../../../../../../../../../../shared/utils/date";

const OrderRow = ({
  order: {
    checked,
    _id,
    shipmentDetails: {
      barangay,
      cityMunicipality,
      province,
      firstName,
      lastName,
    },
    paymentMethod,
    orderedProducts,
    orderDate,
    ETADate,
  },
}) => {
  // history
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  const onCheckboxChange = (e) => {
    dispatch(checkThisOrder(_id, e.target.checked));
  };

  // toggle order modal
  const openOrderModal = () => {
    batch(() => {
      dispatch(toggleModalLoading(true));
      dispatch(toggleOrderModal(true));
      dispatch(setModalOrderId(_id));
    });
  };

  // API ship this order
  async function shipOrder() {
    // build data
    const data = {
      orderId: _id,
      productIds: orderedProducts.map(
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
    <Row grid="grid-cols-15">
      <Data className="col-span-1 text-center">
        <input type="checkbox" checked={checked} onChange={onCheckboxChange} />
      </Data>

      <Data className="col-span-1 text-xs font-light break-all">{_id}</Data>

      <Data className="col-span-3">{`${firstName} ${lastName}`}</Data>
      <Data className="col-span-2">{formatDate(orderDate)}</Data>
      <Data className="col-span-2">
        {dateDifference(orderDate, ETADate, true)}
      </Data>

      <Data className="col-span-2 break-words">
        {barangay}, {cityMunicipality}, {province}
      </Data>
      <Data className="col-span-2 break-words">
        {/* {methods[order.paymentMethod]} */}
        <DesignedPayment method={paymentMethod} />
      </Data>
      <Data className="col-span-2">
        <ActionGroup>
          <Action type="BUTTON" text="Details" onClick={openOrderModal} />
          <Action type="BUTTON" text="Ship Order" onClick={shipOrder} />
        </ActionGroup>
      </Data>
    </Row>
  );
};
export default OrderRow;
