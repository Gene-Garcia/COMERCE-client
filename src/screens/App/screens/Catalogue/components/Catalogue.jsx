import React, { useEffect } from "react";
import Title from "../../../../../shared/Components/pages/Title";
import ProductSmall from "../../../../../shared/Components/product/ProductSmall";
import axios from "../../../../../shared/caller";
import Loading from "../../../../../shared/Loading/Loading";
import useProductPagination from "../../../../../hooks/useProductPagination";
import Pagination from "../../../../../shared/Components/pagination/Pagination";
import Filters from "./Filter/Filters";
import { batch, useDispatch } from "react-redux";
import {
  setMessage,
  setSeverity,
} from "../../../../../redux/Alert/AlertAction";

function Catalogue() {
  // redux
  const dispatch = useDispatch();

  // product pagination context
  const {
    loading,
    products: items,
    loadPaginationData,
    setLoading,
    productCountPerPage,
    currentPage,
    setTotalProductCount,
    initMinMaxPageOptions,
    computeMaxPagesPossible,
  } = useProductPagination();

  useEffect(() => {
    async function fetchItems() {
      await axios
        .get(`/api/product/available/${productCountPerPage}/${currentPage}`)
        .then((res) => {
          if (res.status === 200) {
            // iniating methods
            setTotalProductCount(res.data.productCount);
            // sets the possible number of pages
            computeMaxPagesPossible();
            initMinMaxPageOptions();

            loadPaginationData(res.data.available);
            setLoading(false);
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
        .get(`/api/product/available/${productCountPerPage}/${currentPage}`)
        .then((res) => {
          if (res.status === 200) {
            loadPaginationData(res.data.available);
            setLoading(false);
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

    setLoading(true);
    fetchItems();
  }, [currentPage]);

  return (
    <>
      <Title title="Product Catalogue" />

      <div className="flex flex-col md:flex-row my-12 mx-3 lg:mx-10 xl:mx-16 2xl:mx-28 gap-y-5 md:gap-y-0 pb-12">
        <div className="flex flex-wrap flex-row md:flex-col gap-y-8 justify-center sm:justify-start">
          <Filters />
        </div>

        <div className="flex-grow">
          {loading ? (
            <div>
              <Loading />
            </div>
          ) : (
            <>
              <div className="flex flex-wrap flex-row gap-x-4 md:gap-x-2 lg:gap-x-10 gap-y-4 sm:gap-y-8 md:gap-y-4 justify-center ">
                {items.map((item) => (
                  <ProductSmall data={item} key={item._id} />
                ))}
              </div>
              <div className="my-10 flex justify-center">
                <Pagination />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Catalogue;
