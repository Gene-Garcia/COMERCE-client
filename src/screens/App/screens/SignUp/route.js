import routes from "../../../../shared/Route/routes";
import SignUp from "./index";

const route = {
  path: routes.SIGN_UP.path,
  component: SignUp,
  exact: true,
};
export default route;
