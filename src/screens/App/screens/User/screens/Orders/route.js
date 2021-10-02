import routes from "../../../../../../shared/Route/routes";
import Orders from ".";

// subroute
import RateRoute from "./screens/Rate/route";

const route = {
  path: routes.USER.subroutes.ORDERS.path,
  component: Orders,
  exact: true,
  subroutes: {
    RATE: RateRoute,
  },
};
export default route;
