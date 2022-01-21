import React from "react";
import { methods } from "../../../../../../../../../../shared/utils/payment";
import { formatPrice } from "../../../../../../../../../../shared/utils/price";

const OrderTable = ({ orders }) => {
  return (
    <div className="bg-my-white-tint rounded-lg shadow-sm p-3">
      <table className="w-full">
        <HeaderRow />
        <OrderRows orders={orders} />
      </table>
    </div>
  );
};
export default OrderTable;

const HeaderRow = () => {
  return (
    <thead className="">
      <tr className={`font-semibold text-sm text-gray-500`}>
        <td>
          <button className="h-4 w-4 rounded-sm bg-gray-100 border border-gray-500"></button>
        </td>

        <td>Order ID</td>

        <td>Item</td>

        <td>Delivery Address</td>

        <td>Mode of Payment</td>

        <td>Actions</td>
      </tr>
    </thead>
  );
};

const OrderRows = ({ orders }) => {
  return (
    <tbody>
      {orders.map((order, i) => (
        <RowData key={i} order={order} />
      ))}
    </tbody>
  );
};

const RowData = ({ order }) => {
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>

      <td className={` text-sm font-light text-black break-all`}>
        {order._id}
      </td>

      <td>
        {order.orderedProducts.map((product, i) => (
          <p>
            <span>{product._product.item}</span>
            <span>{product.quantity}</span>
            <span>₱{formatPrice(product.quantity * product.priceAtPoint)}</span>
          </p>
        ))}
      </td>

      <td className={` text-sm`}>
        <p className="">
          <span>{order.shipmentDetails.province}</span>
          <span>{order.shipmentDetails.cityMunicipality}</span>
          <span>{order.shipmentDetails.barangay}</span>
        </p>
      </td>

      <td className={` font-medium text-gray-700 text-base`}>
        {methods[order.paymentMethod]}
      </td>

      <td>
        <button
          className={`bg-gray-200 rounded-full px-4 py-1
        text-sm font-semibold text-gray-700
        transition duration-200 ease-linear
        hover:ring-2 hover:ring-offset-2 hover:ring-gray-300
        active:ring-offset-0 active:ring active:ring-gray-300 active:ring-opacity-30`}
        >
          INFO
        </button>
      </td>
    </tr>
  );
};
