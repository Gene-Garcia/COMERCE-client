function actions(dispatch) {
  //
  const loadPaginationData = (data) => {
    dispatch({ type: "LOAD_PAGINATION_DATA", payload: data });
  };

  const computeMaxPagesPossible = () => {
    dispatch({ type: "COMPUTE_MAX_PAGES_POSSIBLE" });
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
    updateSearchFilter,
    computeMaxPagesPossible,
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

    case "COMPUTE_MAX_PAGES_POSSIBLE":
      // length / 2 - round up
      return { ...state, maxPagesPossible: Math.ceil(state.products / 16) };

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
