import routes from "../../../../../../../../shared/Route/routes";
import OrdersMaster from ".";

export default {
  path: routes.SELLER.subroutes.ORDERS.subroutes.MASTER.path,
  component: OrdersMaster,
  exact: true,
};
