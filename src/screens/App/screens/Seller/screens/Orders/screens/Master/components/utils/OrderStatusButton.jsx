import React from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import {
  updateOrderQueryStatus,
  updatePageLoading,
} from "../../../../../../../../../../redux/Seller/OrdersMaster/OrdersMasterAction";
import orderStatuses from "../../../../../../../../../../shared/utils/orderStatuses";

const OrderStatusButton = () => {
  // redux
  const dispatch = useDispatch();

  // redux orders master reducer & state
  const status = useSelector((state) => state.ORDERS_MASTER.status);

  const updateOrderStatusButton = (id) => {
    batch(() => {
      dispatch(updatePageLoading(true));
      dispatch(updateOrderQueryStatus(id));
    });
  };

  return (
    <div className="overflow-auto">
      <div className="px-4 py-2.5 flex flex-row gap-10">
        {Object.entries(orderStatuses).map(([k, v]) => (
          <Button
            key={k}
            onClick={updateOrderStatusButton}
            name={v}
            id={k}
            active={status === k}
          />
        ))}
      </div>
    </div>
  );
};
export default OrderStatusButton;

const Button = ({ active, onClick, name, id }) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={`${
        active
          ? "font-semibold text-gray-700 underline"
          : "font-medium text-gray-400"
      }
    transition duration-150 ease-linear
    hover:text-my-accent
    `}
    >
      {name[0].toUpperCase() + name.substring(1).toLowerCase()}
    </button>
  );
};
