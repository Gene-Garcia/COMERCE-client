import routes from "../../../../shared/Route/routes";
import SignOut from "./index";

const route = {
  path: routes.SIGN_OUT.path,
  component: SignOut,
  exact: true,
};
export default route;
