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
    resetRateValuesToDefault,
    state: { products, selected, rating, comment },
    setProductToRated,
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
    resetRateValuesToDefault,
    setProductToRated,
  };
}
export { useRate };
