import React from "react";
import { useShoppingCart } from "../../../hooks/useCart";
import { formatPrice } from "../../utils/price";

/*
 * The checkout item is the product that is part of the checkouted items. In other words
 * items that have been added for checkout.
 *
 * If the editable props is true, then hovering an item will show a gradient indicating
 * that by clicking will remove the product from being checkouted. Otherwise, no hover effect
 * an cannot be removed
 */
function CheckoutItem({ data, editable }) {
  const { productId, item, retailPrice, quantity, image } = data;
  const { removeFromCheckout } = useShoppingCart();

  /* Configuration if the checkouted items are editable. True in Cart, False in Checkout */
  const removerPosition = editable ? "absolute" : "hidden";

  return (
    <div className="relative group">
      <div
        className={`${removerPosition} z-20 w-full rounded bg-gradient-to-br from-my-accent via-my-accent-tone to-my-accent-tint opacity-0 transition duration-200 ease-linear group-hover:opacity-100 group-hover:bg-opacity-50`}
      >
        <button
          onClick={() => removeFromCheckout(productId)}
          className="w-full h-12 font-medium text-base text-white"
        >
          Remove from checkout
        </button>
      </div>

      <div className="w-full top-0 z-10 transition duration-300 ">
        <div className="flex flex-row items-center gap-x-2">
          <div className="transition duration-300 shadow group-hover:shadow-none rounded-md bg-gray-100 flex-shrink-0">
            <img
              className="object-contain w-12 h-12 p-1"
              alt="for-checkout-item"
              src={image}
            />
          </div>

          <div className="flex-grow flex-shrink -space-y-2">
            <p className="text-md font-semibold text-gray-600">{item}</p>
            <p className="text-gray-500 text-base font-light italic">
              x{quantity}
            </p>
          </div>

          <div className="justify-self-end">
            <p className="text-gray-600 font-medium text-md">
              {`₱${formatPrice(retailPrice)}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutItem;
