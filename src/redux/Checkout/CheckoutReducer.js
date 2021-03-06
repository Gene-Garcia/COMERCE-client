import { checkoutActionTypes as types } from "./CheckoutAction";

const initial = {
  // data object to hold the shipping details crated in shipping form component
  shippingDetails: {},

  // variable that tells on which payment option form to be rendered. there three possible payment component
  toggledPayment: "COD",
  paymentMethod: "",
  paymentDetails: {},
};

const checkoutReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.LOAD_SHIPPING_DETAILS:
      return { ...state, shippingDetails: { ...payload } };

    /*
     * in the payment details component, there are also 3 more
     * renderable components or options - COD, Credit Card, and PayPal
     * this function changes the current rendered payment option
     * in the payment details component.
     */
    case types.TOGGLE_PAYMENT_OPTION:
      return { ...state, toggledPayment: payload };

    /*
     * the following load functions are triggered by only
     * one method in this context, but are called based on
     * paramter
     */

    // No additional payment details needed for COD
    case types.LOAD_COD_PAYMENT:
      return { ...state, paymentMethod: "COD" };

    // Requires additional payment details for PayPal
    case types.LOAD_PAYPAL_PAYMENT:
      return {
        ...state,
        paymentMethod: "PP",
        paymentDetails: { ...payload },
      };

    // Requires additional payment details for Credit Card
    case types.LOAD_CREDIT_CARD_PAYMENT:
      return {
        ...state,
        paymentMethod: "CC",
        paymentDetails: { ...payload },
      };

    /*
     * resets all the state variables of the checkout context, so that every details is empty.
     * all information component will have empty values and default selected
     */
    case types.RESET_TO_DEFAULT:
      return { ...initial };

    default:
      return { ...state };
  }
};
export default checkoutReducer;
