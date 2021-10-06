import { createContext, useReducer, useState } from "react";
import RateReducer, { actions } from "./RateReducer";

const RateContext = createContext();
export default RateContext;

const initial = {
  products: [],
  selected: {},
  rating: -1,
  comment: "",
};

function RateProvider({ children }) {
  const [state, dispatch] = useReducer(RateReducer, initial);

  // loading state variable so that products will not be displayed until it has been populated
  const [loading, setLoading] = useState(true);

  const { loadProducts, setSelectedProduct, setRating, onCommentChange } =
    actions(dispatch);

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
      }}
    >
      {children}
    </RateContext.Provider>
  );
}
export { RateProvider };
