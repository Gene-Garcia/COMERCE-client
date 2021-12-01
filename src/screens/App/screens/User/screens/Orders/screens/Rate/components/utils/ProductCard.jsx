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

      <div className="flex flex-col xl:flex-row justify-between flex-grow flex-shrink px-4 py-2 gap-4">
        <div className="flex flex-col justify-between gap-2">
          <p className="text-md font-medium text-gray-500">{item}</p>
          <p className="text-my-accent text-md font-medium">{`₱${formatPrice(
            price
          )}`}</p>
        </div>

        <div className="text-right">
          <p className="text-gray-400 text-sm mb-0">Order ID</p>
          <Link
            to={`/user/orders?oid=${orderId}`}
            className="text-sm text-gray-500 transition duration-150 ease-linear hover:text-my-accent"
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
      <div className="flex flex-col lg:flex-row gap-3">
        <img
          src={imageAddress}
          alt="product"
          className="w-56 lg:w-64 h-56 lg:h-64 object-contain m-auto"
        />

        <div className="flex flex-col justify-between gap-8">
          <p className="font-medium text-2xl text-gray-600">{item}</p>

          <div className="flex flex-col gap-2 xl:gap-4">
            <div>
              <p className="text-gray-400 uppercase text-sm font-semibold">
                Order ID
              </p>
              <Link
                to={`/user/orders?oid=${orderId}`}
                className=" text-md text-gray-500 transition duration-150 ease-linear hover:text-my-accent"
              >
                {orderId}
              </Link>
            </div>

            <div className="flex flex-row lg:flex-col xl:flex-row gap-10 lg:gap-2 xl:gap-10">
              <div>
                <p className="text-gray-400 uppercase text-sm font-semibold">
                  Date Ordered
                </p>
                <p className=" text-md text-gray-500">
                  {formatDate(orderDate, 1)}
                </p>
              </div>

              <div>
                <p className="text-gray-400 uppercase text-sm font-semibold">
                  Date Received
                </p>
                <p className=" text-md text-gray-500">
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
