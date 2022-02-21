import React, { memo } from "react";
import { useHistory } from "react-router";
import { ProductCardDisplay } from "./utils/ProductCard";
import ProductRating from "./utils/ProductRating";
import axios from "../../../../../../../../../shared/caller";
import { FormButton } from "../../../../../../../../../shared/Components/button/ButtonBase";
import { batch, useDispatch, useSelector } from "react-redux";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../../redux/Alert/AlertAction";
import {
  onCommentChange,
  toggleNextProductToRate,
  updateLoading,
  updateProductRatingStatus,
} from "../../../../../../../../../redux/RateOrder/RateOrderAction";

const SelectedProduct = memo(() => {
  // redux rate order reducer & states
  const loading = useSelector((s) => s.RATE_ORDER.loading);

  return (
    <>
      {loading ? (
        <>Loading...</>
      ) : (
        <div className="space-y-6 xl:space-y-8 2xl:space-y-10">
          <ProductCardDisplay />

          {/* stars hover */}
          <ProductRating />

          {/* Comments */}
          <CommentInputContainer />

          {/* CTA */}
          <SubmitRateContainer />
        </div>
      )}
    </>
  );
});
export default SelectedProduct;

/* single responsibility principle */

const CommentInputContainer = () => {
  // redux
  const dispatch = useDispatch();

  // redux rate order reducer & states
  const comment = useSelector((s) => s.RATE_ORDER.comment);

  return (
    <div>
      <p className="text-gray-300 uppercase text-sm font-semibold">Comments</p>
      <textarea
        type="text"
        className="w-full rounded-md shadow-sm bg-gray-50 h-2/5 p-3 transition duration-200 ease-linear  focus:outline-none focus-within:shadow-lg"
        placeholder="Share us your thoughts about this product"
        rows="7"
        value={comment}
        onChange={(e) => dispatch(onCommentChange(e))}
      ></textarea>
    </div>
  );
};

const SubmitRateContainer = () => {
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  // redux rate order reducer & state
  const selected = useSelector((s) => s.RATE_ORDER.selectedProduct);
  const rating = useSelector((s) => s.RATE_ORDER.rating);
  const loading = useSelector((s) => s.RATE_ORDER.loading);
  const comment = useSelector((s) => s.RATE_ORDER.comment);

  // onClick submit function
  async function submitRatingForCurrent() {
    if (rating === -1) {
      batch(() => {
        dispatch(setSeverity("error"));
        dispatch(
          setMessage(
            "Select a rating for this product. You may hover on the stars."
          )
        );
      });
    } else if (!comment) {
      batch(() => {
        dispatch(setSeverity("error"));
        dispatch(
          setMessage(
            "Comment about the product is required. Have any thoughts?"
          )
        );
      });
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
            batch(() => {
              dispatch(setSeverity("success"));
              dispatch(setMessage(res.data.message));

              dispatch(
                updateProductRatingStatus(
                  selected.productId,
                  selected.orderId,
                  true
                )
              );
              // dispatch(resetRateOrderToDefault());
              /*
              should this be inside of this batch?
              because maybe, it will still make the current product
              as selected because we have not yet allowed react
              to re-render the above dispatch which is to set this product-order
              rating status' to true
              */
              dispatch(toggleNextProductToRate());
              dispatch(updateLoading(false));
            });

            // we need to the following after the batch, because we want the selected to be updated.
          }
        })
        .catch((err) => {
          if (!err.response)
            batch(() => {
              dispatch(updateLoading(false));
              dispatch(setSeverity("error"));
              dispatch(
                setMessage(
                  "We apologise something went wrong in saving your product rating. Please try again."
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
  }

  return (
    <FormButton
      size="MEDIUM"
      isLoading={loading}
      text="Submit Rating"
      textColor="text-white"
      onClick={submitRatingForCurrent}
    />
  );
};
