function RateReducer(state, action) {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "SET_SELECTED_PRODUCT":
      return {
        ...state,
        selected: action.payload,
      };

    // iterates and finds in the product the pId and oId, and updates its rated to true
    case "SET_PRODUCT_TO_RATED":
      return {
        ...state,
        products: state.products.map((e) =>
          e.productId === action.payload.pId && e.orderId === action.payload.oId
            ? { ...e, rated: true }
            : e
        ),
      };

    case "SET_RATING":
      return {
        ...state,
        rating: action.payload,
      };

    case "ON_COMMENT_CHANGE":
      return {
        ...state,
        comment: action.payload,
      };

    case "RESET_RATE_VALUES":
      return {
        ...state,
        selected: null,
        rating: -1,
        comment: "",
      };

    default:
      throw Error;
  }
}
export default RateReducer;

function actions(dispatch) {
  const loadProducts = (data) => {
    dispatch({
      type: "LOAD_PRODUCTS",
      payload: data,
    });
  };

  const setSelectedProduct = (product) => {
    dispatch({
      type: "SET_SELECTED_PRODUCT",
      payload: product,
    });
  };

  const setProductToRated = (pId, oId) => {
    dispatch({
      type: "SET_PRODUCT_TO_RATED",
      payload: { pId, oId },
    });
  };

  const setRating = (rate) => {
    dispatch({
      type: "SET_RATING",
      payload: rate,
    });
  };

  const onCommentChange = (e) => {
    dispatch({
      type: "ON_COMMENT_CHANGE",
      payload: e.target.value,
    });
  };

  const resetRateValuesToDefault = () => {
    dispatch({
      type: "RESET_RATE_VALUES",
    });
  };

  return {
    loadProducts,
    setSelectedProduct,
    setRating,
    onCommentChange,
    resetRateValuesToDefault,
    setProductToRated,
  };
}
export { actions };
