import routes from "../../../../../../shared/Route/routes";

// sub routes
import OrdersMasterSubroute from "./screens/Master/route";

export default {
  path: undefined,
  component: undefined,
  exact: undefined,

  subroutes: {
    MASTER: OrdersMasterSubroute,
  },
};
