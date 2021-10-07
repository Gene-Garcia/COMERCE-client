import React, { useState } from "react";
import { useRate } from "../../../../../../../../../hooks/useRate";
import Button from "../../../../../../../../../shared/Components/button/Button";
import { ProductCardDisplay } from "./utils/ProductCard";
import ProductRating from "./utils/ProductRating";

function SelectedProduct({ data }) {
  // textarea state
  const [comment, setComment] = useState("");

  // rate context
  const { loading, selected } = useRate();

  return (
    <>
      {loading || !selected ? (
        <></>
      ) : (
        <div className="space-y-10">
          <ProductCardDisplay data={selected} />

          <div className="space-y-8">
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
                onChange={(e) => {
                  const {
                    target: { value },
                  } = e;
                  setComment(value);
                }}
              ></textarea>
            </div>

            {/* CTA */}
            <Button
              isLoading={false}
              buttonClass="transition bg-my-accent px-14 py-3 rounded-md shadow text-my-contrast font-medium text-lg hover:bg-my-accent-mono"
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
