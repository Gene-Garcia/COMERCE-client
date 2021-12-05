import React, { useEffect, useState } from "react";
import Title from "../../../../../shared/Components/pages/Title";
import ProductSmall from "../../../../../shared/Components/product/ProductSmall";
import axios from "../../../../../shared/caller";
import Loading from "../../../../../shared/Loading/Loading";
import useAlert from "../../../../../hooks/useAlert";
import FilterButton, { FilterHeader } from "./FilterButton";
import useProductPagination from "../../../../../hooks/useProductPagination";
import Pagination from "../../../../../shared/Components/pagination/Pagination";

function Catalogue() {
  const { setSeverity, setMessage } = useAlert();

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

  // the useEffect that will only run once, onMount of this component
  useEffect(() => {
    async function fetchItems() {
      await axios
        .get(`/api/product/available/${productCountPerPage}/${currentPage}`)
        .then((res) => {
          if (res.status === 200) {
            // const { available: data } = res.data;

            // iniating methods
            setTotalProductCount(res.data.productCount);
            // sets the possible number of pages
            computeMaxPagesPossible();
            initMinMaxPageOptions();

            loadPaginationData(res.data.available);
            setLoading(false);
          }
        })
        .catch((err) => {
          // console.log(err.response);
          setSeverity("error");
          setMessage("Unable to load items. Refresh the page and try again.");
        });
    }

    fetchItems();
  }, []);

  // the useEffect that will get re-triggered when current pages changes
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
        .catch((err) => {
          // console.log(err.response);
          setSeverity("error");
          setMessage("Unable to load items. Refresh the page and try again.");
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
          <div className="flex flex-col gap-y-1">
            <FilterHeader name="Product View" />

            <FilterButton name="Grid View" />
            <FilterButton name="Board View" />
          </div>

          <div className="flex flex-col gap-y-1">
            <FilterHeader name="Sort By" />

            <FilterButton name="All-time Sales" />
            <FilterButton name="Product Rating" />
          </div>

          <div className="flex flex-col gap-y-1">
            <FilterHeader name="Order by" />

            <FilterButton name="Highest Price" />
            <FilterButton name="Lowest Price" />
          </div>

          <div className="flex flex-col gap-y-1">
            <FilterHeader name="Price Range" />

            <FilterButton name="Coming Soon..." />
          </div>

          <div className="flex flex-col gap-y-1">
            <FilterHeader name="Product Category" />

            <FilterButton name="Coming Soon..." />
          </div>
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
