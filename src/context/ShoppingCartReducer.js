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

    case "REMOVE_CART_ITEM":
      return {
        ...state,
        items: state.items.filter((e) => e.cartId !== action.payload),
      };

    case "RESET_TO_DEFAULT":
      return {
        items: [],
        subTotal: 0,
        shippingFee: 75,
        grandTotal: 0,
        checkoutable: false,
      };

    default:
      throw Error;
  }
}
export default ShoppingCartReducer;

function actions(dispatch) {
  /* Add items from the API call */
  const loadCartItems = (items) => {
    dispatch({
      type: "LOAD_CART_ITEMS",
      payload: items,
    });
  };

  /* Increase or decrease the quantity of the product with the productId */
  const modifyQuantity = (increment, productId) => {
    dispatch({
      type: increment ? "INCREASE_QUANTITY" : "DECREASE_QUANTITY",
      payload: productId,
    });

    computePrices();
  };

  /* Make an individual item or every item as checkout */
  const addToCheckout = (individual, productId) => {
    dispatch({
      type: individual ? "ADD_TO_CHECKOUT" : "ADD_ALL_TO_CHECKOUT",
      payload: productId,
    });

    computePrices();
    determineCheckoutable();
  };

  /* Change an item with productId's checkout field to false */
  const removeFromCheckout = (productId) => {
    dispatch({
      type: "REMOVE_FROM_CHECKOUT",
      payload: productId,
    });

    computePrices();
    determineCheckoutable();
  };

  /* Computes both sub total and grand total */
  const computePrices = () => {
    dispatch({
      type: "COMPUTE_PRICES",
    });
  };

  /* Determines if the has selected atleast one product for checkout */
  const determineCheckoutable = () => {
    dispatch({
      type: "DETERMINE_CHECKOUTABLE",
    });
  };

  /* Manually removes an item from our list, instead of creating another API query  */
  const removeCartItem = (cartId) => {
    dispatch({
      type: "REMOVE_CART_ITEM",
      payload: cartId,
    });
  };

  /*
   * Resets state variables to default value.
   *
   * Because a bug occurs after clicking checkout button, and going back to cart page
   * All checked out item are gone, but the pricing are still their
   */
  const resetToDefault = () => {
    dispatch({
      type: "RESET_TO_DEFAULT",
    });
  };

  return {
    loadCartItems,
    modifyQuantity,
    addToCheckout,
    removeFromCheckout,
    removeCartItem,
    resetToDefault,
  };
}
export { actions };
