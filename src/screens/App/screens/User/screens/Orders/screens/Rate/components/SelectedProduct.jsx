import React from "react";
import { useHistory } from "react-router";
import useAlert from "../../../../../../../../../hooks/useAlert";
import { useRate } from "../../../../../../../../../hooks/useRate";
import Button from "../../../../../../../../../shared/Components/button/Button";
import { ProductCardDisplay } from "./utils/ProductCard";
import ProductRating from "./utils/ProductRating";
import axios from "../../../../../../../../../shared/caller";

function SelectedProduct() {
  // history
  const history = useHistory();
  // rate context
  // onCommentChange is a wrapper itself that destructures the event
  const {
    selected,
    comment,
    onCommentChange,
    rating,
    resetRateValuesToDefault,
    setProductToRated,
    nextProductToRate,
  } = useRate();

  // alert context
  const { setSeverity, setMessage } = useAlert();

  // onClick submit function
  async function submitRatingForCurrent() {
    if (rating === -1) {
      setSeverity("error");
      setMessage(
        "Select a rating for this product. You may hover on the stars."
      );
    } else {
      const bodyData = {
        product: {
          productId: selected.productId,
          orderId: selected.orderId,
        },
        rating,
        comment,
      };

      // API request
      await axios
        .patch("/api/rate/save", bodyData)
        .then((res) => {
          // success
          if (res.status === 200) {
            setMessage(res.data.message);
            setProductToRated(selected.productId, selected.orderId);
            resetRateValuesToDefault();
            nextProductToRate();
          }
        })
        .catch((err) => {
          setSeverity("error");

          if (!err.response) {
            setMessage(
              "We apologise something went wrong in saving your product rating. Try again later."
            );
            history.push("/");
          } else if (err.response.status === 401 || err.response.status === 403)
            history.push("/login");
          else setMessage(err.response.data.error);
        });
    }
  }

  return (
    <>
      {!selected ? (
        <></>
      ) : (
        <div className="space-y-6 lg:space-y-8">
          <ProductCardDisplay data={selected} />

          <div className="space-y-6 lg:space-y-8">
            <ProductRating />

            {/* Comments */}
            <div>
              <p className="text-gray-400">Comments</p>
              <textarea
                type="text"
                className="transition duration-200 w-full rounded-md shadow bg-gray-100 h-2/5 p-3 focus:outline-none focus-within:shadow-lg"
                placeholder="Share us your thoughts about this product"
                rows="7"
                value={comment}
                onChange={onCommentChange}
              ></textarea>
            </div>

            {/* CTA */}
            <Button
              isLoading={false}
              buttonClass="transition bg-my-accent px-14 py-3 rounded-md shadow text-my-contrast font-medium text-lg hover:bg-my-accent-mono"
              onClick={submitRatingForCurrent}
            >
              Submit Rating
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
export default SelectedProduct;
