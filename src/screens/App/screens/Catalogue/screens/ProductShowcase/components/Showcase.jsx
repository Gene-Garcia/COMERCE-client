import React, { useEffect, useState } from "react";
import {
  ProductDescription,
  ProductPrice,
  ProductPurchase,
  ProductRating,
} from "../../../../../../../shared/Components/product/ProductComponents";
import axios from "../../../../../../../shared/caller";
import useAlert from "../../../../../../../hooks/useAlert";

function Showcase(props) {
  const {
    match: {
      params: { product },
    },
    history,
  } = props;

  const { setMessage, setSeverity } = useAlert();

  const [showcased, setShowcased] = useState({});

  useEffect(() => {
    async function getProduct() {
      await axios
        .get(`/api/product/item/${product}`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setShowcased({ ...res.data.product });
          }
        })
        .catch((err) => {
          setSeverity("error");
          setMessage("Product cannot be found.");
          history.push("/catalogue");
        });
    }

    getProduct();
    console.log(showcased);
  }, []);

  return (
    <>
      <div className="h-3/5 bg-gradient-to-b from-my-accent">
        <h1 className="text-4xl font-semibold text-my-contrast text-center font-sans pt-12">
          {showcased.item}
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center  mx-auto gap-x-0 lg:gap-x-12 -mt-106 mb-16 container ">
        {/* image */}
        <div className="w-11/12 lg:w-3/5">
          <img
            src={showcased.imageAddress}
            alt="showcased-product"
            className="rounded-3xl"
          />
        </div>

        {/* content */}
        <div className="w-11/12 lg:w-2/5 bg-white rounded-lg shadow-lg p-8 md:p-16 flex flex-col gap-y-20">
          {/* buy now */}
          <div>
            <p className="text-gray-500 font-medium text-xl">
              Buy now for only
            </p>
            <ProductPrice price={showcased.retailPrice} size="extralarge" />
            <br />
            <ProductPurchase productId={showcased._id} size="extralarge" />
          </div>

          {/* rating */}
          <div>
            <ProductRating size="extralarge" />
          </div>

          {/* desc */}
          <div>
            <ProductDescription desc={showcased.description} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Showcase;
