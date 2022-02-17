import React from "react";
import useProductPagination from "../../../hooks/useProductPagination";
import { useDispatch, useSelector } from "react-redux";
import {
  nextPaginationPage,
  previousPaginationPage,
  updateActivePageNumber,
} from "../../../redux/Pagination/PaginationAction";

/*
 * This pagination component renders two arrow button, and number pages in the center of it.
 * The number of pages renderd between the arrows depends on the PaginationContext's minPageOption and maxPageOption
 *
 * The current logic of the pagination pages is that the active button will move to the next page number and change the
 * button's accent to blue. Now if, the next page is invisible or not yet shown (becaue there is a limit of minPageOption & maxPageOption),
 * the component will re-render with new minPageOption and maxPageOption with the pages not shown before.
 *
 * For this component to work, the Pagination redux reducer & states is needed to be used.
 */

function Pagination() {
  return (
    <div className="w-min flex flex-row justify-center items-center gap-3">
      <PreviousArrowButton />

      {/* Page number buttons */}
      <PageNumberButtonsContainer />

      <NextArrowButton />
    </div>
  );
}
export default Pagination;

function Arrow({ svg, onClick }) {
  return (
    <button
      onClick={onClick}
      className="transition duration-300 rounded bg-gray-200 text-gray-800 w-8 h-8 flex items-center justify-center hover:text-my-accent hover:bg-blue-50 active:shadow active:bg-my-accent active:text-white"
    >
      {svg}
    </button>
  );
}

function Page({ pageNumber, onClick, state }) {
  const stateStyle = {
    ACTIVE: "bg-my-accent bg-opacity-50 text-white",
    IDLE: "text-gray-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${stateStyle[state]} transition duration-300 ease-linear rounded bg-gray-200 text-md  w-8 h-8 font-semibold font-serif hover:text-my-accent hover:bg-blue-50 active:shadow active:bg-my-accent active:text-white`}
    >
      {pageNumber}
    </button>
  );
}

/* single responsibility principle */
const PreviousArrowButton = () => {
  // redux
  const dispatch = useDispatch();

  return (
    <Arrow
      onClick={() => dispatch(previousPaginationPage())}
      svg={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      }
    />
  );
};

const NextArrowButton = () => {
  // redux
  const dispatch = useDispatch();
  return (
    <Arrow
      onClick={() => dispatch(nextPaginationPage())}
      svg={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      }
    />
  );
};

const PageNumberButtonsContainer = () => {
  // redux
  const dispatch = useDispatch();

  // redux product pagination reducer & states
  const minPageOption = useSelector((state) => state.PAGINATION.minPageOption);
  const maxPageOption = useSelector((state) => state.PAGINATION.maxPageOption);
  const currentPage = useSelector((state) => state.PAGINATION.currentPage);

  const getDummyArr = () => {
    let dummy = [];
    for (let i = minPageOption; i <= maxPageOption; i++) dummy.push(i);
    return dummy;
  };

  return (
    <div className="flex flex-row gap-1">
      {getDummyArr().map((number) => (
        <Page
          key={number}
          pageNumber={number}
          state={currentPage === number ? "ACTIVE" : "IDLE"}
          onClick={() => dispatch(updateActivePageNumber(number))}
        />
      ))}
    </div>
  );
};
