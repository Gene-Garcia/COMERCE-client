import routes from "../../../../../../shared/routes";

import ResetPassword from "./index";

const route = {
  path: routes.PASSWORD.subroutes.RESET_PASSWORD.path,
  component: ResetPassword,
  exact: true,
};
export default route;
