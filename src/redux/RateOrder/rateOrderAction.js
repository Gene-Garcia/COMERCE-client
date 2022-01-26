const rateOrderActionTypes = {
  LOAD_PRODUCTS: "LOAD_PRODUCTS",
  UPDATE_SELECTED_PRODUCT: "UPDATE_SELECTED_PRODUCT",
  UPDATE_PRODUCT_RATING_STATUS: "UPDATE_PRODUCT_RATING_STATUS",
  TOGGLE_NEXT_PRODUCT_TO_RATE: "TOGGLE_NEXT_PRODUCT_TO_RATE",
  SET_RATING: "SET_RATING",
  ON_COMMENT_CHANGE: "ON_COMMENT_CHANGE",
  RESET_VALUES: "RESET_VALUES",
};

const loadProducts = (products) => {
  return {
    type: rateOrderActionTypes.LOAD_PRODUCTS,
    payload: products,
  };
};

const updateSelectedProduct = (product) => {
  return {
    type: rateOrderActionTypes.UPDATE_SELECTED_PRODUCT,
    payload: product,
  };
};

const updateProductRatingStatus = (productId, orderId, rateStatus) => {
  return {
    type: rateOrderActionTypes.UPDATE_PRODUCT_RATING_STATUS,
    payload: { productId, orderId, rateStatus },
  };
};

const toggleNextProductToRate = () => {
  return {
    type: rateOrderActionTypes.TOGGLE_NEXT_PRODUCT_TO_RATE,
  };
};

const setRating = (rate) => {
  return {
    type: rateOrderActionTypes.SET_RATING,
    payload: rate,
  };
};

const onCommentChange = (event) => {
  return {
    type: rateOrderActionTypes.ON_COMMENT_CHANGE,
    payload: event.target.value,
  };
};

const resetValues = () => {
  return {
    type: rateOrderActionTypes.RESET_VALUES,
  };
};

export {
  rateOrderActionTypes,
  loadProducts,
  updateSelectedProduct,
  updateProductRatingStatus,
  toggleNextProductToRate,
  setRating,
  onCommentChange,
  resetValues,
};
