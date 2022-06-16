import React from "react";
import { useSelector } from "react-redux";
import {
  dateDifference,
  formatDate,
} from "../../../../../../../../../../shared/utils/date";

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

  return orders.map((order) => <OrderPackRow order={order} />);
};

const HeaderRow = () => {
  const headerClass = "py-3 px-2";

  return (
    <thead className="font-semibold text-sm text-gray-400">
      <tr className="text-center">
        <th className={`${headerClass}`}>
          <input type="checkbox" />
        </th>
        <th className={`${headerClass} w-seven`}>Order ID</th>
        {/*  this is for the item name and qty */}
        <th className={`${headerClass}`}>
          <div className="inline-flex gap-2 w-full justify-center items-center">
            <p>Item Name</p>
            <p>Quantity</p>
          </div>
        </th>
        <th className={`${headerClass}`}>Customer Name</th>
        <th className={`${headerClass}`}>Order Date</th>
        <th className={`${headerClass}`}>Standard ETA</th>
        <th className={`${headerClass}`}>Day(s) remaining</th>
        <th className={`${headerClass}`}>Actions</th>
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
  } = order;

  const dataClass = "p-2";

  // date difference
  const [diff, status] = dateDifference(new Date(), ETADate);

  return (
    <tr>
      <td className={`text-center ${dataClass}`}>
        <input type="checkbox" />
      </td>

      <td className={`${dataClass} font-light break-all text-xs`}>{orderId}</td>

      <td className={`text-center ${dataClass}`}>
        <>
          {orders.map((od) => (
            <div className="inline-flex gap-1.5 w-full justify-center items-center">
              <p className="font-medium text-gray-700">{od._product.item},</p>
              <p className="font-medium text-my-accent text-md">
                {od.quantity}x
              </p>
            </div>
          ))}
        </>
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
        className={`${dataClass} text-gray-700 font-medium text-md text-center`}
      >
        {`${status} ${diff} day(s)`}
      </td>

      <td className={`${dataClass} text-center`}>
        <button
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
