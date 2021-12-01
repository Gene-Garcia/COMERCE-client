/*
 * the helper function will format the the number string to
 *  1. number with 2 decimal places, .00 of no decimal value
 *  2. that number will now be added with commas
 *
 */
function formatPrice(n) {
  return numberWithCommas(parseFloat(n).toFixed(2));
}

/*
 * this helper function will convert a number or string of number, which is
 * assumed to money, to string with commas.
 *
 * ref: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
 */
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export { formatPrice };
