import React from "react";
import { useShoppingCart } from "../../../../../../../hooks/useCart";
import Loading from "../../../../../../../shared/Loading/Loading";
import CartItem from "./CartItem";

function CartItems() {
  const { loading, items, addToCheckout } = useShoppingCart();

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div>
          <p className="text-lg text-gray-600 font-medium">
            Cart {items.length} item(s)
          </p>
        </div>

        <div>
          <button
            onClick={() => addToCheckout(false, undefined)}
            className="text-sm text-gray-500 font-medium px-3 py-1 rounded-md border border-gray-500 transition duration-200 ease-linear hover:border-gray-400 hover:bg-gray-400 hover:text-white active:ring-4 active:ring-gray-300"
          >
            Checkout All Items
          </button>
        </div>
      </div>

      {/* items */}
      <div className="py-10 flex flex-col gap-y-10">
        {loading ? (
          <Loading />
        ) : (
          items.map((e) => <CartItem key={e.productId} data={e} />)
        )}
      </div>
    </>
  );
}

export default CartItems;
