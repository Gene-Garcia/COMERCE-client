import React, { memo, useEffect, useState } from "react";
import Title from "../../../../../shared/Components/pages/Title";
import ProductSmall from "../../../../../shared/Components/product/ProductSmall";
import axios from "../../../../../shared/caller";
import Loading from "../../../../../shared/Loading/Loading";
import Pagination from "../../../../../shared/Components/pagination/Pagination";
import Filters from "./Filter/Filters";
import { batch, useDispatch, useSelector } from "react-redux";
import {
  setMessage,
  setSeverity,
} from "../../../../../redux/Alert/AlertAction";
import {
  computeMaxPagesPossible,
  initializePageRange,
  loadPaginatedItems,
  resetToDefault as resetPaginationToDefault,
  setTotalItemsCount,
  updateLoading,
} from "../../../../../redux/Pagination/PaginationAction";

function Catalogue() {
  // redux
  const dispatch = useDispatch();

  // redux pagination reducer & state
  const itemCountPerPage = useSelector(
    (state) => state.PAGINATION.itemCountPerPage
  );
  const currentPage = useSelector((state) => state.PAGINATION.currentPage);

  useEffect(() => {
    async function fetchItems() {
      await axios
        .get(`/api/product/available/${itemCountPerPage}/${currentPage}`)
        .then((res) => {
          if (res.status === 200) {
            batch(() => {
              // initiating methods
              dispatch(setTotalItemsCount(res.data.productCount));
              // sets the possible number of pages
              dispatch(computeMaxPagesPossible());
              dispatch(initializePageRange());

              dispatch(loadPaginatedItems(res.data.available));

              dispatch(updateLoading(false));
            });
          }
        })
        .catch(() => {
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(
              setMessage(
                "Unable to load items. Refresh the page and try again."
              )
            );
          });
        });
    }

    fetchItems();
  }, []);

  // re-triggered when current pages changes
  useEffect(() => {
    async function fetchItems() {
      await axios
        .get(`/api/product/available/${itemCountPerPage}/${currentPage}`)
        .then((res) => {
          if (res.status === 200) {
            batch(() => {
              dispatch(loadPaginatedItems(res.data.available));
              dispatch(updateLoading(false));
            });
          }
        })
        .catch(() => {
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(
              setMessage(
                "Unable to load items. Refresh the page and try again."
              )
            );
          });
        });
    }

    dispatch(updateLoading(true));
    fetchItems();
  }, [currentPage]);

  // clean up
  useEffect(() => {
    return () => {
      batch(() => {
        dispatch(updateLoading(true));
        dispatch(resetPaginationToDefault());
      });
    };
  }, []);

  return (
    <>
      <Title title="Product Catalogue" />

      <div className="flex flex-col md:flex-row my-12 mx-3 lg:mx-10 xl:mx-16 2xl:mx-28 gap-y-5 md:gap-y-0 pb-12">
        <div className="flex flex-wrap flex-row md:flex-col gap-y-8 justify-center sm:justify-start">
          <Filters />
        </div>

        <div className="flex-grow">
          <ProductsContainer />
        </div>
      </div>
    </>
  );
}

export default Catalogue;

/* single responsibility principle */

const ProductsContainer = () => {
  // redux pagination reducer & state
  const loading = useSelector((state) => state.PAGINATION.loading);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap flex-row gap-x-4 md:gap-x-2 lg:gap-x-10 gap-y-4 sm:gap-y-8 md:gap-y-4 justify-center ">
            <RenderProducts />
          </div>
          <div className="my-10 flex justify-center">
            <Pagination />
          </div>
        </>
      )}
    </>
  );
};

const RenderProducts = memo(() => {
  // redux pagination reducer & state
  const items = useSelector((state) => state.PAGINATION.items);

  return (
    <>
      {items.map((item) => (
        <ProductSmall data={item} key={item._id} />
      ))}
    </>
  );
});
