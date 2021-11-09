import { createContext, useReducer, useState } from "react";
import ProductPaginationReducer, { actions } from "./ProductPaginationReducer";

const ProductPaginationContext = createContext();
export default ProductPaginationContext;

const initial = {
  // set after the initial onMount state. the total count of items in the database
  productCount: 0,
  products: [],
  currentPage: 1,

  // these 2 variables is responsible for limiting only {RANGE} pages buttons to be displayed
  minPageOption: 1,
  maxPageOption: 1,

  // const values
  // range of the pages option box shown
  range: 5,
  // the number of products to be displayed per page
  productCountPerPage: 4,

  // append to some regex
  searchFilter: "",
  // to be changed on first load through computation in the computeMaxPagesPossible
  maxPagesPossible: 1,
};

function ProductPaginationProvider({ children }) {
  const [state, dispatch] = useReducer(ProductPaginationReducer, initial);

  // loading state
  const [loading, setLoading] = useState(true);

  const {
    loadPaginationData,
    setTotalProductCount,
    computeMaxPagesPossible,
    initMinMaxPageOptions,
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
        initMinMaxPageOptions,
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
