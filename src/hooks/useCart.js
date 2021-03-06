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
        // console.log(err.response);
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

/*
 * Intendeded to be used inside a useEffect hook.
 * This function makes an API call to get the user's number of cart items, 0 if no logged in user.
 * It will then pass that integer to the callback function.
 *
 * The callback function are assumed to be related to be updating the state variable
 * of the cart's number of items, which is rendered, re-rendered, and found at the navbar.
 */
async function fetchCartCount(cb) {
  await axios
    .get("/api/cart/count")
    .then((res) => cb(res.data.count))
    .catch((err) => cb(0)); // raises and http error when there is no user logged in, or server-client encoutered any error
}

export { useAddToCart, fetchCartCount };
