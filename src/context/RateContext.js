import { createContext, useReducer, useState } from "react";
import RateReducer, { actions } from "./RateReducer";

const RateContext = createContext();
export default RateContext;

const initial = {
  products: [],
  selected: {}, // if set by components, if no data found, will be set to null directly. Kasi it is much more efficient to check for null then to check if object has any property
  rating: -1,
  comment: "",
};

function RateProvider({ children }) {
  const [state, dispatch] = useReducer(RateReducer, initial);

  // loading state variable so that products will not be displayed until it has been populated
  const [loading, setLoading] = useState(true);

  const { loadProducts, setSelectedProduct, setRating, onCommentChange } =
    actions(dispatch);

  // other functions
  const getProductById = (pId, oId) => {
    return state.products.find((e) => e.productId === pId && e.orderId === oId);
  };

  return (
    <RateContext.Provider
      value={{
        state,
        loading,
        setLoading,
        loadProducts,
        setSelectedProduct,
        setRating,
        onCommentChange,
        getProductById,
      }}
    >
      {children}
    </RateContext.Provider>
  );
}
export { RateProvider };
