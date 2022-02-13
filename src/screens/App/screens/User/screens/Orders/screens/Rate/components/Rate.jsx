import React, { useEffect } from "react";
import Container from "../../../../../../../../../shared/Components/pages/Container";
import Title from "../../../../../../../../../shared/Components/pages/Title";
import ProductLinks from "./ProductLinks";
import SelectedProduct from "./SelectedProduct";
import axios from "../../../../../../../../../shared/caller";
import { batch, useDispatch, useSelector } from "react-redux";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../../redux/Alert/AlertAction";
import {
  loadProducts,
  resetValues as resetRateOrderValuesToDefault,
  updateLoading,
  updateSelectedProduct,
} from "../../../../../../../../../redux/RateOrder/RateOrderAction";
import { Link } from "react-router-dom";

function Rate({ history }) {
  // redux
  const dispatch = useDispatch();

  // redux rate order reducer & state
  const selectedProduct = useSelector((s) => s.RATE_ORDER.selectedProduct);
  const loading = useSelector((s) => s.RATE_ORDER.loading);

  // API Fetch Data
  useEffect(() => {
    async function getProducts() {
      await axios
        .get("/api/rate/unrated")
        .then((res) => {
          if (res.status === 200) {
            const products = res.data.products;

            batch(() => {
              dispatch(loadProducts(products));

              // set the default active to-rate product
              dispatch(
                updateSelectedProduct(products.length > 0 ? products[0] : null)
              );

              dispatch(updateLoading(false));
            });
          }
        })
        .catch((err) => {
          if (!err.response)
            batch(() => {
              dispatch(updateLoading(false));
              dispatch(setSeverity("error"));
              dispatch(
                setMessage(
                  "Something went wrong in fetching the products to rate. Please try again."
                )
              );
            });
          else if (err.response.status === 401) history.push("/forbidden");
          else if (err.response.status === 403) history.push("/unauthorized");
          else
            batch(() => {
              dispatch(updateLoading(false));
              dispatch(setSeverity("error"));
              dispatch(setMessage(err.response.data.error));
            });
        });
    }

    getProducts();
  }, []);

  // cleanup
  useEffect(() => {
    return () => dispatch(resetRateOrderValuesToDefault());
  }, []);

  return (
    <>
      <Title title="Rate Orders" />

      <Container xSpacing="px-4 md:px-8 lg:px-10 xl:px-16">
        {!selectedProduct && loading !== true ? (
          <div>
            <p>No products to rate</p>
            <Link to="/user/orders">Return to your orders</Link>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-3 md:gap-7 xl:gap-10">
            <div className="w-full md:w-2/5">
              <div className="rounded-lg shadow-lg py-5 xs:py-7 md:py-5 lg:py-7">
                <p className="font-medium text-lg text-gray-600 mb-4 xl:mb-6 font-serif px-5 xs:px-7 md:px-5 lg:px-7">
                  Products To Rate
                </p>

                <ProductLinks />
              </div>
            </div>

            <div className="w-full md:w-3/5">
              <div className="rounded-lg shadow-lg p-5 xs:p-7 md:p-5 lg:p-7">
                <p className="font-medium text-lg text-gray-600 mb-4 xl:mb-6 font-serif">
                  Selected Product
                </p>

                <SelectedProduct />
              </div>
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
export default Rate;
