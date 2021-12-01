import routes from "../../../../shared/Route/routes";

import Checkout from ".";

const route = {
  component: Checkout,
  path: routes.CHECKOUT.path,
  exact: true,
};
export default route;
