import routes from "../../../../../../shared/routes";

import ForgotPassword from "./index";

export default {
  path: routes.PASSWORD.subroutes.FORGOT_PASSWORD.path,
  component: ForgotPassword,
  exact: true,
};
