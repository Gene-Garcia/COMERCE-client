const shoppingCartActionTypes = {
  LOAD_CART_ITEMS: "LOAD_CART_ITEMS",

  INCREASE_THIS_ITEM_QUANTITY: "INCREASE_THIS_ITEM_QUANTITY",
  DECREASE_THIS_ITEM_QUANTITY: "DECREASE_THIS_ITEM_QUANTITY",

  CHECKOUT_THIS_ITEM: "CHECKOUT_THIS_ITEM",
  CHECKOUT_ALL_CART_ITEMS: "CHECKOUT_ALL_CART_ITEMS",
  UNCHECKOUT_THIS_ITEM: "UNCHECKOUT_THIS_ITEM",

  REMOVE_THIS_ITEM_FROM_CART: "REMOVE_THIS_ITEM_FROM_CART",

  COMPUTE_CHECKOUT_PRICING: "COMPUTE_CHECKOUT_PRICING",
  DETERMINE_CHECKOUTABLE: "DETERMINE_CHECKOUTABLE",
  RESET_TO_DEFAULT: "RESET_TO_DEFAULT",
};

const loadCartItems = (cartItems) => {
  return {
    type: shoppingCartActionTypes.LOAD_CART_ITEMS,
    payload: cartItems,
  };
};

const increaseThisItemQuantity = (productId) => {
  return {
    type: shoppingCartActionTypes.INCREASE_THIS_ITEM_QUANTITY,
    payload: productId,
  };
};

const decreaseThisItemQuantity = (productId) => {
  return {
    type: shoppingCartActionTypes.DECREASE_THIS_ITEM_QUANTITY,
    payload: productId,
  };
};

const checkoutThisItem = (productId) => {
  return {
    type: shoppingCartActionTypes.CHECKOUT_THIS_ITEM,
    payload: productId,
  };
};

const checkoutAllCartItems = () => {
  return {
    type: shoppingCartActionTypes.CHECKOUT_ALL_CART_ITEMS,
  };
};

const uncheckoutThisItem = (productId) => {
  return {
    type: shoppingCartActionTypes.UNCHECKOUT_THIS_ITEM,
    payload: productId,
  };
};

const removeThisItemFromCart = (cartId) => {
  return {
    type: shoppingCartActionTypes.REMOVE_THIS_ITEM_FROM_CART,
    payload: cartId,
  };
};

const computeCheckoutPricing = () => {
  return {
    type: shoppingCartActionTypes.COMPUTE_CHECKOUT_PRICING,
  };
};

const determineCheckoutable = () => {
  return {
    type: shoppingCartActionTypes.DETERMINE_CHECKOUTABLE,
  };
};

const resetToDefault = () => {
  return {
    type: shoppingCartActionTypes.RESET_TO_DEFAULT,
  };
};

export {
  shoppingCartActionTypes,
  loadCartItems,
  increaseThisItemQuantity,
  decreaseThisItemQuantity,
  checkoutThisItem,
  checkoutAllCartItems,
  uncheckoutThisItem,
  removeThisItemFromCart,
  computeCheckoutPricing,
  determineCheckoutable,
  resetToDefault,
};
