/*
 * A personalized isEmpty utility function that tell a string is empty
 * not only by it being literraly empty
 * but also when it is equal to the empty field placeholder
 *
 * THIS IS TEMPORARY UNTIL THE USEFORM is MODIFIED with is formIsValid parameter
 */
const isEmpty = (s) => {
  const placeholder = "|comerce-seller-placeholder|";

  if (s === placeholder) return true;
  else if (!s) return true;

  return false;
};
export default isEmpty;
