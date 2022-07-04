import { sellerPickUpRegistrationTypes as types } from "./SellerPickUpAction";

/*
 * products structure
 * [businessId] : {
 *    businessName,
 *    email,
 *    contactNumber,
 *    pickUpAddress,
 *    productQuantity,
 *    products: [],
 *    checked: bool
 * }
 */
const initial = { products: {}, isLoading: true };

const sellerPickUpReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.LOAD_FOR_PICK_UP_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case types.TOGGLE_PAGE_LOADING:
      return { ...state, isLoading: payload };

    case types.TOGGLE_PRODUCT_CHECKED:
      // iterate each products and find the matching business id
      const products = state.products;
      for (k in products) {
        if (products.hasOwnProperty(k)) {
          if (k === payload.businessId) {
            products[k].checked = payload.isChecked;

            break;
          }
        }
      }

      return {
        ...state,
        products: products,
      };

    case types.TOGGLE_ALL_PRODUCT_CHECKED:
      // iterate each products and update checked
      const products2 = state.products;
      for (k in products) {
        if (products.hasOwnProperty(k)) {
          products[k].checked = payload.isChecked;
        }
      }

      return {
        ...state,
        products: products2,
      };

    case types.FILTER_FOR_PICKUP_PRODUCTS:
      const products3 = state.products;

      payload.forEach((businessId) => {
        delete products3[businessId];
      });

      return {
        ...state,
        products: products3,
      };

    case types.RESET_TO_DEFAULT:
      return { ...initial };

    default:
      return { ...state };
  }
};
export default sellerPickUpReducer;
