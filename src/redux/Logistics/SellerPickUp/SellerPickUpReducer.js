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
const initial = { products: null, isLoading: true };

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
      // const products = state.products;
      // for (let k in products) {
      //   if (products.hasOwnProperty(k)) {
      //     if (k === payload.businessId) {
      //       products[payload.businessId].checked = payload.isChecked;

      //       break;
      //     }
      //   }
      // }

      return {
        ...state,
        products: {
          ...state.products,
          [payload.businessId]: {
            ...state.products[payload.businessId],
            checked: payload.isChecked,
          },
        },
      };

    case types.TOGGLE_ALL_PRODUCT_CHECKED:
      // iterate each products and update checked
      // const products2 = state.products;
      // for (let k in products2) {
      //   if (products2.hasOwnProperty(k)) {
      //     products2[k].checked = payload.isChecked;
      //   }
      // }
      let checkedProducts = { ...state.products };
      Object.keys(checkedProducts).forEach((k, i) => {
        checkedProducts[k].checked = payload;
      });

      return {
        ...state,
        products: checkedProducts,
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
