import { useContext } from "react";
import ProductPaginationContext from "../context/ProductPaginationContext";

/*
 *
 *
 */
function useProductPagination() {
  const {
    state: {
      productCount,
      products,
      currentPage,
      minPageOption,
      maxPageOption,
      searchFilter,
      productCountPerPage,
      maxPagesPossible,
    },
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
  } = useContext(ProductPaginationContext);

  return {
    productCount,
    products,
    currentPage,
    minPageOption,
    maxPageOption,
    searchFilter,
    productCountPerPage,
    maxPagesPossible,
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
  };
}
export default useProductPagination;
