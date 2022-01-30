import React, { useEffect, useState } from "react";
import ProductHeadings from "../Table/ProductHeading";
import ProductRow from "../Table/ProductRow";
import axios from "../../../../../../../../../../../shared/caller";
import { useHistory } from "react-router-dom";
import Loading from "../../../../../../../../../../../shared/Loading/Loading";
import { batch, useDispatch } from "react-redux";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../../../../redux/Alert/AlertAction";

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
    <div className="overflow-x-scroll md:overflow-x-auto pb-4 space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-8 2xl:space-y-10">
      <ProductHeadings />
      {loading ? (
        <div className="rounded-lg bg-my-white-tint py-8 flex items-center">
          <Loading />
        </div>
      ) : (
        <div className="w-rr50 md:w-full flex flex-col gap-y-4 md:gap-y-5">
          {products.map((e, i) => (
            <ProductRow data={e} key={i} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Overview;
