import { createContext, useReducer, useState } from "react";
import CheckoutReducer from "./CheckoutReducer";
import { actions } from "./CheckoutReducer";

const CheckoutContext = createContext();
export default CheckoutContext;

const initialState = {
  // changes on proceeding to the next step, or clicking a step indicator, whenever that step is visited.
  toggledStep: "SD",
  // helps in enabling a step indicator link to be clicked by the user. This allows navigating back to a step component.
  // For example, going back to shipping details component to change something.
  visitedStep: 1,

  // data object to hold the shipping details crated in shipping form component
  shippingDetails: {},

  // variable that tells on which payment option form to be rendered. there three possible payment component
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
        resetToDefault,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
export { CheckoutProvider };
