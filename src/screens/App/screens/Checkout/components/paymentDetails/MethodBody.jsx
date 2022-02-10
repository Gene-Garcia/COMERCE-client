import React from "react";
import { useDispatch } from "react-redux";
import { togglePaymentOption } from "../../../../../../redux/Checkout/CheckoutAction";

function PaymentMethodBody({ id, children, active }) {
  // redux
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(togglePaymentOption(id))}
      className={
        (active ? `border-my-accent` : `border-gray-200`) +
        ` transition duration-300 px-7 py-3 md:py-0 border-b-4 font-semibold text-gray-600 flex items-center justify-center`
      }
    >
      {children}
    </button>
  );
}
export default PaymentMethodBody;
