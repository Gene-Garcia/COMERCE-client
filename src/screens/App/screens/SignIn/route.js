import routes from "../../../../shared/routes";
import SignIn from "./index";

const route = {
  path: routes.SIGN_IN.path,
  component: SignIn,
  exact: true,
};
export default route;
