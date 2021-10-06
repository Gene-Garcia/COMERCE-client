import { useContext } from "react";
import RateContext from "../context/RateContext";

function useRate() {
  const {
    loading,
    setLoading,
    loadProducts,
    setSelectedProduct,
    setRating,
    onCommentChange,
    getProductById,
    state: { products, selected, rating, comment },
  } = useContext(RateContext);

  return {
    loading,
    setLoading,
    products,
    selected,
    rating,
    comment,
    loadProducts,
    setSelectedProduct,
    setRating,
    onCommentChange,
    getProductById,
  };
}
export { useRate };
