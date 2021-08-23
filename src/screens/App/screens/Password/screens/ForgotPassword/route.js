import routes from "../../../../../../shared/Route/routes";

import ForgotPassword from "./index";

const route = {
  path: routes.PASSWORD.subroutes.FORGOT_PASSWORD.path,
  component: ForgotPassword,
  exact: true,
};
export default route;
