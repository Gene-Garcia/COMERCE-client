import routes from "../../../../shared/Route/routes";
import Login from "./index";

const route = {
  path: routes.LOGIN.path,
  component: Login,
  exact: true,
};
export default route;
