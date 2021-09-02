import React, { useEffect, useState } from "react";
import {
  ProductDescription,
  ProductPrice,
  ProductPurchase,
  ProductRating,
} from "../../../../../../../shared/Components/product/ProductComponents";
import axios from "../../../../../../../shared/caller";
import useAlert from "../../../../../../../hooks/useAlert";
import Loading from "../../../../../../../shared/Loading/Loading";

function Showcase(props) {
  const {
    match: {
      params: { product },
    },
    history,
  } = props;
  const [loading, setLoading] = useState(true);

  const { setMessage, setSeverity } = useAlert();

  const [showcased, setShowcased] = useState({});

  useEffect(() => {
    async function getProduct() {
      await axios
        .get(`/api/product/item/${product}`)
        .then((res) => {
          if (res.status === 200) {
            setShowcased({ ...res.data.product });
            setLoading(false);
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

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="relative h-full">
        <div className="h-3/5 bg-gradient-to-b from-my-accent">
          <h1 className="text-4xl font-semibold text-my-contrast text-center font-sans pt-16">
            {showcased.item}
          </h1>
        </div>

        <div className="absolute top-1/5 w-full mx-auto">
          <div className=" flex flex-col lg:flex-row items-center  mx-auto gap-x-0 lg:gap-x-12 gap-y-8 w-11/12 mx-auto ">
            {/* image */}
            <div className="w-11/12 lg:w-3/5">
              <img
                src={showcased.imageAddress}
                alt="showcased-product"
                className="rounded-xl mx-auto"
              />
            </div>

            {/* content */}
            <div className=" w-11/12 lg:w-2/5 bg-white rounded-xl shadow-lg p-8 sm:p-16 lg:p-10 xl:p-16 flex flex-col gap-y-20">
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
                <ProductDescription
                  desc={showcased.description}
                  fullText={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Showcase;
