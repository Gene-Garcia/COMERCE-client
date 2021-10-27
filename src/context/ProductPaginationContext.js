import { createContext, useReducer, useState } from "react";
import ProductPaginationReducer, { actions } from "./ProductPaginationReducer";

const ProductPaginationContext = createContext();
export default ProductPaginationContext;

const initial = {
  productCount: 0,
  products: [],
  currentPage: 1,

  // these 2 variables is responsible for limiting only 5 pages buttons to be displayed
  minPageOption: 1,
  maxPageOption: 5,

  searchFilter: "", // append to some regex
  productCountPerPage: 8,
  maxPagesPossible: 1, // to be changed on first load
};

function ProductPaginationProvider({ children }) {
  const [state, dispatch] = useReducer(ProductPaginationReducer, initial);

  // loading state
  const [loading, setLoading] = useState(true);

  const {
    loadPaginationData,
    setTotalProductCount,
    computeMaxPagesPossible,
    updateSearchFilter,
    updateCurrentPage,
    forwardButtonClick,
    previousButtonClick,
    updateDataOrder,
    resetToDefault,
  } = actions(dispatch);

  return (
    <ProductPaginationContext.Provider
      value={{
        state,
        loading,
        setLoading,
        computeMaxPagesPossible,
        loadPaginationData,
        setTotalProductCount,
        updateSearchFilter,
        updateCurrentPage,
        forwardButtonClick,
        previousButtonClick,
        updateDataOrder,
        resetToDefault,
      }}
    >
      {children}
    </ProductPaginationContext.Provider>
  );
}
export { ProductPaginationProvider };
