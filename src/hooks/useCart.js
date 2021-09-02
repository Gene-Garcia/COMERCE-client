import axios from "../shared/caller";

function useAddToCart(productId, callbackSuccess, callbackFailed) {
  const patchAddToCart = async () => {
    await axios
      .patch("/api/cart/add", { productId })
      .then((res) => {
        console.log(res);
        if (callbackSuccess) callbackSuccess(res);
      })
      .catch((err) => {
        console.log(err.response);
        if (callbackFailed) callbackFailed(err);
      });
  };

  const addToCartClick = () => {
    patchAddToCart();
  };

  return {
    addToCartClick,
  };
}

function useGetCart() {}

export { useAddToCart, useGetCart };
