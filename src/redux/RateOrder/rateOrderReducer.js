import { rateOrderActionTypes as types } from "./rateOrderAction";

const initial = {
  products: [],
  selectedProduct: null,
  /*  */
  rating: -1,
  comment: "",
};

const rateOrderReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.LOAD_PRODUCTS:
      return { ...state, products: payload };

    case types.UPDATE_SELECTED_PRODUCT:
      return { ...state, selectedProduct: payload };

    /*
     * iterates and finds in the product the pId and oId, and
     * updates its rated to new rateStatus
     */
    case types.UPDATE_PRODUCT_RATING_STATUS:
      return {
        ...state,
        products: state.products.map((e) =>
          e.productId === payload.productId && e.orderId === payload.orderId
            ? { ...e, rated: payload.rateStatus }
            : e
        ),
      };

    // finds any product that has rated false
    case types.TOGGLE_NEXT_PRODUCT_TO_RATE:
      return {
        ...state,
        selected: state.products.find((e) => e.rated === false),
      };

    case types.SET_RATING:
      return { ...state, rating: payload };

    case types.ON_COMMENT_CHANGE:
      return { ...state, comment: payload };

    case types.RESET_VALUES:
      return { ...initial };

    default:
      return { ...state };
  }
};

export default rateOrderReducer;
