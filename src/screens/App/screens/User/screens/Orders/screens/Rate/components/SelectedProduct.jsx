import React from "react";
import { useHistory } from "react-router";
import { useRate } from "../../../../../../../../../hooks/useRate";
import { ProductCardDisplay } from "./utils/ProductCard";
import ProductRating from "./utils/ProductRating";
import axios from "../../../../../../../../../shared/caller";
import { FormButton } from "../../../../../../../../../shared/Components/button/ButtonBase";
import { batch, useDispatch } from "react-redux";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../../redux/Alert/AlertAction";

function SelectedProduct() {
  // history
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

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
    loading,
    setLoading,
  } = useRate();

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
    } else {
      const bodyData = {
        product: {
          productId: selected.productId,
          orderId: selected.orderId,
        },
        rating,
        comment,
      };

      setLoading(true);
      // API request
      await axios
        .patch("/api/rate/save", bodyData)
        .then((res) => {
          // success
          if (res.status === 200) {
            batch(() => {
              dispatch(setSeverity("success"));
              dispatch(setMessage(res.data.message));
            });

            setProductToRated(selected.productId, selected.orderId);

            resetRateValuesToDefault();

            nextProductToRate();

            setLoading(false);
          }
        })
        .catch((err) => {
          if (!err.response)
            batch(() => {
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
              dispatch(setSeverity("error"));
              dispatch(setMessage(err.response.data.error));
            });
        });
    }
  }

  return (
    <>
      {!selected ? (
        <></>
      ) : (
        <div className="space-y-6 xl:space-y-8 2xl:space-y-10">
          <ProductCardDisplay data={selected} />

          <ProductRating />

          {/* Comments */}
          <div>
            <p className="text-gray-300 uppercase text-sm font-semibold">
              Comments
            </p>
            <textarea
              type="text"
              className="w-full rounded-md shadow-sm bg-gray-50 h-2/5 p-3 transition duration-200 ease-linear  focus:outline-none focus-within:shadow-lg"
              placeholder="Share us your thoughts about this product"
              rows="7"
              value={comment}
              onChange={onCommentChange}
            ></textarea>
          </div>

          {/* CTA */}
          <FormButton
            size="MEDIUM"
            isLoading={loading}
            text="Submit Rating"
            textColor="text-white"
            onClick={submitRatingForCurrent}
          />
        </div>
      )}
    </>
  );
}
export default SelectedProduct;
