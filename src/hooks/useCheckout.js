import { useContext } from "react";
import CheckoutContext from "../context/CheckoutContext";

function useCheckout() {
  const {
    loading,
    setLoading,
    state: {
      toggledStep,
      toggledPayment,
      shippingDetails,
      paymentDetails,
      paymentMethod,
    },
    nextStep,
    toggleStep,
    togglePaymentOption,
    loadShippingDetails,
    loadPaymentDetails,
    placeOrder,
    resetToDefault,
  } = useContext(CheckoutContext);

  return {
    loading,
    setLoading,
    toggledStep,
    toggledPayment,
    shippingDetails,
    paymentDetails,
    paymentMethod,
    nextStep,
    toggleStep,
    togglePaymentOption,
    loadShippingDetails,
    loadPaymentDetails,
    placeOrder,
    resetToDefault,
  };
}
export default useCheckout;
