import routes from "../../../../shared/Route/routes";
import Dashboard from ".";

import ManageSubRoute from "./screens/Manage/route";
import ShipmentSubRoute from "./screens/Shipment/route";

const route = {
  path: routes.SELLER.path,
  component: Dashboard,
  exact: true,

  subroutes: {
    MANAGE: ManageSubRoute,
    SHIPMENT: ShipmentSubRoute,
  },
};
export default route;
