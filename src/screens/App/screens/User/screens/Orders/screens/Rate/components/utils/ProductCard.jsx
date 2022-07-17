import React from "react";
import { formatPrice } from "../../../../../../../../../../shared/utils/price";
import { Link } from "react-router-dom";
import { formatDate } from "../../../../../../../../../../shared/utils/date";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedProduct } from "../../../../../../../../../../redux/RateOrder/RateOrderAction";

function ProductCardLink({ data }) {
  const { imageAddress, item, retailPrice: price, orderId } = data;

  // redux
  const dispatch = useDispatch();

  return (
    <div
      className="flex flex-row cursor-pointer lg:gap-5 px-5 xs:px-7 md:px-5 lg:px-7 transition ease-linear hover:shadow-md gap-2"
      onClick={() => dispatch(updateSelectedProduct(data))}
    >
      <img
        src={imageAddress}
        alt="product"
        className="hidden xs:block md:hidden lg:block object-contain w-20 h-20 flex-shrink-0 m-auto p-1.5"
      />

      <div className="flex flex-col xl:flex-row justify-between flex-grow flex-shrink gap-x-4">
        <div className="flex flex-col justify-between gap-0 md:gap-0.5 xl:gap-2">
          <p className="text-sm md:text-md font-medium text-gray-500 mb-0">
            {item}
          </p>
          <p className="text-accent text-sm md:text-md font-medium mb-0">{`₱${formatPrice(
            price
          )}`}</p>
        </div>

        <div className="text-right">
          <p className="text-gray-400 text-xs md:text-sm mb-0">Order ID</p>
          <Link
            to={`/user/orders?oid=${orderId}`}
            className="text-sm text-gray-500 transition duration-150 ease-linear hover:text-accent"
          >
            {orderId}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProductCardDisplay() {
  // redux rate order reducer & states
  const { imageAddress, item, orderId, orderDate, ETADate } = useSelector(
    (s) => s.RATE_ORDER.selectedProduct
  );

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="bg-gray-100 rounded">
          <img
            src={imageAddress}
            alt="product"
            className="w-56 lg:w-64 h-56 lg:h-64 object-contain m-auto p-3"
          />
        </div>

        <div className="flex flex-col justify-between gap-8">
          <p className="font-semibold text-2xl text-gray-800">{item}</p>

          <div className="flex flex-col gap-2 xl:gap-4">
            <div>
              <p className="text-gray-300 uppercase text-sm font-semibold">
                Order ID
              </p>
              <Link
                to={`/user/orders?oid=${orderId}`}
                className="text-gray-800 transition duration-150 ease-linear hover:text-accent"
              >
                {orderId}
              </Link>
            </div>

            <div className="flex flex-row lg:flex-col xl:flex-row gap-10 lg:gap-2 xl:gap-10">
              <div>
                <p className="text-gray-300 uppercase text-sm font-semibold">
                  Date Ordered
                </p>
                <p className="text-gray-800">{formatDate(orderDate, 1)}</p>
              </div>

              <div>
                <p className="text-gray-300 uppercase text-sm font-semibold">
                  Date Received
                </p>
                <p className="text-gray-800">{formatDate(ETADate, 1)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { ProductCardLink, ProductCardDisplay };
