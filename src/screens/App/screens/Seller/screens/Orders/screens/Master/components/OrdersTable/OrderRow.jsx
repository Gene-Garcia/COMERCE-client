import React, { useState } from "react";
import { methods } from "../../../../../../../../../../shared/utils/payment";
import { formatPrice } from "../../../../../../../../../../shared/utils/price";
import CollapseRow from "./CollapseRow";

const OrderRow = ({ data, stripe }) => {
  // deconstruct
  const {
    _id: orderId,
    shipmentDetails: {
      firstName,
      lastName,
      province,
      cityMunicipality,
      barangay,
    },
    paymentMethod,
    orderedProducts,
  } = data;

  const [toggled, setToggled] = useState(false);

  // computer order total
  let orderTotal = 0;
  orderedProducts.forEach((product) => {
    orderTotal = orderTotal + (product.quantity + product.priceAtPoint);
  });

  return (
    <>
      <tr
        className={`${stripe ? "bg-gray-100" : "bg-auto"}
      h-16 
      transition duration-200 ease-linear 
      hover:bg-my-white-tone`}
      >
        <td className={`px-3 break-all text-left text-sm font-light`}>
          {orderId}
        </td>

        <td className="font-regular text-gray-600">{`${firstName} ${lastName}`}</td>

        <td className="font-regular">{`${barangay}, ${cityMunicipality}, ${province}`}</td>

        <td className="font-medium text-my-accent">
          ₱{formatPrice(orderTotal)}
        </td>

        <td className="text-gray-800 font-medium">{methods[paymentMethod]}</td>

        <td className="w-min">
          <div className="flex item-center flex-row justify-center gap-4">
            <button
              className={`text-my-accent text-opacity-60 transition duration-100 ease-linear hover:text-opacity-100`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>

            <button
              onClick={() => setToggled((prev) => !prev)}
              className={`text-gray-800 text-opacity-60 transition duration-100 ease-linear hover:text-opacity-100`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                />
              </svg>
            </button>
          </div>
        </td>
      </tr>

      <tr
        className={`${!toggled && "hidden"} 
        ${stripe ? "bg-gray-100" : "bg-auto"}`}
      >
        <CollapseRow />
      </tr>
    </>
  );
};
export default OrderRow;
