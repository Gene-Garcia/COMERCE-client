import { createContext, useReducer, useState } from "react";
import CheckoutReducer from "./CheckoutReducer";
import { actions } from "./CheckoutReducer";

const CheckoutContext = createContext();
export default CheckoutContext;

const initialState = {
  toggledStep: "SD",
  visitedStep: 1,

  shippingDetails: {},

  toggledPayment: "COD",
  paymentMethod: "",
  paymentDetails: {},
};

function CheckoutProvider({ children }) {
  const [state, dispatch] = useReducer(CheckoutReducer, initialState);

  // loading state for placing order
  const [loading, setLoading] = useState(false);

  const {
    nextStep,
    toggleStep,
    togglePaymentOption,
    loadShippingDetails,
    loadPaymentDetails,
    placeOrder,
    resetToDefault,
  } = actions(dispatch);

  return (
    <CheckoutContext.Provider
      value={{
        loading,
        setLoading,
        state,
        nextStep,
        toggleStep,
        togglePaymentOption,
        loadShippingDetails,
        loadPaymentDetails,
        placeOrder,
        resetToDefault,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
export { CheckoutProvider };
