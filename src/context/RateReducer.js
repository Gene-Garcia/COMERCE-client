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

  return { loadProducts, setSelectedProduct, setRating, onCommentChange };
}
export { actions };
