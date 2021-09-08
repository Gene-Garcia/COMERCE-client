import React from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../../../../../../hooks/useCart";
import CheckoutItem from "./CheckoutItem";

function CartCheckout() {
  const { items, subTotal, grandTotal, shippingFee, checkoutable } =
    useShoppingCart();

  return (
    <>
      <p className="text-lg text-gray-600 font-medium">Checkout Summary</p>

      {/* items */}
      <div className="mt-6 flex flex-col gap-y-3">
        {items.map(
          (e) => e.checkout && <CheckoutItem key={e.productId} data={e} />
        )}
      </div>

      <div className="my-7 border-b border-3 border-gray-300"></div>
      <div className="">
        {/* sub total */}
        <div className="flex flex-row justify-between items-center font-medium text-gray-400 text-base">
          <p className="">Sub Total</p>
          <p className="">P{subTotal}</p>
        </div>

        {/* shipping fee */}
        <div className="flex flex-row justify-between items-center font-medium text-gray-400 text-base">
          <p className="">Shipping Fee (?)</p>
          <p className="">P{shippingFee}</p>
        </div>
      </div>
      <div className="my-7 border-b border-3 border-gray-300"></div>
      <div className="flex flex-row justify-between items-center">
        <div>
          <p className="text-lg font-medium text-gray-700">Grand Total</p>
          <p className="text-sm text-gray-400">(including VAT)</p>
        </div>

        <div>
          <p className="text-xl font-medium text-my-accent">P{grandTotal}</p>
        </div>
      </div>
      <div className="flex mt-8">
        {/* Checkout Button */}
        {checkoutable ? (
          <Link
            to="/user/checkout"
            className="transition duration-300 w-full text-center bg-my-accent text-white font-medium text-lg rounded-md p-3 hover:bg-my-accent-mono active:ring-8 active:ring-my-accent-mono active:ring-opacity-20"
          >
            PROCEED TO CHECKOUT
          </Link>
        ) : (
          <p className="transition duration-300 w-full text-center bg-my-accent text-white font-medium text-lg rounded-md p-3 hover:bg-my-accent-mono active:ring-8 active:ring-my-accent-mono active:ring-opacity-20">
            No Product(s) Selected
          </p>
        )}
      </div>
    </>
  );
}
export default CartCheckout;
