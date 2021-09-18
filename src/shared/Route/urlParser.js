/*
 * A helper function that parse the url to obtain the product id with the quanity.
 *
 * Generally, this helper function would be used by the checkout page because that page
 * is triggered or rendered with the need of a url containing the products checkouted or
 * 'BUY NOW'
 *
 */
function parseUrlForProducts(d) {
  // ["{id} {quantiy}", "...", ...] is the split raw url
  const raw = d.split("|");

  // format {"id1": qty, "id2": qty} to be created
  let products = {};
  for (let i = 0; i < raw.length; i++) {
    // "{id}+{quantity}" is the value of raw[i]
    const data = raw[i].split(" ");
    // access ["id", qty] and append to products
    products[data[0]] = data[1];
  }

  return products;
}

/*
 * A helper function that converts products object to url-ready and checkout page-ready path
 *
 */
function prepareUrlForProducts(products) {
  if (!products || products.length <= 0) return "";

  // extract id and quantity that is checkout=true
  // delimeter + and |

  let url = "";
  for (let i = 0; i < products.length; i++) {
    if (products[i].checkout) {
      url += `${products[i].productId}+${products[i].quantity}|`;
    }
  }

  // remove the additional delimeter at the end
  return url;
}

export { parseUrlForProducts, prepareUrlForProducts };
