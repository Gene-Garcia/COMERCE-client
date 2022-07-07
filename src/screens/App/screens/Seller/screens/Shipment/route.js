import routes from "../../../../../../shared/Route/routes";

import OrderSubRoute from "./screens/Orders/route";
import PackSubroute from "./screens/Pack/route";
import FulfilledSubRoute from "./screens/Fulfilled/route";

export default {
  path: null,
  component: null,
  subroutes: {
    ORDERS: OrderSubRoute,
    PACK: PackSubroute,
    FULFILLED: FulfilledSubRoute,
  },
};
