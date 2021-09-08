/*
 * The reducer that will carry out the actions that modifies
 * the state variables used in the Shopping Cart
 *
 */
function ShoppingCartReducer(state, action) {
  switch (action.type) {
    case "LOAD_CART_ITEMS":
      return { ...state, items: [...action.payload] };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((e) =>
          action.payload === e.productId
            ? { ...e, quantity: e.quantity + 1 }
            : { ...e }
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((e) =>
          action.payload === e.productId
            ? { ...e, quantity: e.quantity - 1 >= 1 ? e.quantity - 1 : 1 }
            : { ...e }
        ),
      };

    case "ADD_TO_CHECKOUT":
      return {
        ...state,
        items: state.items.map((e) =>
          e.productId === action.payload ? { ...e, checkout: true } : { ...e }
        ),
      };

    case "ADD_ALL_TO_CHECKOUT":
      return {
        ...state,
        items: state.items.map((e) => ({ ...e, checkout: true })),
      };

    case "REMOVE_FROM_CHECKOUT":
      return {
        ...state,
        items: state.items.map((e) =>
          e.productId === action.payload ? { ...e, checkout: false } : { ...e }
        ),
      };

    case "COMPUTE_PRICES":
      let tempSubTotal = state.items
        .map((e) => (e.checkout ? e.retailPrice * e.quantity : 0))
        .reduce((a, c) => a + c);

      let tempGrandTotal = tempSubTotal + state.shippingFee;

      return {
        ...state,
        subTotal: tempSubTotal,
        grandTotal: tempGrandTotal,
      };

    case "DETERMINE_CHECKOUTABLE":
      return {
        ...state,
        checkoutable: state.items.find((e) => e.checkout === true)
          ? true
          : false,
      };

    default:
      throw Error;
  }
}

export default ShoppingCartReducer;
