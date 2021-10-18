import { useContext } from "react";
import ProductPaginationContext from "../context/ProductPaginationContext";

/*
 *
 *
 */
function useProductPagination() {
  return ({
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
    loadPaginationData,
    setTotalProductCount,
    updateSearchFilter,
    updateCurrentPage,
    forwardButtonClick,
    previousButtonClick,
    updateDataOrder,
    resetToDefault,
  } = useContext(ProductPaginationContext));
}
export default useProductPagination;
