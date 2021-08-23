import routes from "../../../../shared/Route/routes";
import Home from "./index";

const route = {
  path: routes.HOME.path,
  component: Home,
  exact: true,
};

export default route;
