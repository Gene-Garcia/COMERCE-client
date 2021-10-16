import { createContext } from "react";

const ProductPaginationContext = createContext();
export default ProductPaginationContext;

const initial = {
  products: [],
  currentPage: 0,
  minPageOption: 1,
  maxPageOption: 5,
  searchFilter: "", // append to some regex
};

function ProductPaginationProvider({ children }) {
  return (
    <ProductPaginationContext.Provider>
      {children}
    </ProductPaginationContext.Provider>
  );
}

// ProductPaginationReducer
function action(dispatch) {
  //
  const loadPaginationData = () => {};

  const updateSearchFilter = (searchVal) => {};

  const updateCurrentPage = (pageId) => {};

  const forwardButtonClick = () => {};

  const previousButtonClick = () => {};

  const updateDataOrder = (orderCommand) => {};

  const resetToDefault = () => {};

  return {};
}

function ProductPaginationReducer(action, payload) {
  switch (action.type) {
  }
}
