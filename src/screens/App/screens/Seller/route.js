import routes from "../../../../shared/Route/routes";
import Dashboard from ".";

import ManageSubroute from "./screens/Manage/route";
import ShipmentSubroute from "./screens/Shipment/route";
import OrdersSubroute from "./screens/Orders/route";
import SettingsSubroute from "./screens/Settings/route";

const route = {
  path: routes.SELLER.path,
  component: Dashboard,
  exact: true,

  subroutes: {
    MANAGE: ManageSubroute,
    SHIPMENT: ShipmentSubroute,
    ORDERS: OrdersSubroute,
    SETTINGS: SettingsSubroute,
  },
};
export default route;
