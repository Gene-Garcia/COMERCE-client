const paginationActionTypes = {
  LOAD_PAGINATED_ITEMS: "LOAD_PAGINATED_DATA",
  SET_TOTAL_ITEMS_COUNT: "SET_TOTAL_PRODUCT_COUNT",
  COMPUTE_MAX_PAGES_POSSIBLE: "COMPUTE_MAX_PAGES_POSSIBLE",
  INITIALIZE_PAGE_RANGE: "INITIALIZE_PAGE_RANGE",

  UPDATE_ACTIVE_PAGE_NUMBER: "UPDATE_ACTIVE_PAGE_NUMBER",
  NEXT_PAGE: "NEXT_PAGE",
  PREVIOUS_PAGE: "PREVIOUS_PAGE",

  UPDATE_ITEMS_ORDER: "UPDATE_DATA_ORDER",
  UPDATE_SEARCH_FILTER: "UPDATE_SEARCH_FILTER",
  RESET_TO_DEFAULT: "RESET_TO_DEFAULT",

  UPDATE_LOADING: "UPDATE_LOADING",
};

const loadPaginatedItems = (items) => {
  return {
    type: paginationActionTypes.LOAD_PAGINATED_ITEMS,
    payload: items,
  };
};

const setTotalItemsCount = (itemsCount) => {
  return {
    type: paginationActionTypes.SET_TOTAL_ITEMS_COUNT,
    payload: itemsCount,
  };
};

const computeMaxPagesPossible = () => {
  return {
    type: paginationActionTypes.COMPUTE_MAX_PAGES_POSSIBLE,
  };
};

const initializePageRange = () => {
  return {
    type: paginationActionTypes.INITIALIZE_PAGE_RANGE,
  };
};

const updateActivePageNumber = (pageNumber) => {
  return {
    type: paginationActionTypes.UPDATE_ACTIVE_PAGE_NUMBER,
    payload: pageNumber,
  };
};

const nextPaginationPage = () => {
  return {
    type: paginationActionTypes.NEXT_PAGE,
  };
};

const previousPaginationPage = () => {
  return {
    type: paginationActionTypes.PREVIOUS_PAGE,
  };
};

const updateItemsOrder = (sortOrder) => {
  return {
    type: paginationActionTypes.UPDATE_ITEMS_ORDER,
    payload: sortOrder,
  };
};

const updateSearchFilter = (searchValue) => {
  return {
    type: paginationActionTypes.UPDATE_SEARCH_FILTER,
    payload: searchValue,
  };
};

const resetToDefault = () => {
  return {
    type: paginationActionTypes.RESET_TO_DEFAULT,
  };
};

const updateLoading = (isLoading) => {
  return {
    type: paginationActionTypes.UPDATE_LOADING,
    payload: isLoading,
  };
};

export {
  paginationActionTypes,
  loadPaginatedItems,
  setTotalItemsCount,
  computeMaxPagesPossible,
  initializePageRange,
  updateActivePageNumber,
  nextPaginationPage,
  previousPaginationPage,
  updateItemsOrder,
  updateSearchFilter,
  resetToDefault,
  updateLoading,
};
