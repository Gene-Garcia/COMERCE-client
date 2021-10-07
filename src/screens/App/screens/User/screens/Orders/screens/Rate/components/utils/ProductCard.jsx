import React from "react";
import { formatPrice } from "../../../../../../../../../../shared/utils/price";
import { Link } from "react-router-dom";
import { formatDate } from "../../../../../../../../../../shared/utils/date";
import { useRate } from "../../../../../../../../../../hooks/useRate";

function ProductCardLink({
  data: { imageAddress, item, retailPrice: price, orderId, productId },
}) {
  // rate context
  const { setSelectedProduct, getProductById } = useRate();

  // changes the selected product onclick
  function changeSelected() {
    setSelectedProduct(getProductById(productId, orderId));
  }

  return (
    <div
      className="shadow rounded-md flex flex-row p-0.5"
      onClick={changeSelected}
    >
      <img
        src={imageAddress}
        alt="product"
        className="object-contain w-20 h-20 flex-shrink-0 m-auto"
      />

      <div className="flex flex-row justify-between flex-grow flex-shrink px-4 py-2 gap-4">
        <div className="flex flex-col justify-between gap-2">
          <p className="text-lg font-medium text-gray-500">{item}</p>
          <p className="text-my-accent text-md font-medium">{`₱${formatPrice(
            price
          )}`}</p>
        </div>

        <div className="space-y-0 text-right">
          <p className="text-gray-400 text-sm">Order ID</p>
          <Link
            to={`/users/orders?oid=${orderId}`}
            className="transition duration-200 text-sm text-gray-500 hover:text-gray-900"
          >
            {orderId}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProductCardDisplay({
  data: { imageAddress, item, orderId, orderDate, ETADate },
}) {
  return (
    <>
      <div className="flex flex-row gap-3">
        <img
          src={imageAddress}
          alt="product"
          className="w-64 h-64 object-contain"
        />

        <div className="flex flex-col justify-between">
          <p className="font-medium text-2xl text-gray-600">{item}</p>

          <div className="flex flex-col gap-4">
            <div>
              <p className="text-gray-400">Order ID</p>
              <Link
                to="/users/orders?p=dsasdfasfas"
                className="transition duration-200 font-medium text-md text-gray-500 hover:text-gray-900"
              >
                {orderId}
              </Link>
            </div>

            <div className="flex flex-row gap-10">
              <div>
                <p className="text-gray-400">Date Ordered</p>
                <p className="font-medium text-md text-gray-500">
                  {formatDate(orderDate, 1)}
                </p>
              </div>

              <div>
                <p className="text-gray-400">Date Received</p>
                <p className="font-medium text-md text-gray-500">
                  {formatDate(ETADate, 1)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { ProductCardLink, ProductCardDisplay };
