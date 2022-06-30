import React, { useEffect, useState } from "react";
import ProductRow from "../Table/ProductRow";
import axios from "../../../../../../../../../../../shared/caller";
import { useHistory } from "react-router-dom";
import { batch, useDispatch } from "react-redux";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../../../../redux/Alert/AlertAction";
import SpaciousTable, {
  Body,
  Data,
  Head,
  Heading,
  SkeletonForText,
  SkeletonRow,
} from "../../../../../../../../../../../shared/Components/table/SpaciousTable";
import ProductSkeleton from "../Table/ProductSkeleton";

function Overview() {
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // api to get products
  useEffect(() => {
    async function getProducts() {
      axios
        .get("/api/seller/products")
        .then((res) => {
          if (res.status === 200) {
            setLoading(false);
            setProducts(res.data.products);

            if (!res.data.products)
              batch(() => {
                dispatch(setSeverity("information"));
                dispatch(setMessage("No products was found."));
              });
          }
        })
        .catch((err) => {
          setLoading(false);

          if (!err.response)
            batch(() => {
              dispatch(setSeverity("error"));
              dispatch(
                setMessage(
                  "Something went wrong. Please refresh your browser and try again"
                )
              );
            });
          else if (err.response.status === 403) history.push("/forbidden");
          else if (err.response.status === 401) history.push("/unauthorized");
          else
            batch(() => {
              dispatch(setSeverity("error"));
              dispatch(setMessage(err.response.data.error));
            });
        });
    }

    setLoading(true);
    getProducts();
  }, []);

  // cleanup
  useEffect(() => () => setProducts([]), []);

  return (
    <div className="min-w-rr60 overflow-auto bg-transparent">
      <SpaciousTable>
        <Head grid="grid-cols-14">
          <Heading className="col-span-1">Order ID</Heading>
          <Heading className="col-span-2">Image</Heading>
          <Heading className="col-span-3">Product Name</Heading>
          <Heading className="col-span-2">Retail</Heading>
          <Heading className="col-span-2">Wholesale</Heading>
          <Heading className="col-span-2">Onhand</Heading>
          <Heading className="col-span-2">Actions</Heading>
        </Head>

        <Body>
          {loading ? (
            <ProductSkeleton />
          ) : (
            products.map((product) => (
              <ProductRow data={product} key={product._id} />
            ))
          )}
        </Body>
      </SpaciousTable>
    </div>
  );
}
export default Overview;
