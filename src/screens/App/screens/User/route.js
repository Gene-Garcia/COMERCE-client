import routes from "../../../../shared/Route/routes";
import UserIndex from "./index";

// subroute
import ChangePasswordRoute from "./screens/ChangePassword/route";

const route = {
  path: routes.USER.path,
  component: UserIndex,
  exact: true,
  subroutes: {
    CHANGE_PASSWORD: ChangePasswordRoute,
  },
};
export default route;
