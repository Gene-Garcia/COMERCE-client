import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleAllOrderCheck,
  toggleModal,
  toggleOrderCheck,
} from "../../../../../../../../../../redux/Seller/PackOrders/PackOrdersActions";
import {
  dateDifference,
  formatDate,
} from "../../../../../../../../../../shared/utils/date";
import axios from "../../../../../../../../../../shared/caller";

const PackOrderTable = () => {
  return (
    <table className="bg-my-white-tint w-full rounded min-w-rr60">
      <HeaderRow />

      <tbody>
        <RenderPackOrders />
      </tbody>
    </table>
  );
};

const RenderPackOrders = () => {
  // redux pack orders
  const orders = useSelector((s) => s.PACK_ORDERS.orders);

  return orders.map((order) => <OrderPackRow key={order._id} order={order} />);
};

const HeaderRow = () => {
  const headerClass = "py-3 px-2";

  // redux
  const dispatch = useDispatch();

  const onCheckboxChange = (e) => {
    dispatch(toggleAllOrderCheck(e.target.checked));
  };

  return (
    <thead className="font-semibold text-sm text-gray-400">
      <tr className="text-left">
        <th className={`${headerClass} text-center`}>
          <input type="checkbox" onChange={onCheckboxChange} />
        </th>
        <th className={`${headerClass} w-seven text-center`}>Order ID</th>
        {/*  this is for the item name and qty */}
        <th className={`${headerClass}`}>
          <div className="inline-flex gap-2 w-full items-center">
            <p className="w-3/4">Item Name</p>
            <p className="w-1/4">Quantity</p>
          </div>
        </th>
        <th className={`${headerClass}`}>Customer Name</th>
        <th className={`${headerClass}`}>Order Date</th>
        <th className={`${headerClass}`}>Standard ETA</th>
        <th className={`${headerClass} text-center`}>Day(s) remaining</th>
        <th className={`${headerClass} text-center min-w-32`}>Actions</th>
      </tr>
    </thead>
  );
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

  const dataClass = "p-2";

  // date difference
  const [diff, status] = dateDifference(new Date(), ETADate);

  // redux
  const dispatch = useDispatch();

  const onCheckboxChange = (e) => {
    dispatch(toggleOrderCheck(orderId, e.target.checked));
  };

  const OpenWaybillModal = async () => {
    dispatch(toggleModal(true));
  };

  return (
    <tr>
      <td className={`text-center ${dataClass}`}>
        <input type="checkbox" onChange={onCheckboxChange} checked={checked} />
      </td>

      <td className={`${dataClass} font-light break-all text-xs`}>{orderId}</td>

      <td className={`${dataClass} `}>
        <div className="grid grid-cols-1 divide-y divide-gray-300">
          {orders.map((od, i) => (
            <div
              key={i}
              className="inline-flex gap-1.5 w-full justify-center items-center"
            >
              <p className="w-3/4 font-medium text-gray-700 break-words">
                {od._product.item}
              </p>
              <p className="w-1/4 font-medium text-my-accent text-md">
                {od.quantity}x
              </p>
            </div>
          ))}
        </div>
      </td>

      <td className={`${dataClass} text-gray-900 break-words`}>
        {`${firstName} ${lastName}`}
      </td>

      <td className={`${dataClass} text-gray-500 break-words`}>
        {formatDate(orderDate, 1)}
      </td>

      <td className={`${dataClass} text-gray-500 break-words`}>
        {formatDate(ETADate, 1)}
      </td>

      <td
        className={`${dataClass} break-words text-gray-700 font-medium text-center`}
      >
        {`${status} ${diff} day(s)`}
      </td>

      <td className={`${dataClass} text-center`}>
        <button
          onClick={OpenWaybillModal}
          className="uppercase bg-gray-300 text-gray-700 font-semibold text-sm 
          px-4 py-1.5 rounded-full bg-opacity-75
          transition duration-200 ease-linear
          hover:ring-2 hover:ring-offset-2 hover:ring-gray-300
          active:ring-offset-0 active:ring active:ring-gray-300 active:ring-opacity-30"
        >
          Print Bill
        </button>
      </td>
    </tr>
  );
};

export default PackOrderTable;
export { HeaderRow, OrderPackRow };
