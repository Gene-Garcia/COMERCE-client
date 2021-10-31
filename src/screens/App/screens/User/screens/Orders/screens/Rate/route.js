import routes from "../../../../../../../../shared/Route/routes";
import Rate from ".";

const route = {
  path: routes.USER.subroutes.ORDERS.subroutes.RATE.path,
  component: Rate,
  exact: true,
};
export default route;
