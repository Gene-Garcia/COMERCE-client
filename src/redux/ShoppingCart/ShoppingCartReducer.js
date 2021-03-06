// WE NEED TO IMPLEMENT A BATCH DISPATCH ACTION BECAUSE SOME
// ACTIONS ARE INTENDED TO BE EXECUTED THEN FOLLOWING ACTIONS
// SHOULD ALSO BE TRIGGERED
// SPECIFICALLY, COMPUTE_PRICES, DETERMINE_CHECKOUTABLE

import { shoppingCartActionTypes as types } from "./ShoppingCartAction";

const initial = {
  /*
   * each item object will have an additional field 'checkout'
   * and will be determining variable on products to be for
   * checkout
   */
  cartItems: [],

  // checkout pricings
  subTotal: 0,
  // for now shipping is a fixed 75 pessos
  shippingFee: 75,
  grandTotal: 0,

  // variable that tells on whether the user is able to proceed for checkout. If not, the buttton for checkout page will not be displayed
  checkoutable: false,

  // loading state
  loading: false,
};

const shoppingCartReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.LOAD_CART_ITEMS:
      return { ...state, cartItems: payload };

    case types.INCREASE_THIS_ITEM_QUANTITY:
      // const itemIndex = state.cartItems.findIndex(
      //   (item) => item.productId === payload
      // );
      return {
        ...state,
        // cartItems: [
        //   ...state.cartItems.slice(0, itemIndex),
        //   {
        //     ...state.cartItems[itemIndex],
        //     quantity: state.cartItems[itemIndex].quantity + 1,
        //   },
        //   ...state.cartItems.slice(itemIndex + 1),
        // ],
        cartItems: state.cartItems.map((item) =>
          payload !== item.productId
            ? { ...item }
            : { ...item, quantity: item.quantity + 1 }
        ),
      };

    // quantity can never be less than 0 or negative
    // USE FIND INSTEAD OF MAP
    case types.DECREASE_THIS_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          payload === item.productId
            ? {
                ...item,
                quantity: item.quantity - 1 >= 1 ? item.quantity - 1 : 1,
              }
            : { ...item }
        ),
      };

    // USE FIND INSTEAD OF MAP
    case types.CHECKOUT_THIS_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          payload === item.productId
            ? {
                ...item,
                checkout: true,
              }
            : { ...item }
        ),
      };

    case types.CHECKOUT_ALL_CART_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => ({
          ...item,
          checkout: true,
        })),
      };

    case types.UNCHECKOUT_THIS_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          payload === item.productId
            ? { ...item, checkout: false }
            : { ...item }
        ),
      };

    /*
     * performed after making an API request to remove it from user's database
     * so that not another API request will be made to re-retrieve user's cart
     */
    case types.REMOVE_THIS_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.cartId !== payload),
      };

    case types.COMPUTE_CHECKOUT_PRICING:
      let tempSubTotal = state.cartItems
        .map((item) => (item.checkout ? item.retailPrice * item.quantity : 0))
        .reduce((accumulator, current) => accumulator + current);

      let tempGrandTotal = tempSubTotal + state.shippingFee;

      return {
        ...state,
        subTotal: tempSubTotal,
        grandTotal: tempGrandTotal,
      };

    /*
     * iterates through all the items and finds for atleast one item object to have a checkoutable = true in order to set checkoutable as true
     * being checkoutable indicates atleast one item was selected and the user can proceed to the chekout page
     */
    case types.DETERMINE_CHECKOUTABLE:
      return {
        ...state,
        checkoutable: state.cartItems.find((item) => item.checkout === true)
          ? true
          : false,
      };

    case types.RESET_TO_DEFAULT:
      return { ...initial };

    case types.SET_LOADING:
      return { ...state, loading: payload };

    default:
      return { ...state };
  }
};

// maybe this should be implemented along with redux-session? with the account information

/*
 * The CartContext is holds the data to the number of cart items displayed in the
 * navbars.
 *
 * The data is assumed to be based on the API call made by the components which is server
 * request that obtains the exact number of cart items in the user's record
 *
 * To use the state variable of this CartContext, components needs to use
 * the hook useGetCartCount
 */
const cartCounterReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case types.UPDATE_CART_COUNT:
      return payload;

    case types.INCREMENT_CART_COUNT:
      return state + 1;

    case types.CLEAR_CART_COUNT:
      return 0;

    default:
      return state;
  }
};

export default shoppingCartReducer;
export { cartCounterReducer };
