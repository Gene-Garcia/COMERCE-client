import React, { useState } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  setWaybills,
  toggleAllOrderCheck,
  toggleModal,
  toggleOrderCheck,
} from "../../../../../../../../../../redux/Seller/PackOrders/PackOrdersActions";
import {
  dateDifference,
  formatDate,
} from "../../../../../../../../../../shared/utils/date";
import axios from "../../../../../../../../../../shared/caller";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../../../redux/Alert/AlertAction";
import SpaciousTable, {
  Body,
  Data,
  Head,
  Heading,
  Row,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";
import CompactTable, {
  Body as CTBody,
  Data as CTData,
  Head as CTHead,
  Heading as CTHeading,
  Row as CTRow,
} from "../../../../../../../../../../shared/Components/table/CompactTable";
import {
  Action,
  ActionGroup,
} from "../../../../../../../../../../shared/Components/table/TableActions";

const PackOrderTable = () => {
  // redux
  const dispatch = useDispatch();

  const onCheckboxChange = (e) => {
    dispatch(toggleAllOrderCheck(e.target.checked));
  };

  // return (
  //   <table className="bg-my-white-tint w-full rounded min-w-rr60">
  //     <HeaderRow />

  //     <tbody>
  //       <RenderPackOrders />
  //     </tbody>
  //   </table>
  // );

  return (
    <SpaciousTable>
      <Head grid="grid-cols-12">
        <Heading className="col-span-1 text-center">
          <input type="checkbox" onChange={onCheckboxChange} />
        </Heading>
        <Heading className="col-span-1">Order ID</Heading>
        <Heading className="col-span-3">Items</Heading>
        <Heading className="col-span-2">Customer</Heading>
        <Heading className="col-span-1">Order Date</Heading>
        <Heading className="col-span-1">Standard ETA</Heading>
        <Heading className="col-span-2">Day(s) remaining</Heading>
        <Heading className="col-span-1">Actions</Heading>
      </Head>

      <Body>
        <RenderPackOrders />
      </Body>
    </SpaciousTable>
  );
};

const RenderPackOrders = () => {
  // redux pack orders
  const orders = useSelector((s) => s.PACK_ORDERS.orders);

  return orders.map((order) => <OrderPackRow key={order._id} order={order} />);
};

const OrderPackRow = ({ order }) => {
  // destructure order
  const {
    _id: orderId,
    orderDate,
    ETADate,
    shipmentDetails: { firstName, lastName },
    orderedProducts: orders,
    checked,
  } = order;

  // date difference
  const [diff, status] = dateDifference(new Date(), ETADate);

  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  const OpenWaybillModal = async () => {
    dispatch(toggleModal(true));

    // build products paramaters, separated by
    const productIds = orders.map((order) => order._product._id).join("+");

    await axios
      .get(
        `/api/logistics/waybill/seller/order/${orderId}/products/${productIds}`
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch(
            setWaybills({
              orders: [...res.data.waybillOrders],
              business: res.data.business,
            })
          );
        } else {
          dispatch(toggleModal(false));
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
            dispatch(toggleModal(false));
          });
        else if (err.response.status === 401) history.push("/unauthorized");
        else if (err.response.status === 403) history.push("/forbidden");
        else
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(setMessage(err.response.data.error));
            dispatch(toggleModal(false));
          });
      });
  };

  const onCheckboxChange = (e) => {
    dispatch(toggleOrderCheck(orderId, e.target.checked));
  };

  return (
    <Row grid="grid-cols-12">
      <Data className="col-span-1 text-center">
        <input type="checkbox" onChange={onCheckboxChange} checked={checked} />
      </Data>
      <Data className="col-span-1 text-xs font-light break-all">{orderId}</Data>
      <Data className="col-span-3">
        <OrderedProductsTable orderedProducts={orders} />
      </Data>
      <Data className="col-span-2 break-words">
        {`${firstName} ${lastName}`}
      </Data>
      <Data className="col-span-1 break-words">{formatDate(orderDate, 1)}</Data>
      <Data className="col-span-1 break-words">{formatDate(ETADate, 1)}</Data>
      <Data className="col-span-2"> {`${status} ${diff} day(s)`}</Data>
      <Data className="col-span-1">
        <ActionGroup>
          <Action type="BUTTON" text="Print Bill" onClick={OpenWaybillModal} />
        </ActionGroup>
      </Data>
    </Row>
  );
};

export default PackOrderTable;
export { OrderPackRow };

const OrderedProductsTable = ({ orderedProducts }) => {
  // state to collapse ordered product table
  const [collapse, setCollapse] = useState(false);

  return !collapse ? (
    <button
      onClick={() => setCollapse(true)}
      className="font-medium text-sm text-gray-600 bg-gray-300 rounded px-4 py-1
      transition duration-200 ease-linear
      hover:bg-gray-400 hover:text-white
      active:ring-2 active:ring-gray-300 active:ring-offset-2 active:ring-offset-my-white-tone"
    >
      Show Products
    </button>
  ) : (
    <>
      {/* close button */}
      <div className="text-right">
        <button
          onClick={() => setCollapse(false)}
          className="py-1 px-1.5 bg-my-white-tone rounded 
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
        <CTHead grid="grid-cols-3">
          <CTHeading className="col-span-2">Name</CTHeading>
          <CTHeading className="col-span-1">Quantity</CTHeading>
        </CTHead>

        <CTBody>
          {orderedProducts.map((product) => (
            <CTRow grid="grid-cols-3">
              <CTData className="col-span-2 text-sm break-words">
                {product._product.item}
              </CTData>
              <CTData className="col-span-1 text-sm break-words">
                {product.quantity} pcs
              </CTData>
            </CTRow>
          ))}
        </CTBody>
      </CompactTable>
    </>
  );
};
