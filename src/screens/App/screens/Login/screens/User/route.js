import routes from "../../../../../../shared/Route/routes";
import Login from ".";

export default {
  path: routes.LOGIN.subroutes.USER.path,
  component: Login,
  exact: true,
};
