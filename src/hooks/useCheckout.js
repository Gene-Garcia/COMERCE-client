import { useContext } from "react";
import CheckoutContext from "../context/CheckoutContext";

function useCheckout() {
  const {
    state: { toggledStep, toggledPayment, shippingDetails },
    nextStep,
    toggleStep,
    togglePaymentOption,
    loadShippingDetails,
    loadPaymentDetails,
    placeOrder,
  } = useContext(CheckoutContext);

  return {
    toggledStep,
    toggledPayment,
    shippingDetails,
    nextStep,
    toggleStep,
    togglePaymentOption,
    loadShippingDetails,
    loadPaymentDetails,
    placeOrder,
  };
}
export default useCheckout;
