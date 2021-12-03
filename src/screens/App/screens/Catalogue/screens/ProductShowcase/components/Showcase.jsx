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
import { Link } from "react-router-dom";

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
    <div>
      <div className="bg-gray-200 p-5 xs:p-12 sm:p-20 md:p-12 lg:p-16 xl:p-28 flex flex-col md:flex-row md:justify-around">
        {/* content PRICE IS STILL MISSING */}
        <div className="md:w-2/5 space-y-16">
          <div className="space-y-1.5">
            <h1 className="font-bold text-4xl text-gray-600">
              / {showcased.item}
            </h1>

            <div>
              <ProductRating
                size="large"
                rating={showcased.rating}
                style="greyscale"
              />
            </div>
          </div>

          <ProductDescription desc={showcased.description} fullText={true} />

          {/* CTA */}
          <div>
            <ProductPurchase
              productId={showcased._id}
              size="extralarge"
              style="showcase"
            />
          </div>

          <div>
            <Link
              to="/catalogue"
              className="inline-flex items-center gap-2.5 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 transition duration-150 ease-linear group-hover:text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="text-gray-500 font-medium transition duration-150 ease-linear group-hover:text-gray-900">
                return
              </span>
            </Link>
          </div>
        </div>

        <img
          src={showcased.imageAddress}
          alt={showcased.item}
          className="order-first md:order-last h-auto md:h-80 lg:h-96 m-auto filter drop-shadow-2xl object-scale-down bg-transparent"
        />
      </div>
    </div>
  );
}
export default Showcase;
