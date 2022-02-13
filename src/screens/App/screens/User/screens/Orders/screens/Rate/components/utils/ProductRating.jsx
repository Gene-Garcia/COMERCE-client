import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setRating } from "../../../../../../../../../../redux/RateOrder/RateOrderAction";

function ProductRating() {
  // redux
  const dispatch = useDispatch();

  const [hoverStar, setHoverStar] = useState([
    false, // 1 rating
    false, // 2 rating
    false, // 3 rating
    false, // 4 rating
    false, // 5 rating
  ]);

  // upon exit of the mouse, the hover star will retain its value so that we would be able to save the value
  function mouseOver(id) {
    setHoverStar((prev) => {
      let temp = [];
      for (let i = 0; i < prev.length; i++) temp.push(i <= id ? true : false);
      return temp;
    });

    // find the index of the last true value, iterate through the array in reverse
    const lastIndex = reverseFindLastIndex();
    dispatch(setRating(lastIndex + 1));
  }

  // a function the iterates the array of star to find the first true value-in the end
  function reverseFindLastIndex() {
    let lastIndex = -1;
    for (let i = hoverStar.length - 1; i >= 0; i--)
      // if current index has the true value, break the loop
      if (hoverStar[i]) {
        lastIndex = i;
        break;
      }
    return lastIndex;
  }

  return (
    <div>
      <p className="text-gray-300 uppercase text-sm font-semibold">
        Product Rating
      </p>

      <div className="flex flex-row gap-1">
        {hoverStar.map((e, i) => (
          <Star key={i} id={i} hovered={e} over={mouseOver} />
        ))}
      </div>
    </div>
  );
}
export default ProductRating;

function Star({ id, hovered, over }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-12 w-12 ${hovered ? "text-my-accent" : "text-gray-500"}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onMouseOver={() => over(id)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );
}
