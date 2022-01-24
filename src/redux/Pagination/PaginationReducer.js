import { paginationActionTypes as types } from "./PaginationAction";

const initial = {
  // set after the initial onMount state. the total count of items in the database
  itemCount: 0,
  items: [],
  currentPage: 1,

  // these 2 variables is responsible for limiting only {RANGE} pages buttons to be displayed
  minPageOption: 1,
  maxPageOption: 1,

  // const values
  // range of the pages option box shown
  range: 5,
  // the number of products to be displayed per page
  itemCountPerPage: 4,

  // append to some regex
  searchFilter: "",
  // to be changed on first load through computation in the computeMaxPagesPossible
  maxPagesPossible: 1,
};

const paginationReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.LOAD_PAGINATED_ITEMS:
      return { ...state, items: payload };

    case types.SET_TOTAL_ITEMS_COUNT:
      return { ...stat, itemcount: payload };

    /*
     * computes the requires number of pages for all the product to be displayed
     * formula used is productCount/productCountPerPage rounded up. The formula
     * only states that the total number of products are being divided by
     * pages to be displayed. It is rounded because result sometimes lead to
     * decimal and ensure every product is taken.
     */
    case types.COMPUTE_MAX_PAGES_POSSIBLE:
      return {
        ...state,
        maxPagesPossible: Math.ceil(state.itemCount / state.itemCountPerPage),
      };

    /*
     * minPageOption is always and by default is one.
     * maxPageOption is dependent on the hard-coded
     * definition of RANGE. range is never change on runtime.
     * However, whenever the maxPagesPossible is less then
     * RANGE, then maxPageOption will be maxPagesPossible.
     */
    case types.INITIALIZE_PAGE_RANGE:
      return {
        ...state,
        minPageOption: 1,
        maxPageOption:
          state.maxPagesPossible < state.range
            ? state.maxPagesPossible
            : state.range,
      };

    case types.UPDATE_ACTIVE_PAGE_NUMBER:
      return { ...state, currentPage: action.payload };

    case types.NEXT_PAGE:
      // click fwdBtn has two actions
      // one: the active page button will move from 1 to maxPageOption,
      // two: reaching 5 then click fwdBtn, incrementing with another RANGE (or to its maxvalue possible-1)

      /*
       * The conditions of the return implements isolated if statements, meaning each variable will modify
       * its value alone and not within an if () else statement. I think its a much understandble approach
       */

      return {
        ...state,

        // increment current page as long as it is still within maxPagesPossible
        currentPage:
          state.currentPage + 1 <= state.maxPagesPossible
            ? state.currentPage + 1
            : state.maxPagesPossible,

        // if the currentPage is still within maxPageOption then minPageOption is still ok. In a sense
        // the highlighted page number is within min and maxPageOption
        // else, we increment minPageOption to 5 or within the bounds of maxPagesPossible
        // if we increment maxPageOption to an additional 5 and is it is still within maxPagePossible then
        // maxPagesPossible can still be added with 5
        // else, the maxPageOption incremented with 5 results to a greater number to maxPagesPossible then
        // minPageOption should be based on maxPagesPossible deducted by 4. (so that display will be 9 minus 4 = 5 6 7 8 9)
        minPageOption:
          state.currentPage + 1 <= state.maxPageOption
            ? state.minPageOption
            : state.maxPageOption + state.range > state.maxPagesPossible
            ? addMustNotExceed(
                state.maxPageOption + 1,
                state.maxPagesPossible,
                state.minPageOption
              ) // whenever maxPageOption exceeds or is maxPagesPossible, then the value of maxPageOption should incremented by 1 only.
            : state.minPageOption + state.range,

        maxPageOption:
          state.currentPage + 1 <= state.maxPageOption
            ? state.maxPageOption
            : state.maxPageOption + state.range >= state.maxPagesPossible
            ? state.maxPagesPossible
            : state.maxPageOption + state.range,
      };

    case types.PREVIOUS_PAGE:
      return {
        ...state,

        currentPage: state.currentPage - 1 >= 1 ? state.currentPage - 1 : 1,

        minPageOption:
          state.currentPage - 1 >= state.minPageOption
            ? state.minPageOption
            : state.minPageOption - state.range >= 1
            ? state.minPageOption - state.range
            : 1,

        maxPageOption:
          state.currentPage - 1 >= state.minPageOption
            ? state.maxPageOption
            : state.minPageOption - state.range >= 1
            ? state.minPageOption - 1
            : state.maxPageOption, // whenever minPageOption becomes lower than 1, then the value of maxPageOption should be the default
      };

    case types.UPDATE_ITEMS_ORDER:
      return { ...state };

    case types.UPDATE_SEARCH_FILTER:
      return { ...state, searchFilter: action.payload };

    case types.RESET_TO_DEFAULT:
      return { ...initial };

    default:
      return { ...state };
  }
};

export default paginationReducer;

// a simple function that checks if value (usually a value recently performed with addition) is greater than the limit, if it will return and retain
// the set value, otherwsie, the recently added value will be returned
function addMustNotExceed(value, limiter, retain) {
  return value > limiter ? retain : value;
}
