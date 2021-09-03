import axios from "../shared/caller";

/*
 * A reusable function that is embedded to an add to cart function button.
 * When called, it will trigger the API call using the unique 'productId'
 * assigned to an add to cart button.
 *
 * The success and fail callback function is responsible for calling that callback
 * add passing the the response for success and error for failed.
 * The embedded add to cart to button will have their own callback functions.
 */
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

function useGetCartCount() {}

export { useAddToCart, useGetCart };
