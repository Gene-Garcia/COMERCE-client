import { useContext } from "react";
import CheckoutContext from "../context/CheckoutContext";

function useCheckout() {
  const {
    state: { toggledStep },
    nextStep,
    toggleStep,
    togglePaymentOption,
    placeOrder,
  } = useContext(CheckoutContext);

  return {
    toggledStep,
    nextStep,
    toggleStep,
    togglePaymentOption,
    placeOrder,
  };
}
export default useCheckout;
