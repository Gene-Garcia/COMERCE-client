import { createContext, useReducer, useState } from "react";
import CheckoutReducer from "./CheckoutReducer";
import { actions } from "./ShoppingCartReducer";

const CheckoutContext = createContext();
export default CheckoutContext;

const initialState = {
  toggledStep: "SD",
  visitedStep: 1,

  shippingDetails: {},

  toggledPayment: "COD",
  paymentDetails: {},
};

function CheckoutProvider({ children }) {
  const [state, dispatch] = useReducer(CheckoutReducer, initialState);

  const {} = actions(dispatch);

  return <CheckoutContext.Provider>{children}</CheckoutContext.Provider>;
}
