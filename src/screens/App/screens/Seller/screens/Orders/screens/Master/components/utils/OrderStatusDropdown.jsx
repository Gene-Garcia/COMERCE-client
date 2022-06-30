import React from "react";
import { batch, useDispatch } from "react-redux";
import {
  updateOrderQueryStatus,
  updatePageLoading,
} from "../../../../../../../../../../redux/Seller/OrdersMaster/OrdersMasterAction";
import orderStatuses from "../../../../../../../../../../shared/utils/orderStatuses";

const OrderStatusDropdown = () => {
  // redux
  const dispatch = useDispatch();

  const orderStatusChange = (e) => {
    e.preventDefault();

    const statusId = e.target.value;

    batch(() => {
      dispatch(updatePageLoading(true));
      dispatch(updateOrderQueryStatus(statusId));
    });
  };

  return (
    <div>
      <label
        for="select-parent"
        className="text-sm font-semibold text-gray-400 uppercase"
      >
        Order Status
      </label>

      <div
        id="select-parent"
        className="w-max bg-my-white-tint rounded shadow p-1.5
                 transition duration-200 ease-linear
                 border border-transparent
                 focus-within:border-my-accent
                 hover:shadow-md"
      >
        <select
          onChange={orderStatusChange}
          className="w-full bg-transparent
                 text-sm font-medium text-gray-700
                 focus:outline-none"
        >
          {Object.entries(orderStatuses).map(([k, v]) => (
            <option key={k} value={k}>
              {v}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default OrderStatusDropdown;
