import routes from "../../../../../../shared/routes";

import ResetPassword from "./index";

export default {
  path: routes.PASSWORD.subroutes.RESET_PASSWORD.path,
  component: ResetPassword,
  exact: true,
};
