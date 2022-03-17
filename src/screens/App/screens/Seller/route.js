import routes from "../../../../shared/Route/routes";
import Dashboard from ".";

import ManageSubRoute from "./screens/Manage/route";
import ShipmentSubRoute from "./screens/Shipment/route";
import OrdersSubRoute from "./screens/Orders/route";

const route = {
  path: routes.SELLER.path,
  component: Dashboard,
  exact: true,

  subroutes: {
    MANAGE: ManageSubRoute,
    SHIPMENT: ShipmentSubRoute,
    ORDERS: OrdersSubRoute,
  },
};
export default route;
