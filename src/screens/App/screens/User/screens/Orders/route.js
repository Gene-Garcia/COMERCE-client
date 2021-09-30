import routes from "../../../../../../shared/Route/routes";
import Orders from ".";

const route = {
  path: routes.USER.subroutes.ORDERS.path,
  component: Orders,
  exact: true,
};
export default route;
