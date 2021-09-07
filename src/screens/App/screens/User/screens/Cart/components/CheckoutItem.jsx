import React from "react";
import { useShoppingCart } from "../../../../../../../hooks/useCart";

function CheckoutItem({ data }) {
  const { productId, item, retailPrice, quantity, image } = data;
  const { removeFromCheckout } = useShoppingCart();

  return (
    <div className="relative group">
      <div className="absolute z-20 w-full transition duration-300 bg-gradient-to-b from-gray-200 to-gray-100 rounded-md opacity-0 group-hover:opacity-100 group-hover:bg-opacity-50">
        <button
          onClick={() => removeFromCheckout(productId)}
          className="w-full h-12  font-medium text-base text-my-accent"
        >
          Remove from checkout
        </button>
      </div>

      <div className="w-full top-0 z-10 transition duration-300 ">
        <div className="flex flex-row items-center gap-x-2">
          <div className="transition duration-300 shadow-md group-hover:shadow-none rounded-md bg-gray-100 flex-shrink-0">
            <img
              className="object-contain w-12 h-12 p-1"
              alt="for-checkout-item"
              src={image}
            />
          </div>

          <div className="flex-grow flex-shrink -space-y-2">
            <p className="text-md font-medium text-gray-600">{item}</p>
            <p className="text-gray-500 text-base">x{quantity}</p>
          </div>

          <div className="justify-self-end">
            <p className="text-gray-700 font-semibold text-lg">
              P{retailPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutItem;
