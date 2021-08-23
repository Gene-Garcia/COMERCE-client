import routes from "../../../../shared/routes";
import SignOut from "./index";

const route = {
  path: routes.SIGN_OUT.path,
  component: SignOut,
  exact: true,
};
export default route;
