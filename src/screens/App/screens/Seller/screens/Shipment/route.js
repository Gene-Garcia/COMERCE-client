import routes from "../../../../../../shared/Route/routes";

import OrderSubRoute from "./screens/Orders/route";
import FulfilledSubRoute from "./screens/Fulfilled/route";

export default {
  path: null,
  component: null,
  subroutes: {
    ORDERS: OrderSubRoute,
    FULFILLED: FulfilledSubRoute,
  },
};
