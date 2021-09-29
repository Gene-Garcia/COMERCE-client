import { createContext, useReducer } from "react";
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
