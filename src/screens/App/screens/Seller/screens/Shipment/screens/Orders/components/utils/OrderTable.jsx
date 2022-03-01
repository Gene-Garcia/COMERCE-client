import React from "react";
import { methods } from "../../../../../../../../../../shared/utils/payment";
import { formatPrice } from "../../../../../../../../../../shared/utils/price";

const OrderTable = ({ orders }) => {
  return (
    <div className="bg-my-white-tint rounded-lg shadow-sm p-3">
      <div className="flex flex-col gap-2.5">
        <HeaderRow />
        <OrderRows orders={orders} />
      </div>
    </div>
  );
};
export default OrderTable;

const HeaderRow = () => {
  return (
    <div className="flex inline-flex justify-between w-full font-semibold text-sm text-gray-400">
      <div className="w-five flex items-center justify-center">
        <input type="checkbox" className="h-4 w-4" />
      </div>

      <div className="w-eight flex items-center justify-center">Order ID</div>

      <div className="w-thirtyfive flex items-center">
        <div className="w-full inline-flex  justify-center text-center">
          <div className="w-1/2">Name</div>
          <div className="w-1/5">Qty</div>
          <div className="w-thirty">Unit Price</div>
        </div>
      </div>

      <div className="w-1/5 flex items-center">
        <div className="w-full inline-flex text-center justify-center">
          <div className="w-2/6">Province</div>
          <div className="w-2/6">Municipality</div>
          <div className="w-2/6">Barangay</div>
        </div>
      </div>

      <div className="w-fifteen flex items-center justify-center">
        Mode of Payment
      </div>

      <div className="w-fifteen flex items-center justify-center">Actions</div>
    </div>
  );
};

const OrderRows = ({ orders }) => {
  return orders.map((order) => <RowData key={order._id} order={order} />);
};

const RowData = ({ order }) => {
  return (
    <div
      className={`flex flex-row w-full
      rounded py-2.5
      odd:bg-gray-100`}
    >
      <div className="w-five flex items-center justify-center">
        <input type="checkbox" />
      </div>

      <div className="m-auto w-eight text-sm font-light text-black break-all">
        {order._id}
      </div>

      <div className="w-thirtyfive flex flex-col justify-center">
        {order.orderedProducts.map((product) => (
          <div
            key={product._id}
            className="inline-flex items-center text-center mx-3 border-b border-opacity-20 border-gray-500"
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
        ))}
      </div>

      <div className="w-1/5 m-auto">
        <div className="inline-flex text-center items-center w-full">
          <div className="w-2/6">{order.shipmentDetails.province}</div>
          <div className="w-2/6">{order.shipmentDetails.cityMunicipality}</div>
          <div className="w-2/6">{order.shipmentDetails.barangay}</div>
        </div>
      </div>

      <div className="w-fifteen m-auto text-gray-400 text-base text-center">
        {methods[order.paymentMethod]}
      </div>

      <div className="w-fifteen m-auto">
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
