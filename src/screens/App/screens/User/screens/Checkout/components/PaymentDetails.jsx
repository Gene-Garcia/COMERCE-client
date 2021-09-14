import React from "react";
import useCheckout from "../../../../../../../hooks/useCheckout";
import PaymentMethod, {
  CashOnDelivery,
  CreditCard,
  PayPal,
} from "./PaymentMethod";
import visaIcon from "../../../../../../../shared/images/visa.png";
import mastercardIcon from "../../../../../../../shared/images/visa.png";
import paypalIcon from "../../../../../../../shared/images/visa.png";
import { Link } from "react-router-dom";

function PaymentDetails() {
  /* Context state variables used to toggle the payment methods after onclick */
  const { toggledPayment } = useCheckout();

  return (
    <div className="rounded-md shadow-md py-4 px-5 flex flex-col gap-y-10">
      <div className="flex flex-row gap-x-2">
        <Options />
      </div>

      <p className="text-lg text-gray-600 font-medium">Payment Details</p>

      <div className={toggledPayment === "COD" ? "block" : "hidden"}>
        <CashOnDelivery />
      </div>

      <div className={toggledPayment === "CC" ? "block" : "hidden"}>
        <CreditCard />
      </div>

      <div className={toggledPayment === "PP" ? "block" : "hidden"}>
        <PayPal />
      </div>

      {/* CTA of payment */}
      <div className="flex flex-row gap-x-3">
        <Link className="transition duration-200 bg-my-accent border border-transparent text-white rounded-md text-center text-lg font-semibold px-10 py-2 hover:bg-my-accent-mono">
          Review Order
        </Link>
        <Link
          to="/user/cart"
          className="transition duration-200 border border-transparent text-gray-400 rounded-md text-center text-lg font-semibold px-4 py-2 hover:border-gray-300"
        >
          Cancel Order
        </Link>
      </div>
    </div>
  );
}
export default PaymentDetails;

function Options() {
  const { toggledPayment } = useCheckout();

  return (
    <>
      <PaymentMethod active={toggledPayment === "COD"} id="COD">
        <span>Cash on Delivery</span>
      </PaymentMethod>

      <PaymentMethod active={toggledPayment === "CC"} id="CC">
        <div className="flex flex-row gap-x-2">
          <img src={visaIcon} className="w-16 object-scale-down" />
          <img src={mastercardIcon} className="w-12 object-scale-down" />
        </div>
      </PaymentMethod>

      <PaymentMethod active={toggledPayment === "PP"} id="PP">
        <img src={paypalIcon} className="w-20 object-scale-down" />
      </PaymentMethod>
    </>
  );
}
