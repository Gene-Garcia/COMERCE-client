import { createContext, useReducer } from "react";
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

  const { loadProducts, setSelectedProduct, setRating, onCommentChange } =
    actions(dispatch);

  return (
    <RateContext.Provider
      value={{
        state,
        loadProducts,
        setSelectedProduct,
        setRating,
        onCommentChange,
      }}
    ></RateContext.Provider>
  );
}
export { RateProvider };
