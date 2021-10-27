function actions(dispatch) {
  //
  const loadPaginationData = (data) => {
    dispatch({ type: "LOAD_PAGINATION_DATA", payload: data });
  };

  const setTotalProductCount = (count) => {
    dispatch({
      type: "SET_TOTAL_PRODUCT_COUNT",
      payload: count,
    });
  };

  const computeMaxPagesPossible = () => {
    dispatch({ type: "COMPUTE_MAX_PAGES_POSSIBLE" });
  };

  const initMinMaxPageOptions = () => {
    dispatch({ type: "INITIALIZE_MIN_MAX_PAGE_OPTIONS" });
  };

  const updateSearchFilter = (searchVal) => {
    dispatch({ type: "UPDATE_SEARCH_FILTER", payload: searchVal });
  };

  const updateCurrentPage = (pageId) => {
    dispatch({ type: "UPDATE_CURRENT_PAGE", payload: pageId });
  };

  const forwardButtonClick = () => {
    dispatch({ type: "FORWARD_BUTTON_CLICK" });
  };

  const previousButtonClick = () => {
    dispatch({ type: "PREVIOUS_BUTTON_CLICK" });
  };

  const updateDataOrder = (orderCommand) => {
    dispatch({ type: "UPDATE_DATA_ORDER", payload: orderCommand });
  };

  const resetToDefault = () => {
    dispatch({ type: "RESET_TO_DEFAULT" });
  };

  return {
    loadPaginationData,
    setTotalProductCount,
    updateSearchFilter,
    computeMaxPagesPossible,
    initMinMaxPageOptions,
    updateCurrentPage,
    forwardButtonClick,
    previousButtonClick,
    updateDataOrder,
    resetToDefault,
  };
}
export { actions };

function ProductPaginationReducer(state, action) {
  switch (action.type) {
    case "LOAD_PAGINATION_DATA":
      return { ...state, products: action.payload };

    case "SET_TOTAL_PRODUCT_COUNT":
      return { ...state, productCount: action.payload };

    case "COMPUTE_MAX_PAGES_POSSIBLE":
      // length / 2 - round up
      return {
        ...state,
        maxPagesPossible: Math.ceil(
          state.productCount / state.productCountPerPage
        ),
      };

    // by default min option is 1, and max option is 5. If maxPagesPossible is less than 5, maxOption should maxPagesPossible value
    // e.g., if maxPagesPossible is 4, then max option should be 4 also. Otherwise if 5 or higher, max option should be 5.
    case "INITIALIZE_MIN_MAX_PAGE_OPTIONS":
      return {
        ...state,
        minPageOption: 1,
        maxPageOption: state.maxPagesPossible < 5 ? state.maxPagesPossible : 5,
      };

    case "UPDATE_SEARCH_FILTER":
      return { ...state, searchFilter: action.payload };

    case "UPDATE_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };

    case "FORWARD_BUTTON_CLICK":
      // there can be no more pagination pages to be rendered
      if (state.maxPageOption + 1 > state.maxPagesPossible) return { ...state };
      // we still have not reached to render the maximum page possible
      else
        return {
          ...state,
          currentPage: state.currentPage + 1,
          minPageOption: state.minPageOption + 1,
          maxPageOption: state.maxPageOption + 1,
        };

    case "PREVIOUS_BUTTON_CLICK":
      // going back means that it will result to 0 or negative numbered page
      if (state.minPageOption - 1 <= 0) return { ...state };
      // going back means we are still able to render positive number
      else
        return {
          ...state,
          currentPage: state.currentPage - 1,
          minPageOption: state.minPageOption - 1,
          maxPageOption: state.maxPageOption - 1,
        };

    case "UPDATE_DATA_ORDER":
      return { ...state };

    case "RESET_TO_DEFAULT":
      return { ...state };

    default:
      throw Error;
  }
}
export default ProductPaginationReducer;
