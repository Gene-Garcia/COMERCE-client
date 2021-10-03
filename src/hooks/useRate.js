import { useContext } from "react";
import RateContext from "../context/RateContext";

function useRate() {
  const {
    state: { products, selected, rating, comment },
    loadProducts,
    setSelectedProduct,
    setRating,
    onCommentChange,
  } = useContext(RateContext);

  return {
    products,
    selected,
    rating,
    comment,
    loadProducts,
    setSelectedProduct,
    setRating,
    onCommentChange,
  };
}
export { useRate };
