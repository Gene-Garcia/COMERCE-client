import { useContext } from "react";
import ProductPaginationContext from "../context/ProductPaginationContext";

/*
 *
 *
 */
function useProductPagination() {
  const {
    state: {
      products,
      currentPage,
      minPageOption,
      maxPageOption,
      searchFilter,
      maxPagesPossible,
    },
    loading,
    setLoading,
    computeMaxPagesPossible,
    loadPaginationData,
    updateSearchFilter,
    updateCurrentPage,
    forwardButtonClick,
    previousButtonClick,
    updateDataOrder,
    resetToDefault,
  } = useContext(ProductPaginationContext);

  return {
    loading,
    setLoading,
    products,
    currentPage,
    minPageOption,
    maxPageOption,
    searchFilter,
    maxPagesPossible,
    computeMaxPagesPossible,
    loadPaginationData,
    updateSearchFilter,
    updateCurrentPage,
    forwardButtonClick,
    previousButtonClick,
    updateDataOrder,
    resetToDefault,
  };
}
export default useProductPagination;
