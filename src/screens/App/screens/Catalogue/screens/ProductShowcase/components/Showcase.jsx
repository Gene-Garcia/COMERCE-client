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
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="h-3/5 2xl:h-auto bg-gradient-to-b from-my-accent">
        <h1 className="text-4xl font-medium text-white text-center font-sans py-20 2xl:pb-36 px-2">
          {showcased.item}
        </h1>
      </div>

      <div className="w-full mx-auto -my-80 2xl:my-auto pb-4 sm:pb-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch 2xl:items-start justify-evenly mx-auto gap-x-0 lg:gap-x-8 xl:gap-x-12 gap-y-8 mx-auto px-4 lg:px-20">
          {/* image */}
          <div className="flex-shrink flex-grow-0 w-full sm:w-9/12 md:w-2/4 lg:w-5/12 xl:w-3/5 2xl:w-2/5">
            <img
              src={showcased.imageAddress}
              alt="showcased-product"
              className="rounded-xl mx-auto"
            />
          </div>

          {/* content */}
          <div className="flex-shrink-0 flex-grow w-full sm:w-10/12 md:3/5 lg:w-7/12 xl:w-2/5 2xl:w-2/5 bg-white rounded-xl shadow-lg p-6 sm:p-12 lg:p-12 xl:p-16 flex flex-col gap-y-4 sm:gap-y-10 lg:gap-y-16 xl:gap-y-20">
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
              <ProductRating size="extralarge" rating={showcased.rating} />
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
    </>
  );
}

export default Showcase;
