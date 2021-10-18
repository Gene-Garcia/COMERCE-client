import { createContext, useReducer, useState } from "react";
import ProductPaginationReducer, { actions } from "./ProductPaginationReducer";

const ProductPaginationContext = createContext();
export default ProductPaginationContext;

const initial = {
  productCount: 6,
  products: [],
  currentPage: 1,
  minPageOption: 1,
  maxPageOption: 5,
  searchFilter: "", // append to some regex
  productCountPerPage: 16,
  maxPagesPossible: 10,
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
