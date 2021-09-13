import { createContext, useReducer, useState } from "react";
import CheckoutReducer from "./CheckoutReducer";
import { actions } from "./CheckoutReducer";

const CheckoutContext = createContext();
export default CheckoutContext;

const initialState = {
  toggledStep: "SD",
  visitedStep: 3,

  shippingDetails: {},

  toggledPayment: "COD",
  paymentDetails: {},
};

function CheckoutProvider({ children }) {
  const [state, dispatch] = useReducer(CheckoutReducer, initialState);

  const { nextStep, toggleStep, togglePaymentOption, placeOrder } =
    actions(dispatch);

  return (
    <CheckoutContext.Provider
      value={{ state, nextStep, toggleStep, togglePaymentOption, placeOrder }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
export { CheckoutProvider };
