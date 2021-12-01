import routes from "../../../../../../shared/Route/routes";
import SignUp from ".";

export default {
  path: routes.SIGN_UP.subroutes.USER.path,
  component: SignUp,
  exact: true,
};
