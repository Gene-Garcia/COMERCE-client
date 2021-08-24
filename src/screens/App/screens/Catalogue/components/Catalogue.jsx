import React, { useEffect, useState } from "react";
import Title from "../../../../../shared/Components/pages/Title.Page";
import ProductSmall from "../../../../../shared/Components/product/Product.Small";
import axios from "../../../../../shared/caller";

function Button({ name }) {
  return (
    <button className="w-36 text-left px-2 py-1 font-medium text-gray-700 rounded-md hover:bg-gray-200    ">
      {name}
    </button>
  );
}

function Catalogue() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      await axios
        .get("/api/product/available")
        .then((res) => {
          if (res.status === 200) {
            // const { available: data } = res.data;
            setItems(res.data.available);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    }

    fetchItems();
  }, []);

  return (
    <>
      <Title title="Product Catalogue" />

      <div className="flex flex-wrap sm:flex-nowrap my-12 mx-3 lg:mx-10 xl:mx-16 2xl:mx-28 gap-y-5 sm:gap-y-0">
        <div className="w-full sm:w-52 flex flex-wrap flex-row sm:flex-col gap-y-10 justify-center sm:justify-start">
          <div className="flex flex-col gap-y-1">
            <span className="text-sm font-semibold text-gray-400">
              Product View
            </span>
            <Button name="Grid View" />
            <Button name="Board View" />
          </div>

          <div className="flex flex-col gap-y-1">
            <span className="text-sm font-semibold text-gray-400">Sort By</span>
            <Button name="All-time Sales" />
            <Button name="Product Rating" />
          </div>

          <div className="flex flex-col gap-y-1">
            <span className="text-sm font-semibold text-gray-400">
              Order by
            </span>
            <Button name="Highest Price" />
            <Button name="Lowest Price" />
          </div>

          <div className="flex flex-col gap-y-1">
            <span className="text-sm font-semibold text-gray-400">
              Price Range
            </span>
            <Button name="Coming Soon..." />
          </div>

          <div className="flex flex-col gap-y-1">
            <span className="text-sm font-semibold text-gray-400">
              Product Category
            </span>
            <Button name="Coming Soon..." />
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex flex-col items-center  sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-14">
            {items.map((item) => (
              <ProductSmall data={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalogue;
