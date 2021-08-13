import routes from "../../../../shared/routes";
import UserIndex from "./index";

// subroute
import ChangePasswordRoute from "./screens/ChangePassword/route";

export default {
  path: routes.USER.path,
  component: UserIndex,
  exact: true,
  subroutes: {
    CHANGE_PASSWORD: ChangePasswordRoute,
  },
};
