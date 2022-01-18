import routes from "../../../../../../../../shared/Route/routes";
import Orders from ".";

export default {
  path: routes.SELLER.subroutes.SHIPMENT.subroutes.ORDERS.path,
  component: Orders,
  exact: true,
};
