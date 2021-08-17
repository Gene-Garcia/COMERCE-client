import routes from "../../../../../../shared/routes";

import ChangePassword from "./index";

export default {
  path: routes.USER.subroutes.CHANGE_PASSWORD.path,
  component: ChangePassword,
  exact: true,
};
