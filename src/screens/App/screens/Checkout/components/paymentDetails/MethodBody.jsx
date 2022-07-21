import React from "react";

import { useDispatch } from "react-redux";
import { togglePaymentOption } from "../../../../../../redux/Checkout/CheckoutAction";

function PaymentMethodBody({ id, children, active }) {
  // redux
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(togglePaymentOption(id))}
      className={`flex items-center justify-center 
        border-b-2
        ${active ? `border-accent` : `border-gray-200`}
        px-1 w-[8rem] md:w-[10rem] h-[2.5rem]
        transition duration-200 ease-linear
        hover:border-slate-400`}
    >
      {children}
    </button>
  );
}
export default PaymentMethodBody;
