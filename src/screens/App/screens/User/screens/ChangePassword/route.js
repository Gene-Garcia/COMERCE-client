import routes from "../../../../../../shared/routes";

import ChangePassword from "./index";

const route = {
  path: routes.USER.subroutes.CHANGE_PASSWORD.path,
  component: ChangePassword,
  exact: true,
};
export default route;
