import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkAllOrders,
  checkThisOrder,
} from "../../../../../../../../../../redux/Seller/ShipOrders/ShopOrdersAction";
import { methods } from "../../../../../../../../../../shared/utils/payment";
import { formatPrice } from "../../../../../../../../../../shared/utils/price";

const OrderTable = () => {
  return (
    <div className="bg-my-white-tint rounded-lg shadow-sm p-3  overflow-x-auto">
      <div className="flex flex-col gap-2.5 min-w-rr60">
        <HeaderRow />
        <OrderRows />
      </div>
    </div>
  );
};
export default OrderTable;

const HeaderRow = () => {
  // redux
  const dispatch = useDispatch();

  const onCheckboxChange = (e) => {
    dispatch(checkAllOrders(e.target.checked));
  };

  return (
    <div className="flex inline-flex justify-between w-full font-semibold text-sm text-gray-400 border-b pb-1.5">
      <div className="w-five xl:w-three flex items-center justify-center">
        <input
          type="checkbox"
          className="h-4 w-4"
          onChange={onCheckboxChange}
        />
      </div>

      <div className="w-seven xl:w-five flex items-center justify-center">
        Order ID
      </div>

      <div className="w-1/2 flex items-center">
        <div className="w-full inline-flex  justify-center text-center">
          <div className="w-1/2">Name</div>
          <div className="w-1/5">Qty</div>
          <div className="w-thirty">Unit Price</div>
        </div>
      </div>

      <div className="w-1/5 text-center">
        Barangay | <i>Municipality</i> | <u>Province</u>
      </div>

      <div className="w-fifteen flex items-center justify-center">
        Mode of Payment
      </div>

      <div className="w-fifteen flex items-center justify-center">Actions</div>
    </div>
  );
};

const OrderRows = () => {
  // redux ship orders reducer & state
  const orders = useSelector((state) => state.SHIP_ORDERS.pendingOrders);

  return orders.map((order) => <RowData key={order._id} order={order} />);
};

const RowData = ({ order }) => {
  // redux
  const dispatch = useDispatch();

  const onCheckboxChange = (e) => {
    dispatch(checkThisOrder(order._id, e.target.checked));
  };

  return (
    <div
      className={`flex flex-row w-full
      rounded py-2
      odd:bg-gray-100`}
    >
      <div className="w-five xl:w-three flex items-center justify-center">
        <input
          type="checkbox"
          checked={order.checked}
          onChange={onCheckboxChange}
        />
      </div>

      <div className="w-seven xl:w-five p-1 m-auto text-xs font-light text-black break-all">
        {order._id}
      </div>

      <div className="w-1/2 p-1 flex flex-col justify-center">
        {order.orderedProducts.map((product) => (
          <>
            <div
              key={product._id}
              className="inline-flex items-center text-center py-0.5"
            >
              <div className="font-medium text-gray-600 w-1/2">
                {product._product.item}
              </div>
              <div className="w-1/5">{product.quantity} pcs</div>
              <div className="text-sm text-my-accent w-thirty">
                ₱{formatPrice(product.priceAtPoint)}
              </div>
              {/* <span>₱{formatPrice(product.quantity * product.priceAtPoint)}</span> */}
            </div>
            <div className="border-b border-gray-400 border-opacity-30 w-4/5 m-auto"></div>
          </>
        ))}
      </div>

      <div className="w-1/5 p-1 text-center m-auto">
        {order.shipmentDetails.barangay},{" "}
        <i>{order.shipmentDetails.cityMunicipality}</i>,{" "}
        <u>{order.shipmentDetails.province}</u>
        {/* {`${order.shipmentDetails.barangay}, ${order.shipmentDetails.cityMunicipality}, ${order.shipmentDetails.province}`} */}
      </div>

      <div className="w-fifteen p-1 m-auto text-gray-400 text-base text-center">
        {methods[order.paymentMethod]}
      </div>

      <div className="w-fifteen p-1 m-auto">
        <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
          <button
            className={`w-min bg-gray-200 rounded-full px-4 py-1
        text-sm font-semibold text-gray-600
        transition duration-200 ease-linear
        hover:ring-2 hover:ring-offset-2 hover:ring-gray-300
        active:ring-offset-0 active:ring active:ring-gray-300 active:ring-opacity-30`}
          >
            INFO
          </button>

          <button
            className={`w-min bg-gray-200 rounded-full px-4 py-1
        text-sm font-semibold text-gray-600
        transition duration-200 ease-linear
        hover:ring-2 hover:ring-offset-2 hover:ring-gray-300
        active:ring-offset-0 active:ring active:ring-gray-300 active:ring-opacity-30`}
          >
            SHIP
          </button>
        </div>
      </div>
    </div>
  );
};
