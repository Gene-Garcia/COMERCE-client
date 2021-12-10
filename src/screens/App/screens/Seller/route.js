import routes from "../../../../shared/Route/routes";
import Dashboard from ".";

import ManageSubRoute from "./screens/Manage/route";

const route = {
  path: routes.SELLER.path,
  component: Dashboard,
  exact: true,

  subroutes: {
    MANAGE: ManageSubRoute,
  },
};
export default route;
